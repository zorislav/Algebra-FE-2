var password = "01233456789";

// 1a
function isUnique(str) {
  _.uniq(str).length === str.length;
}

console.log("Opcija 1:" + isUnique(password));

//1b

function isUnique2(str) {
  return new Set(str).size === str.length;
}

console.log("Opcija 1:" + isUnique2(password));

//2a

function isNum(str) {
  if (_.toNumber(str)) return true;
  return false;
}

console.log("Opcija 2a" + isNum(password));

// 3a

function reduceLen(str) {
  return _.take(str, 10);
}

console.log("Opcija 3a:" + reduceLen(password));
// 3b

function reduceLen2(str) {
  return str.substring(0, 10);
}

console.log("Opcija 3b" + reduceLen2(password));
