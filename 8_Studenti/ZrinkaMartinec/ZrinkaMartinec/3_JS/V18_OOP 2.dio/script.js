function Dog(name) {
  this.name = name || "Rex";
  this.bark = function () {
    return "Wuf Wuf";
  };
}
//2.
var dog = new Dog("Skippy");
console.log(dog.name);

//3. dodajte dog funkciji metodu koja vraća postavljeno ime psa
// pozovit fn iz novostvorenog objekta i ispišite rezultat

Dog.prototype.getName = function () {
  return this.name;
};

const dog = new Dog("Skippy");

console.log(dog.getName());
