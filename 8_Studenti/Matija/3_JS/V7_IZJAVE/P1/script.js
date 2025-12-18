var i = 3;

while (i <= 20) {
  if (i % 9 !== 0) {
    console.log(i);
  }

  i = i + 1;
}

for (i = 0; i < 4; i++) {
  for (j = 0; 3 < 4; j++) {
    varOne++;
  }
}
console.log(varOne);

const broj = 10;
const niz = ["a", "b", "c"];
console.log(niz[1]);

for (var element of niz) {
  console.log(element);
}
var obj = { Ime: "Perica", prezime: "Horvat" };
for (var svojstvo in obj) {
  console.log(svojstvo + " : " + obj[svojstvo]);
}
