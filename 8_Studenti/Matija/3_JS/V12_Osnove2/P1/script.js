var password = "012345678";

// 1. Napisati funkciju koja provjerava da li su svi znakovi jedinstveni

// Opcija 1 - lodash

function isUnique() {
  return _.uniq(str).length == str.length;
}

console.log("Opcija1: " + isUnique(password));

// Opcija 1a
function Isunique1a() {
  //   const mySet = new Set(password);
  //   console.log(mySet.size);

  new Set(str).size == str.length;
}

console.log("Opcija 1a: " + Isunique1a(password));

// Opcija 1b

function isUnique1b(str) {
  var strChars = "";

  for (var i of str) {
    if (strChars.includes(i)) return false;
    strChars += i;
  }
  return true;
}

console.log("Opcija1b: " + isUnique1b(password));

//2. Napisati funkciju koja provjerava da li su svi znakovi brojke

// Opcija 2 - lodash

function isNum() {
  // return !!_.toNumber(str);
  if (_.toNumber(str)) return true;
  return false;
}

console.log(isNum(password));

// Opcija 2a

function isNum2a() {
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) return false;
  }
  return true;
}

console.log("Opcija2a: " + isNum2a(password));

// 3. Napisati funkciju koja uzima password i skracuje ju na 10 znakova, ako je broj znakova veci od 10

// Opcija 3 - lodash

function reduceLen(str) {
  if (str.length > 10) {
    return _.take(str, 10);
  } else {
    return str;
  }
}

console.log("Opcija3: " + reduceLen(password));

// Opcija 3a

function reduceLen3a(str) {
  if (str.length > 10) {
    return str.substring(0, 10);
  } else {
    return str;
  }
}

console.log("Opcija3a: " + reduceLen3a(password));
