const fs = require('fs');
const http = require('http');
const assert = require('assert');
const { MoodleClient } = require('../');
const { EventEmitter } = require('events');

const verbose = process.env.VERBOSE == 1;
const host = process.env.MOCKUP_HOST || "localhost";
const port = process.env.MOCKUP_PORT || 3125;

let mc = null;
let mockupUrl = "http://" + host + ":" + port;
let mockupToken = "exppsBdQwLvNwYRoAuaiBO5j0fWTzxU6"; //Random

//Create mockup server
let server = http.createServer(function (req, res) {
  //Generic error for a mockup
  let error = {
    "exception": "invalid_parameter_exception",
    "errorcode": "invalidparameter",
    "message": "Invalid parameter value detected",
    "debuginfo": "Email address already exists: foo@example.com"
  };
  
  let data = null;
  
  //Expected: /webservice/rest/server.php?wstoken=exppsBdQwLvNwYRoAuaiBO5j0fWTzxU6&moodlewsrestformat=json&wsfunction=core_webservice_get_site_info
  if (!/^\/webservice\/rest\/server\.php/.test(req.url)) {
    data = error;
  }
  else if (!req.url.includes("wstoken=" + mockupToken)) {
    data = error;
  }
  else if (!req.url.includes("moodlewsrestformat=json")) {
    data = error;
  }
  else if (req.url.includes("wsfunction=core_webservice_get_site_info")) {
    data = {
      "sitename": "Test Site",
      "username": "admin",
      "firstname": "Admin",
      "lastname": "User",
      "fullname": "Admin User",
      "lang": "en",
      "userid": 2,
      "siteurl": "https:\/\/moodle.example.com",
      "functions": [ ]
    };
  }
  else if (req.url.includes("wsfunction=core_user_create_users")) {
    data = [
      {
        "id": 3,
        "username": "foo"
      }
    ];
  }
  else {
    data = error;
  }
  
  //Return JSON response
  res.writeHead(200, { "Content-Type": "text/json" });
  res.end(JSON.stringify(data, null, 2));
}).listen(port, host);

describe('Moodle Client', function() {
  
  it('should throw error on missing arguments', function() {
    try {
      new MoodleClient(/* No arguments */);
      assert(false, "Expected to throw an error");
    }
    catch {
    }
    
    try {
      new MoodleClient({ /* No baseUrl */ });
      assert(false, "Expected to throw an error");
    }
    catch {
    }
  });
  
  it('should create new instance', function() {
    mc = new MoodleClient({
      baseUrl: mockupUrl,
      token: mockupToken
    })
    
    assert(typeof mc == "object", "Expected type object");
    
    assert(mc instanceof MoodleClient, "Expected MoodleClient object");
    assert(typeof mc.request == "function", "Expected 'request' function");
    assert(typeof mc.flatten == "function", "Expected 'flatten' function");
    assert(typeof mc.options == "object", "Expected 'options' object");
    
    assert(mc instanceof EventEmitter, "Expected MoodleClient object");
    assert(typeof mc.emit == "function", "Expected 'emit' object");
    assert(typeof mc.on == "function", "Expected 'on' object");
  });
  
  it('should contains modules and facilities', function() {
    assert(typeof mc == "object", "Expected type object");
    
    assert(typeof mc.core == "object", "Expected type object");
    assert(typeof mc.mod == "object", "Expected type object");
    
    assert(typeof mc.core.webservice == "object", "Expected type object");
    assert(typeof mc.core.user == "object", "Expected type object");
    
    assert(typeof mc.core.webservice.getSiteInfo == "function", "Expected type function");
    assert(typeof mc.core.user.createUsers == "function", "Expected type function");
  });
  
  it('should flatten data', function() {
    var data = {
      users: [
        {
          firstname: "Foo",
          lastname: "Bar",
          username: "foo",
          password: "FooBar123!",
          email: "foo@example.com"
        },
        {
          username: "sally",
          password: "Sally123!",
          createpassword: 1,
          preferences: [
            {
              type: "auth_forcepasswordchange",
              value: true
            }
          ]
        }
      ]
    };
    var result = mc.flatten(data);
    assert(typeof result == "object", "Expected type object");
    assert(Object.keys(result).length == 10, "Expected exact number of properties");
    assert(result["users[0][firstname]"] === "Foo", "Expected exact property value for firstname");
    assert(result["users[0][email]"] === "foo@example.com", "Expected exact property value for email");
    assert(result["users[1][username]"] === "sally", "Expected exact property value for username");
    assert(result["users[1][createpassword]"] === 1, "Expected exact property value for createpassword");
    assert(result["users[1][preferences][0][type]"] === "auth_forcepasswordchange", "Expected exact property value for preference type");
    assert(result["users[1][preferences][0][value]"] === true, "Expected exact property value for preference value");
  });

  it('should get site info', function() {
    return new Promise((resolve, reject) => {
      mc.core.webservice.getSiteInfo()
      .then(res => {
        assert(typeof res == "object", "Expected object as result");
        resolve();
      })
      .catch(err => {
        assert(false, err.message);
        reject(err);
      });
    });
  });
  
  it('should create a new user', function() {
    return new Promise((resolve, reject) => {
      var data = {
        users: [
          {
            firstname: "Foo",
            lastname: "Bar",
            username: "foo",
            password: "FooBar123!",
            email: "foo@example.com",
          }
        ]
      };
      mc.core.user.createUsers(data)
      .then(res => {
        assert(typeof res == "object", "Expected object as result");
        resolve();
      })
      .catch(err => {
        assert(false, err.message);
        reject(err);
      });
    });
  });
  
  it('should throw error on unknown function', function() {
    return new Promise((resolve, reject) => {
      mc.request("core_user_func_not_found")
      .then(res => {
        reject(new Error("Expected to throw an error in this case"));
      })
      .catch(err => {
        resolve();
      });
    });
  });
  
  after(function() {
    server.close();
  });
  
});