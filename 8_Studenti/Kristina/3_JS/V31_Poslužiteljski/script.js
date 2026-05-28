const _ = require("lodash");

function getType(e) {
  if (_.isNumber(e)) {
    console.log(`${e} is a number`);
  } else if (_.isString(e)) {
    console.log(JSON.stringify(e) + " is a string");
  } else if (_.isArray(e)) {
    console.log(JSON.stringify(e) + " is an array");
  } else if (_.isObject(e)) {
    console.log(JSON.stringify(e) + " is an object");
  } else {
    console.log(`Cannot decide!`);
  }
  return "Done";
}
module.export = getType;
