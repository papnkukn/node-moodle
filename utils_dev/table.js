const os = require('os');
const fs = require('fs');
const path = require("path");

const file = path.resolve(__dirname, "..", "api", "functions.json");
const json = fs.readFileSync(file, "utf8");
const definition = JSON.parse(json);

//Find command line arguments
let updateStandalone = false;
let updateReadme = false;
for (let arg of process.argv) {
  updateStandalone |= (arg == "--update-standalone");
  updateReadme |= (arg == "--update-readme");
}

//Table header
let header = `| JS function | API function | Description |`;
let separator = `|-------------|--------------|-------------|`;

//Append header
let list = [ header, separator ];

//Append table rows
for (var i = 0; i < definition.items.length; i++) {
  let item = definition.items[i];
  let name = item.module + "." + item.facility + "." + item.preferName;
  let line = item.module + "." + item.facility + "." + item.preferName;
  list.push(`| ${name}(data) | ${item.name} | ${item.description} |`);
}

//Update README.md or just print to the console
if (updateReadme) {
  const readme = path.resolve(__dirname, "..", "README.md");
  const md = fs.readFileSync(readme, "utf8");
  let index = md.indexOf(header);
  if (index == -1) {
    console.log("Header position not found in README!");
    process.exit(1);
  }
  
  let hpos = -1;
  let fpos = -1;
  let nrows = list;
  let lines = md.split(/\r?\n/g);
  for (var i = 0; i < lines.length; i++) {
    if (hpos == -1 && lines[i] == header) {
      hpos = i; //Found header
      continue;
    }
    if (hpos != -1 && lines[i].indexOf("|") == 0) {
      fpos = i; //Update final row
      continue;
    }
    if (hpos != -1 && fpos != -1) {
      lines.splice(hpos, fpos - hpos + 1); //Remove rows in between
      lines.splice(hpos, 0, ...nrows); //Add new rows
      break;
    }
  }
  
  let updated = lines.join(os.EOL);
  fs.writeFileSync(readme, updated);
  
  console.log("Done!");
}
else if (updateStandalone) {
  const mdfile = path.resolve(__dirname, "..", "wiki", "functions.md");
  let updated = list.join(os.EOL);
  fs.writeFileSync(mdfile, updated);
  console.log("Done!");
}
else {
  console.log(list.join(os.EOL));
}