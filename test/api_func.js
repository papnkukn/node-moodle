const fs = require('fs');
const path = require("path");
const assert = require('assert');

let file = null;
let definition = null;

describe('Moodle API functions', function() {
  
  it('should be defined', function() {
    file = path.resolve(__dirname, "..", "api", "functions.json");
    assert(typeof file == "string", "Expected type string");
    assert(fs.existsSync(file), "Expected file to exist. Hint: npm run extract");
  });
  
  it('should be loadable', function() {
    const json = fs.readFileSync(file, "utf8");
    assert(typeof json == "string", "Expected type string");
    
    definition = JSON.parse(json);
    assert(typeof definition == "object", "Expected type object");
    assert(definition.items instanceof Array, "Expected 'items' to be array");
    assert(definition.items.length > 0, "Expected 'items' to have many functions");
  });
  
  it('should have required properties', function() {
    for (var i = 0; i < definition.items.length; i++) {
      let item = definition.items[i];
      assert(typeof item == "object", "Expected type object at position " + i);
      
      assert(typeof item.name == "string", "Expected name as string at position " + i);
      assert(item.name && item.name.trim().length, "Expected name to be set at position " + i);
      
      assert(typeof item.module == "string", "Expected module as string at position " + i);
      assert(item.module && item.module.trim().length, "Expected module to be set at position " + i);
      
      assert(typeof item.facility == "string", "Expected facility as string at position " + i);
      assert(item.facility && item.facility.trim().length, "Expected facility to be set at position " + i);
      
      assert(typeof item.preferName == "string", "Expected preferName as string at position " + i);
      assert(item.preferName && item.preferName.trim().length, "Expected preferName to be set at position " + i);
    }
  });
  
});