// 1.
var x = "John Doe";
function vratiNesto(name) {
  var x = name;
  function f() {
    return x;
  }
  return f;
}
var y = vratiNesto("Jane Doe");
var z = vratiNesto()(); // vratit ce nam undefined jer nemamo niejdan argument

console.log(y);
console.log(z);

// 2.
var myF = (function (name) {
  var x = name;
  function f() {
    return x;
  }
  return f;
})(x); // function expression + immediately invoked

console.log(myF());
