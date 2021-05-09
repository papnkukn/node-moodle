const os = require("os");
const fs = require("fs");
const path = require("path");
const { EventEmitter } = require('events');
const { URLSearchParams } = require('url');
const fetch = require('node-fetch');

//Load package info
const pkg = require(path.resolve(__dirname, "package.json"));

//Load function definitions
const file = path.resolve(__dirname, "api", "functions.json");
const json = fs.readFileSync(file, "utf8");
const definition = JSON.parse(json);

class MoodleError extends Error {
  constructor(obj, message) {
    super(message || obj.message);
    this.name = "MoodleError";
    this.exception = obj.exception;
    this.errorcode = obj.errorcode;
    this.debuginfo = obj.debuginfo;
  }
}

class MoodleClient extends EventEmitter {
  constructor(options) {
    super();
    
    let self = this;
  
    //Argument is required
    if (!options || typeof options != "object") {
      throw new Error("Argument 'options' is required.");
    }
    
    //Base URL is required
    if (!options.baseUrl || typeof options.baseUrl != "string") {
      throw new Error("Argument 'options.baseUrl' is required.");
    }
    
    //Check the URL syntax
    if (!/^https?:\/\//g.test(options.baseUrl)) {
      throw new Error("Argument 'options.baseUrl' must be a URL string.");
    }
    
    //Check the URL syntax
    if (options.baseUrl.includes("server.php")) {
      throw new Error("Argument 'options.baseUrl' should NOT contain the complete URL. Hint: provide base URL such as https://mooodle.example.com");
    }
    
    //Sanitize base URL - trim trailing slash
    options.baseUrl = options.baseUrl.trim().replace(/\/$/g, "");
    
    //Make options available for later
    this.options = options;
    
    //Skip errors by default
    this.on('error', () => { });
    
    //Convert JSON to form data according to the moodle rules
    this.flatten = function(data) {
      let result = { };
      
      function dig(d, prefix) {
        if (typeof d == "string") {
          result[prefix] = d;
          return;
        }
        
        for (var key in d) {
          let item = d[key];
          if (item === null) {
            continue;
          }
          else if (item instanceof Array) {
            for (var i = 0; i < item.length; i++) {
              dig(item[i],
                prefix.length == 0 ?
                prefix + key + "[" + i + "]" : //Root level has no square brackets
                prefix + "[" + key + "][" + i + "]" //Deeper levels must include brackets
              );
            }
          }
          else if (typeof item == "object") {
            for (var i in item) {
              dig(item, prefix + key + "[" + i + "]");
            }
          }
          else {
            result[prefix + "[" + key + "]"] = item;
          }
        }
      }
      
      dig(data, "");
      return result;
    };
    
    //Create a request function
    this.request = function(item, data) {
      return new Promise(async (resolve, reject) => {
        try {
          //Emit an event
          self.emit("request", { definition: item, request: data });
          
          //Get web service functio name
          let wsfunction = null
          if (typeof item == "string") {
            wsfunction = item;
          }
          else if (typeof item == "object") {
            wsfunction = item.name;
          }
          
          //Verify if function name is set
          if (!wsfunction || wsfunction.length == 0) {
            throw new Error("Web Service function not defined: " + item);
          }
          
          //Build User-Agent string
          let userAgent = self.options.userAgent;
          if (!userAgent) {
            userAgent = pkg.name + "/" + pkg.version + " (node.js " + process.version + "; " + os.platform() + " " + os.release() + ")";
          }
          
          //Build request options
          let options = null;
          if (!data) {
            //No data to be sent
            options = {
              method: "GET",
              headers: {
                "User-Agent": userAgent,
                "Accept": "application/json"
              }
            }
          }
          else if (typeof data == "object") {
            //Build request body
            let form = new URLSearchParams();
            let obj = self.flatten(data);
            for (let key in obj) {
              form.append(key, obj[key]);
            }
            options = {
              method: "POST",
              headers: {
                "User-Agent": userAgent,
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
              },
              body: form.toString()
            }
          }
          else {
            throw new Error("Expected data to be either null or object!");
          }
          
          //Complete the URL
          let token = self.options.token || "";
          let url = self.options.baseUrl + "/webservice/rest/server.php?wstoken=" + token + "&moodlewsrestformat=json&wsfunction=" + wsfunction;
          
          //Make a HTTP request
          let res = await fetch(url, options)
          
          //Expected JSON as data object
          let result = await res.json();
          
          //Emit an event
          self.emit("response", { definition: item, request: data, response: result });
          
          //Moodle always returns HTTP status code 200
          //Error can be detected by object properties
          if (typeof result.exception == "string") {
            throw new MoodleError(result);
          }
          
          //Success
          resolve(result);
        }
        catch (err) {
          self.emit("error", err);
          reject(err);
        }
      });
    }
    
    //Store definition into the instance
    this.definition = definition;
    
    //List of generated functions
    this.functions = [ ];
    
    //Bind Moodle Web Service functions, e.g. core_user_create_users => core.user.createUsers()
    let client = this;
    for (let item of definition.items) {
      //Create a new module
      if (!client[item.module]) {
        client[item.module] = { };
      }
      //Create a new facility
      if (!client[item.module][item.facility]) {
        client[item.module][item.facility] = { };
      }
      //Create a new function
      if (!client[item.module][item.facility][item.preferName]) {
        this.functions.push(item.module + "." + item.facility + "." + item.preferName);
        client[item.module][item.facility][item.preferName] = function(data) {
          return client.request(item, data);
        };
      }
    }
  }
};

module.exports = {
  MoodleError,
  MoodleClient
};