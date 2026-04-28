var password = "0123456789";

//1a funkcija da li su svi znakovi jedinstveni
function isUnique(str) {
  return _.uniq(str).length === str.length;
}

console.log("Opcija 1a:" + isUnique(password));

//1b
function isUnique2(str) {
  return new Set(str).size === str.length;
}

console.log("Opcija 1b:" + isUnique2(password));

//1c
function isUnique3(str) {
  var strChars = "";
  for (var i of str) {
    if (strChars.includes(i)) return false;
    strChars = strChars + i;
  }
  return true;
}
isUnique3(password);

console.log("Opcija 1c:" + isUnique3(password));

//2a

function isNum(str) {
  if (_.toNumber(str));
  return true;
  return false;
}
console.log("Opcija 2a: " + isNum1(password));

//2b

function isNum2(str) {
  return str.charCodeAt(0);
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) return false;
  }
  return true;
}
console.log("Opcija 2b:" + isNum2(password));

//3a

function reduceLen(str) {
  return _.take(str, 10);
}
console.log("Opcija 3a: " + reduceLen(password));

//3b
function reduceLen2(str) {
  return str.substring(0, 10);
}
console.log("Opcija 3b: " + reduceLen2(password));
