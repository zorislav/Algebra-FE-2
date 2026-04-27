var password = "01234567879";

//1
function isUniquue(str) {
  return _.uniq(str).length === str.length;
}

console.log("Opcija 1:" + isUniquue(password));
//1b

function isUniquue2(str) {
  return new Set(str).size === str.length;
}
console.log("Opcija 1b:" + isUniquue2(password));

//1c

function isUniquue3(str) {
  var strChars = "";
  for (var i of str) {
    console.log(i);
    if (strChars.includes(i)) return false;
    strChars = strChars + i;
  }
}
//console.log("Opcija 1c:" + isUniquue3 (password));
isUniquue3(password);

function isNum(str) {
  console.log(_toNumber(str));
}
isNum(password);

//2a

function isNum(str) {
  if (_toNumber(str)) {
    return true;
    return false;
  }
}

//2b

function isNum2(str) {
  return str.charCodeAT(9);
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) {
      return false;
    }
    return true;
  }
}
console.log("Opcija 2b:" + isNum2(password));

//3

function reduceLen1(str) {
  return _.take(str, 10);
}
console.log("Opcija 3a:" + reduceLen1(password));

function reduceLen2(str) {
  return str.substring(0, 9);
}
console.log("Opcija 3b:" + reduceLen2(password));
