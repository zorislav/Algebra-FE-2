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
var z = vratiNesto()();

console.log(y);
console.log(z);

// 2.
var myF = (function (name) {
  var x = name;
  function f() {
    return x;
  }
  return f;
})();
console.log(myF());
