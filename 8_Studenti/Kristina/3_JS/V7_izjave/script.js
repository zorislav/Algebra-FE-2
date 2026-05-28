//Napišite while petlju koja će ispisivati brojeve od 3 do 20, osim onih djeljivih sa 9.
var i = 3;

while (i <= 20) {
  if (i % 9 !== 0) {
    console.log(i);
  }

  i = i + 1;
}

//2. Koja je vrijednost isprintana u konzoli?
var varOne = 0;
for (i = 0; i < 4; i++) {
  for (j = 0; j < 4; j++) {
    varOne++;
  }
}
console.log(varOne);

//3. forr..of

var niz = ["a", "b", "c"];
for (i = 0; i < niz.length; i++) {
  console.log(niz[i]);
}

for (element of niz) {
  console.log(element);
}

//4. for..in

var obj = { a: 1, b: 2, c: 3 };
for (svojstvo in obj) {
  console.log(svojstvo);
  console.log(obj[svojstvo]);
}
