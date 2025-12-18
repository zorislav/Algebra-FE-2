// Opcija 1

var password = "01234567801";

function isUnique(str) {
  return _.uniq(str).length == str.length;
}

console.log("Opcija1: " + isUnique(password));

// Opcija 1a

function isUnique1a(str) {
  //  const mySet = new Set(password);
  //  console.log(mySet.size);

  return new Set(str).size == str.length;
}

console.log("Opcija 1a: " + isUnique1a(password));

// Opcija 1b

function isUnique1b(str) {
  var strChars = "";
  for (var i of str) {
    if (strChars.includes(i)) return false;
    strChars += i;
  }

  return true;
}

console.log("Opcija 1b: " + isUnique1b(password));

// Opcija 2 - lodash

function isNum(str) {
  if (_.toNumber(str)) return true;
  return false;

  // return !!_.toNumber(str);
}

console.log("Opcija 2: " + isNum(password));

// Opcija 2a

function isNum2a(str) {
  for (var i = 0; i < str.length; i++) {
    console.log(str.charCodeAt(i));
    if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) return false;
  }
  return true;
}
console.log("Opcija 2a: " + isNum2a(password));

// Opcija 3 - lodash

function reduceLen(str) {
  if (str.length > 10) {
    return _.take(str, 10);
  } else {
    return str;
  }
}
console.log("Opcija 3: " + reduceLen(password));

// Opcija 3a

function reduceLen3a(str) {
  if (str.length > 10) {
    return str.substring(0, 10);
  } else {
    return str;
  }
}

console.log("Opcija 3a: " + reduceLen3a(password));
