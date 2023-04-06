/*** Extract API functions from the Moodle website ***/

//Required dependencies
const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");
const fetch = require("node-fetch");

//Intro
console.log("Extracting API functions from the Moodle website...")

//Moodle: Web service API functions
const url = "https://docs.moodle.org/dev/Web_service_API_functions";
console.log("Location: " + url)

//Make a GET request
fetch(url).then(async res => {
  //Load HTML
  const html = await res.text();
  const dom = new JSDOM(html);
  const document = dom.window.document;
  
  //Debug
  var file = path.resolve(__dirname, "..", "api", "functions.html");
  fs.writeFileSync(file, html);

  //Locate the chapter "Core web service functions"
  var chapter = document.getElementById("Core_web_service_functions");
  if (!chapter) {
    throw new Error("Chapter 'Core web service functions' not found!");
  }

  //Locate the wikitable
  var table = chapter.parentNode.nextSibling.nextSibling;
  if (!table || !table.tagName == "TABLE" || !table.className || table.className.indexOf("wikitable") == -1) {
    throw new Error("Expected '<table class=\"wikitable\">'");
  }

  //Extract headers
  var headers = [ ];
  var columns = table.querySelectorAll("thead tr th"); //Works inside Firefox console
  if (columns.length == 0) {
    columns = table.querySelectorAll("tr:first-child th"); //Works when processing html directly
  }
  for (var column of columns) {
    if (!column.innerText) {
      //Work-around for jsdom
      column.innerText = column.textContent;
    }
    headers.push(column.innerText.trim());
  }
  console.log("Found " + headers.length + " columns");

  //Verify headers
  if (!headers || headers.length != 7 || headers.indexOf("Name") == -1) {
    throw new Error("Expected 7 columns");
  } 

  //Result object
  var data = {
    created: new Date().toISOString(),
    //headers: headers,
    items: [ ]
  };

  //Extract rows from the table
  var rows = table.querySelectorAll("tbody tr");
  if (rows.length == 0) {
    rows = table.querySelectorAll("tr");
  }
  for (var row of rows) {
    
    //Extract data from the row
    var cells = row.querySelectorAll("td");
    if (cells.length == 0) {
      //Header row has "th" instead of "td"
      continue;
    }
    if (cells.length != 7) {
      console.log("Expected 7 cells but got " + cells.length);
      continue;
    }
    
    //Work-around for jsdom
    for (var cell of cells) {
      if (!cell.innerText) {
        cell.innerText = cell.textContent;
      }
    }
    
    //Build data object
    var item = {
      area: cells[0].innerText.trim(), //Area, e.g. core_user
      name: cells[1].innerText.trim(), //Name, e.g. core_user_create_users
      minVersion: cells[2].innerText.trim(), //Introduced in
      description: cells[3].innerText.trim().replace(/\s\s+/g, " "), //Description, trim double spaces in between
      isAjax: cells[4].innerText.trim() == "Yes", //Available AJAX
      isLogin: cells[5].innerText.trim() == "Yes", //Login required
      services: cells[6].innerText.trim(), //Services, e.g. moodle_mobile_app
    };
    
    //Remove 'services' if blank
    if (item.services.length == 0) {
      delete item.services;
    }
    
    //Split area to parts, e.g. "core_user" => module "core" and facility "user"
    var ap = item.area.split('_');
    item.module = ap[0];
    item.facility = ap[1];
    
    //Split name to friendly function name, e.g. core_user_get_course_user_profiles => getCourseUserProfiles
    var fn = item.name.replace(item.area + "_", "");
    var np = fn.split(/_/gi);
    var pn = null;
    for (var p of np) {
      if (!pn) pn = p;
      else pn += p.substr(0, 1).toUpperCase() + p.substr(1);
    }
    item.preferName = pn;
    
    /*
    {
      area: "core_user"
      name: "core_user_get_course_user_profiles"
      description: "Get course user profiles by id"
      minVersion: "2.1"
      isAjax: false
      isLogin: true
      services: "moodle_mobile_app"
      module: "core"
      facility: "user"
      preferName: "getCourseUserProfiles"
    }
    */
    
    data.items.push(item);
  }
  
  console.log("Found " + data.items.length + " functions");

  //Write output to file
  console.log("Writing output to file...");
  var json = JSON.stringify(data, null, 2);
  var file = path.resolve(__dirname, "..", "api", "functions.json");
  fs.writeFileSync(file, json);
  console.log("Saved: " + file);
  
  //Completed
  console.log("Done!");
})
.catch(err => {
  console.error(err);
  process.exit(1);
});