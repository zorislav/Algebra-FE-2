//1.
function Dog(name) {
  this.name = name || "Rex";
  this.bark = function () {
    return "Woof Woof";
  };
}

//2.
var dog = new Dog("Skippy");
console.log(dog.name);

//3.
Dog.prototype.getName = function () {
  return this.name;
};

console.log(dog.getName());
