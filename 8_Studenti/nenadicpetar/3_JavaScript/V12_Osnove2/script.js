var password = "012345678";

function isUnique(str) {
  return _.uniq(str).length == str.length;
}

console.log("Opcija1: " + isUnique(password));

//Opcija la
function isUniquela(str) {
  return new Set(str).size == str.length;
}

console.log("Opcijala: " + isUniquela(password));

// Opcija lb
function isUniquelb(str) {
  var strChars = "";
  for (var i of str) {
    if (strChars.includes(i)) return false;
    strChars += i;
  }

  return true;
}

console.log("Opcijalb: " + isUniquelb(password));

//OPcija 2 - lodash
function isNum(str) {
  //return !!._toNumber(str);

  if (_.toNumber(str)) return true;
  return false;
}

console.log("Opcija2: " + isNum(password));

//Opcija 2a
function isNum2a(str) {
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) return false;
    return true;
  }
}

console.log("Opcija2a: " + isNum2a(password));

//Opcija 3 - lodash
function reduceLen(str) {
  if (str.length > 10) {
    return _.take(str, 10);
  } else {
    return str;
  }
}

console.log("Opcija3: " + reduceLen(password));

//Opcija 3a
function reduceLen3a(str) {
  if (str.length > 10) {
    return str.substring(0, 10);
  } else {
    return str;
  }
}

console.log("Opcija3a: " + reduceLen3a(password));
