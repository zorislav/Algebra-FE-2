var names = ["John", "Jane", "Bob", , "Mike"];
console.log(names);
//1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.

for (var i = 0; i < names.length; i++) {}
console.log(names[i]);

names.forEach(function (element) {
  console.log(element);
});

//2. Dodajte svoje ime na kraj niza.

names.push("Kristina");
console.log(names);

//3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon išto ispišete "Jane" izađite iz petlje.
for (var element of names) {
  console.log(element);
  if (element === "Jane") break;
}

//4. Napišite naredbu za uklanjanje undefined vrijednosti iz niza.

for (var i = 0; i < names.length; i++) {
  if (!names[i]) names.splice(3, 1);
}
console.log(names);

//var noviNiz = names.filter(function (element) {
// return element !== undefined;
//});

//map

var noviNiz = names.map(function (element) {
  return "Ime:" + element;
});
console.log(names);
console.log(noviNiz);
