// 1 pratite kod u script.js koje su vrijednosti y i z varijabli na kraju programa

var x = "John Doe";

function vratiNesto(name) {
  var x = name;
  function f() {
    return x;
  }
  return f;
}

var y = vratiNesto("Jane Doe");
var z = vratiNesto()();

console.log(y);
console.log(z);

// 2

var myFn = (function (name) {
  var x = name;
  function f() {
    return x;
  }
  return f;
})(x);

console.log(myFn());
