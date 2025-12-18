`use strict`;

/*
let i = 3;
while (i < 20) {
  if (i % 9 === 0) console.log(i);
  i++;
}

let var1 = 0;
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    var1++;
  }
}
console.log(var1);

let firstname = `Leonard`;
let surName = `Pocrncic`;
let fullName = firstname.concat(` `).concat(surName);
console.log(fullName);

let z = 2,
  y = 10;
const x = z === 2 ? y : 5;
console.log(x);

let x2;
if (z === 2) x2 = y;
else x2 = 5;
console.log(x2);

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(`${i} je paran broj.`);
  else console.log(`${i} je neparan broj.`);
}


var words = ["quickest", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];

const retrunMax = (arr) =>
  arr.reduce((acc, el) => (el.length > acc.length ? el : acc), ``);

console.log(retrunMax(words));

// 1. Kreiraj objekt koji reprezentira neki specifični auto, sa bar 8 svojstava, od kojih su 3 funkcije (npr. ubrzaj, zakoci itd.), a jedna je također objekt. Probajte referencirati druge vrijednosti objekta u funkcijama. Svaka funkcija mora primati argumente i vracati neku vrijednost.
// 2. Pozovite funkcije svog objekta sa argumentima i ispisite rezultat.
// 3. Sa petljom pristupi svim brojivim svojstvima tvog auto objekta i ispiši vrijednosti u konzoli zajedno sa njihovim imenima (kljucevima) (npr. ime: Ivan)
// 4. Ispiši u konzoli razumljivu rečenicu koja uključuje bar 2 svojstva tvog objekta.
// 5. Pretvori svoj objekt u JSON string.

// 1.
const auto = {
  marka: "Toyota",
  model: "Supra",
  godina: 2020,
  boja: "crvena",
  brzina: 0,
  motor: {
    snaga: 340,
    zapremina: 3.0,
  },

  ubrzaj(sekundi) {
    const ubrzanje = this.motor.snaga * 0.05;
    this.brzina += ubrzanje * sekundi;
    return `Auto je ubrzao i sada vozi ${this.brzina.toFixed(1)} km/h.`;
  },

  zakoci(sila) {
    this.brzina -= sila * 5;
    if (this.brzina < 0) this.brzina = 0;
    return `Auto je zakočio i sada vozi ${this.brzina.toFixed(1)} km/h.`;
  },

  promijeniBoju(novaBoja) {
    const staraBoja = this.boja;
    this.boja = novaBoja;
    return `Auto je promijenio boju iz ${staraBoja} u ${this.boja}.`;
  },
};

// 2.
console.log(auto.ubrzaj(10));
console.log(auto.zakoci(10));
console.log(auto.promijeniBoju(`crna`));

// 4.
for (let [key, value] of Object.entries(auto)) {
  if (typeof value === `number`) console.log(`Key: ${key}, Value: ${value}`);
}

// 5.
console.log(
  `${auto.marka} ${auto.model}, ${auto.boja} boja, ${auto.godina}. godište.`
);

// 6.
let autoJason = JSON.stringify(auto);
console.log(autoJason);

// 1. Napisati funkciju koja provjerava jesu li svi znakovi jedinstveni

let password = `0123456789`;

const isUnique = (string) => {
  return new Set(string).size === string.length;
};
console.log(isUnique(password));

// 2. Napisati funkciju koja provjerava jesu li svi znakovi brojevi

const isNumber = function (string) {
  return !Number.isNaN(Number(string));
};

console.log(isNumber(password));

// 3. Napisati funkciju koja prima password i skracuje ju na 10 znakova
const shortenPassword = function (str) {
  return str.slice(0, 10);
};
console.log(shortenPassword(password));
*/

// DOM manipulation
console.log(window.innerWidth);
const odgovor = confirm(`Prihvacate li?`) ? `Da` : `Ne`;
console.log(odgovor);
