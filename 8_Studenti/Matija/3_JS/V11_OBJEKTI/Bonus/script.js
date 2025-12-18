// 1.

var datum = new Date();

console.log(datum.toString());
console.log(datum.toLocaleString());

//2.

const Osoba = {
  Ime: Perica,
  age: 55,
  toJSON: function () {
    return this.ime + " " + this.age + " godina";
  },
};

console.log(Osoba.valueOf());
console.log(Osoba.Ime.valueOf());

//3.
console.log(Osoba);
console.log(JSON.stringify(Osoba));

const jsonAdresa = '{"ulica", "Ilica", "broj":21, "grad":"Zagreb"}';
const objaAdresa = JSON.parse(jsonAdresa);
console.log(objaAdresa.grad);

//4.
console.log(JSON.stringify(Osoba));

console.log("Sirina ekrana je: " + windows.screen.width);

const element = document.getElementById("myDiv");
console.log(element);

const tekskt = "Ovo je primjer teksta";
const re = /primjer/;
console.log(tekst.replace(re, "nastavak"));

RegExp;
