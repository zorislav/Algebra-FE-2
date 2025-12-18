// 1.

function Dog(name) {
  this.name = name || "Rex";
  // this.name = name;
  this.bark = function () {
    return "Woof woof!";
  };
}

// 2. Kreirajte objekt iz Dog funkcije

var dog = new Dog("Skippy");
console.log(dog.name);
console.log(dog.bark());

var dog2 = new Dog();
console.log(dog2.name);

// 3. Dodajte Dog funkciju metodu koja vraća postavljeno ime psa. Pozovite ju iz novostvorenog objekta i ispišite rezultat

Dog.prototype.getName = function () {
  return this.name;
};

console.log(dog2.getName());
