var names = ["John", "Jane", "Bob", , "Mike"];

console.log(names);

//1.
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

names.forEach(function (e) {
  console.log(e);
});

//2.

names.push("Andro");
console.log(names);

//3.

for (var element of names) {
  console.log(element);
  if (element === "Jane") break;
}

//4.

for (var i = 0; i < names.length; i++) {
  if (!names[i]) names.splice(i, 1);
}

// var noviNiz = names.filter(function (element) {
//   return element !== undefined;
// });
// console.log(noviNiz);

console.log(names);

//map

var noviNiz = names.map(function (element) {
  return "Ime: " + element;
});

console.log(names);
console.log(noviNiz);
