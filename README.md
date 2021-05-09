# Moodle API client for Node.js

A simple and developer friendly JavaScript module to perform Web Service (API) calls to the Moodle site.

## Getting started

Install the module
```bash
npm install node-moodle
```

Get site info (using Promised callbacks)
```js
const { MoodleClient } = require('node-moodle');

const moodle = new MoodleClient({
  baseUrl: "https://moodle.example.com", //<-- Put your Moodle URL here
  token: "exppsBdQwLvNwYRoAuaiBO5j0fWTzxU6" //<-- Put your token here
});

moodle.core.webservice.getSiteInfo()
  .then(res => console.log(res))
  .catch(err => console.error(err.message));
```

Create a new user (using async-await approach)
```js
const { MoodleClient } = require('node-moodle');
const moodle = new MoodleClient({ ... });

async function main() {
  try {
    //Request data
    var req = {
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

    //Invoke a method
    var res = await moodle.core.user.createUsers(req);
    
    //Response data
    console.log(res);
    /*
    [
      {
        "id": 3,
        "username": "foo"
      }
    ]
    */
  }
  catch (err) {
    console.log(err);
  }
}

main();
```

## Event handlers

`MoodleClient` extends `EventEmitter`
```js
const { MoodleClient } = require('node-moodle');
const moodle = new MoodleClient({ ... });

//Before request
moodle.on("request", function(data) {
  console.log(data);
});

//After request
moodle.on("resposne", function(data) {
  console.log(data);
});

//Catch error
moodle.on("error", function(err) {
  console.error(err);
});
```

## Convert JSON to form data

Moodle has a peculiar way of specifying request parameters.
Parameters can either be sent in URL query string or POST form body.

Thus a JSON object needs to be converted to form data
```json
{
  "users": [
    {
      "firstname": "Foo",
      "lastname": "Bar",
      "username": "foo",
      "password": "FooBar123!",
      "email": "foo@example.com"
    }
  ]
}
```

As `Content-Type: application/x-www-form-urlencoded`
```
users[0][firstname]=Foo&users[0][lastname]=Bar&users[0][username]=foo&users[0][password]=FooBar123%21&users[0][email]=foo%40email.com
```

To perform the conversion in the code invoke the `flatten` function
```js
const { MoodleClient } = require('node-moodle');
const moodle = new MoodleClient({ ... });

const form = moodle.flatten({
  "users": [
    {
      "firstname": "Foo",
      "lastname": "Bar",
      "username": "foo",
      "password": "FooBar123!",
      "email": "foo@example.com"
    }
  ]
});

console.log(form); //users[0][firstname]=Foo&users[0][lastname]=Bar...
```

## List of functions

Offical list of functions can be found at [Web service API functions](https://docs.moodle.org/dev/Web_service_API_functions)

The following table represents mapping between JavaScript function names and Moodle Web Service function names.

| JS function | API function | Description |
|-------------|--------------|-------------|
| auth.email.getSignupSettings(data) | auth_email_get_signup_settings | Get the signup required settings and profile fields. |
| auth.email.signupUser(data) | auth_email_signup_user | Adds a new user (pendingto be confirmed) in the site. |
| core.user.createUsers(data) | core_user_create_users | Create users - admin function |
| core.webservice.getSiteInfo(data) | core_webservice_get_site_info | Return some site info / user info / list web service functions |
| [Read more...](https://github.com/papnkukn/node-moodle/blob/main/wiki/functions.md) | | |

Functions are used in the following manner
```js
const { MoodleClient } = require('node-moodle');
const moodle = new MoodleClient({ ... });

//core_webservice_get_site_info => core.webservice.getSiteInfo
moodle.core.webservice.getSiteInfo(); //Returns `Promise`
```

### Handling Promise

`Promise` can be handled with `.then().catch()` function chain
```js
moodle.core.webservice.getSiteInfo()
.then(function(res) {
  console.log(res);
})
.catch(function(err) {
  console.error(err);
});
```
or using `async-await` syntax for later versions of JavaScript
```js
async function sample() {
  try {
    var res = await moodle.core.webservice.getSiteInfo();
    console.log(res);
  }
  catch (err) {
    console.error(err);
  }
}

sample();
```

Note that the `data` argument is not always required and can be omitted.

## Updating function list

Run the extract script to scrape function names from the official website
```bash
npm run extract
```

The script downloads the HTML from [Web service API functions](https://docs.moodle.org/dev/Web_service_API_functions) and parses rows from the *Core web service functions* table.

To update the table in the `wiki/functions.md` file run
```bash
npm run table
```

## Unit test

Run unit test
```bash
npm run test
```

The test will be performed on a built-in mockup server.