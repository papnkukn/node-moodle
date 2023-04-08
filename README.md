# TypeScript Moodle API client for Node.js

A simple and developer friendly TypeScript module to perform Web Service (API) calls to the Moodle site.

## Getting started

Install the module

```bash
npm install node-moodle
```

Get site info (using Promised callbacks)

```ts
import MoodleApi, { MoodleClient } from 'moodle-js';

const moodle = new MoodleApi({
  baseUrl: 'https://moodle.example.com', //<-- Put your Moodle URL here
  token: 'exppsBdQwLvNwYRoAuaiBO5j0aWTzxU6', //<-- Put your token here
});

moodle.core.webservice //<-- with intellisense and type checking
  .getSiteInfo()
  .then((res) => console.log(res)) //<-- Response of type IMoodleSiteInfo
  .catch((err) => console.error(err.message));
```

Get course contents (using async-await approach)

```ts
import MoodleApi from 'moodle-js';
const moodle = new MoodleApi({ ... });

async function main() {
  try {
    const sections =
      await moodle.core.course.getContents({courseid: 1234});//<-- returns IMoodleCourseSection[]

    //Response data
    console.log(sections[0].name);
    /*
    Introduction
    */
  }
  catch (err) {
    console.log(err);
  }
}

main();
```

Changing the token on the fly:
Instead of having to instantiate a new client instance every time you want to access your website
as a different user, you can change the api token on the fly without changing the client instance

```ts
import MoodleApi from 'moodle-js';
const moodle = new MoodleApi({ ... });

async function main() {
  try {
    const { fullname: firstName } = await moodle.core.webservice.getSiteInfo();
    console.log(firstName);
    moodle.config.token = '3752235c2467122123cc04b821bd27cd';
    const { fullname: secondName } = await moodle.core.webservice.getSiteInfo();
    console.log(secondName);
    console.log(sections[0].name);

    /*
    logs:
    John Smith
    Frank William
    */
  }
  catch (err) {
    console.log(err);
  }
}

main();
```

Getting your api token:
if you don't immediately have your token to pass to the api you can import MoodleClient directly
and use the authenticate method to get one.

```ts
import MoodleApi, { MoodleClient } from 'moodle-js';
const YOUR_WEBSITE_URL = 'https://moodle.example.com';
//No token provided beforehand
const moodle = new MoodleApi({
  baseUrl: YOUR_WEBSITE_URL, //<-- Put your Moodle URL here
});

async function main() {
  try {
    //result type of IMoodleWSAuthResponse
    const { token } = await MoodleClient.authenticate({
      baseUrl: YOUR_WEBSITE_URL,
      credentials: { username: 'AwesomeJohn', password: 'SmartPa33word' },
    });
    moodle.api.config.token = token;
    const { fullname: firstName } = await moodle.core.webservice.getSiteInfo();
    /*
    logs:
      John Smith
    */
  } catch (err) {
    console.log(err);
  }
}

main();
```

## JSON to form data

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

```ts
import { MoodleClient } from 'moodle-js';

const form = MoodleClient.flatten({
  users: [
    {
      firstname: 'Foo',
      lastname: 'Bar',
      username: 'foo',
      password: 'FooBar123!',
      email: 'foo@example.com',
    },
  ],
});

console.log(form); //users[0][firstname]=Foo&users[0][lastname]=Bar...
```

## List of functions

Offical list of functions can be found at [Web service API functions](https://docs.moodle.org/dev/Web_service_API_functions)

The following table represents mapping between JavaScript function names and Moodle Web Service function names.

| JS function                                                                         | API function                   | Description                                                    |
| ----------------------------------------------------------------------------------- | ------------------------------ | -------------------------------------------------------------- |
| auth.email.getSignupSettings(data)                                                  | auth_email_get_signup_settings | Get the signup required settings and profile fields.           |
| auth.email.signupUser(data)                                                         | auth_email_signup_user         | Adds a new user (pendingto be confirmed) in the site.          |
| core.user.createUsers(data)                                                         | core_user_create_users         | Create users - admin function                                  |
| core.webservice.getSiteInfo(data)                                                   | core_webservice_get_site_info  | Return some site info / user info / list web service functions |
| [Read more...](https://github.com/papnkukn/node-moodle/blob/main/wiki/functions.md) |                                |                                                                |

Note that the `data` argument is not always required and can be omitted.
