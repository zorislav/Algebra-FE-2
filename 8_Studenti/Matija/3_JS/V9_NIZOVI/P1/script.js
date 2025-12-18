//1.
var names = ["John", "Jane", "Bob", , "Mike"];

for (var element of names) {
  console.log(element);
}

//2.
names.push("Matija");

//3.
for (var element of names) {
  if (element === "Jane") break;
}

//4.
for (var i = 0; i <= names.length - 1; i++) {
  if (!names[i]) names.splice(i, 1);
}

console.log(names);

//foEach
names.forEach(function (name) {
  console.log("Element je: " + name);
});

//map
var noviNiz2 = names.map(function (name) {
  return "Ime: " + name;
});

console.log(noviNiz2);
