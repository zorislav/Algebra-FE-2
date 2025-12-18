"use strict";

// 1. Postavite “use strict” direktivu na početak programa u scripts.js. Ispravite sve greške koje se javljaju.
var a = 78; // Dodao var
var b = 34;

// delete dozvoljen samo za object properties
// delete a;
//delete window.b;
const myObject = { property1: 1, property2: 2, property1: 1 }; // Dodao const

// 2. Dodajte polje "user" u "users" pomoću spread operatora. Spremite rezultat u novu varijablu i ispisite rezultat.
const users = [
  { name: "Petar", surname: "Nenadić" },
  { name: "Kata", surname: "Nenadić" },
];

const user = { name: "Josip", surname: "Nenadić" };
const user2 = { name: "Ana", surname: "Nenadić" };

var allUsers = [...users, user, user2];
console.log(allUsers);

// 3. Koju vrijednost vraćaju console.log izjave? Probajte zamijeniti let sa var.
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log("The number is ${i}");
  }, 1000);
}

// i undefined ako je u for petlji let
console.log(i);

// Bonus
function ispisiImena(...args) {
  console.log(args);
  console.log(args[2]);
}

ispisiImena("Ivan", "Marija", "Perica");
