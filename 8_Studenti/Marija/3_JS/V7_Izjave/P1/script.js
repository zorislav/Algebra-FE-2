// 1.

var i = 3;

while (i <= 20) {
  if (i % 9 !== 0) {
    console.log(i);
  }

  i = i + 1;
}

// 2.

var varOne = 0;
for (i = 0; i < 4; i++) {
  for (j = 0; j < 4; j++) {
    varOne++;
  }
}
console.log(varOne);

// Bonus

var niz = ["a", "b", "c"]; // niz[0]

for (var i = 0; i < 3; i++) {
  console.log(niz[i]);
}

for (var element of niz) {
  console.log(element);
}

var obj = { ime: "Perica", prezime: "Horvat" };

for (var svojstvo in obj) {
  console.log(svojstvo + " : " + obj[svojstvo]);
}
