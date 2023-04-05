import os from 'os';
import fs from 'fs';
import { EventEmitter } from 'events';
import { URLSearchParams } from 'url';
import fetch, { RequestInit } from 'node-fetch';

import IMoodleErrorOptions from './interfaces/IMoodleErrorOptions';
import IMoodleClientOptions from './interfaces/IMoodleClientOptions';
import IMoodleWSDefinition from './interfaces/IMoodleWSDefinition';
import IMoodleWSFn from './interfaces/IMoodleWSFunction';

//Load package info
import pkg from './package.json';
import IMoodleWSAPI from './interfaces/IMoodleWSAPI';
import IMoodleWSPayload from './interfaces/IMoodleWSPayload';
import path from 'path';

interface IExtMoodleWSAPI extends IMoodleWSAPI {
  [k: string]: any;
}

//Load function definitions
const json = fs.readFileSync(
  path.resolve(__dirname, 'api', 'functions.json'),
  'utf8'
);
const definition: IMoodleWSDefinition = JSON.parse(json);

type AnyObject = { [key: string]: any };
type Diggable = string | AnyObject;

export class MoodleError extends Error {
  exception?: string;
  errorcode?: number;
  debuginfo?: string;
  constructor(options: IMoodleErrorOptions) {
    super(options.message);
    this.name = 'MoodleError';
    this.exception = options.exception;
    this.errorcode = options.errorcode;
    this.debuginfo = options.debuginfo;
  }
}

export class MoodleClient extends EventEmitter {
  private _definition?: IMoodleWSDefinition;
  private _functions?: string[];
  public api: IExtMoodleWSAPI;
  public static flatten: (data: any) => any;
  public request: (
    item: string | IMoodleWSFn,
    payload?: IMoodleWSPayload
  ) => Promise<AnyObject | Error>;
  constructor(public options: IMoodleClientOptions) {
    super();

    //Check the URL syntax
    if (!/^https?:\/\//g.test(options.baseUrl)) {
      throw new Error("Argument 'options.baseUrl' must be a URL string.");
    }

    //Check the URL syntax
    if (options.baseUrl.includes('server.php')) {
      throw new Error(
        "Argument 'options.baseUrl' should NOT contain the complete URL. Hint: provide base URL such as https://mooodle.example.com"
      );
    }

    //Sanitize base URL - trim trailing slash
    options.baseUrl = options.baseUrl.trim().replace(/\/$/g, '');

    //Skip errors by default
    this.on('error', () => {});

    //Convert JSON to form data according to the moodle rules
    MoodleClient.flatten = function (data) {
      let result: AnyObject = {};

      function dig(d: Diggable, prefix: string) {
        if (typeof d === 'string') {
          result[prefix] = d;
          return;
        }

        for (let key in d as AnyObject) {
          let item = (d as AnyObject)[key];
          if (item === null) {
            continue;
          } else if (item instanceof Array) {
            for (var i = 0; i < item.length; i++) {
              dig(
                item[i],
                prefix.length === 0
                  ? prefix + key + '[' + i + ']' //Root level has no square brackets
                  : prefix + '[' + key + '][' + i + ']' //Deeper levels must include brackets
              );
            }
          } else if (typeof item === 'object') {
            for (let i in item as AnyObject) {
              dig(item, prefix + key + '[' + i + ']');
            }
          } else {
            result[prefix + '[' + key + ']'] = item;
          }
        }
      }

      dig(data, '');
      return result;
    };

    //Create a request function
    this.request = function (item, payload) {
      return new Promise(async (resolve, reject) => {
        try {
          //Emit an event
          this.emit('request', { definition: item, request: payload });

          //Get web service functio name
          let wsfunction = null;
          if (typeof item === 'string') {
            wsfunction = item;
          } else if (typeof item === 'object') {
            wsfunction = item.name;
          }

          //Verify if function name is set
          if (!wsfunction || wsfunction.length === 0) {
            throw new Error('Web Service function not defined: ' + item);
          }

          //Build User-Agent string
          let userAgent = this.options.userAgent;
          if (!userAgent) {
            userAgent =
              pkg.name +
              '/' +
              pkg.version +
              ' (node.js ' +
              process.version +
              '; ' +
              os.platform() +
              ' ' +
              os.release() +
              ')';
          }

          //Build request options
          let options: RequestInit | null = null;
          // if (!payload.body) {
          //No data to be sent
          options = {
            method: 'GET',
            headers: {
              'User-Agent': userAgent,
              Accept: 'application/json',
            },
          };
          // } else if (typeof payload === 'object') {
          //Build request body
          // let form = new URLSearchParams();
          // let obj = MoodleClient.flatten(payload);
          // for (let key in obj) {
          //   form.append(key, obj[key]);
          // }
          // options = {
          //   method: 'POST',
          //   headers: {
          //     'User-Agent': userAgent,
          //     Accept: 'application/json',
          //     'Content-Type':
          //       'application/x-www-form-urlencoded;charset=UTF-8',
          //   },
          //   body: form.toString(),
          // };
          // } else {
          //   throw new Error('Expected data to be either null or object!');
          // }

          let finalPayload = payload;
          if (payload && payload.data) {
            finalPayload = {
              ...finalPayload,
              ...MoodleClient.flatten(payload.data),
            };
          }
          const form = new URLSearchParams(finalPayload);

          //Complete the URL
          let token = this.options.token || '';
          let url =
            this.options.baseUrl +
            '/webservice/rest/server.php?wstoken=' +
            token +
            '&moodlewsrestformat=json&wsfunction=' +
            wsfunction +
            '&' +
            form;

          //Make a HTTP request
          let res = await fetch(url, options);

          //Expected JSON as data object
          let result = await res.json();

          //Emit an event
          this.emit('response', {
            definition: item,
            request: payload,
            response: result,
          });

          //Moodle always returns HTTP status code 200
          //Error can be detected by object properties
          if (typeof result.exception === 'string') {
            throw new MoodleError(result);
          }

          //Success
          resolve(result as AnyObject);
        } catch (err) {
          this.emit('error', err);
          reject(err as Error);
        }
      });
    };

    //Store definition into the instance
    this._definition = definition;

    //List of generated functions
    this._functions = [];

    //Bind Moodle Web Service functions, e.g. core_user_create_users => core.user.createUsers()
    this.api = {} as any;
    const client = this;
    const api = this.api as IExtMoodleWSAPI;
    for (let item of this._definition.items) {
      //Create a new module
      if (!api[item.module]) {
        api[item.module] = {};
      }
      //Create a new facility
      if (!api[item.module][item.facility]) {
        api[item.module][item.facility] = {};
      }
      //Create a new function
      if (!api[item.module][item.facility][item.preferName]) {
        this._functions.push(
          item.module + '.' + item.facility + '.' + item.preferName
        );
        api[item.module][item.facility][item.preferName] = function (
          payload: IMoodleWSPayload
        ) {
          return client.request(item, payload);
        };
      }
    }
  }
}

export default (options: IMoodleClientOptions) => new MoodleClient(options).api;
