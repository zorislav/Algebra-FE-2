// 1. Kreiraj objekt koji reprezentira neki specifični auto, sa bar 8 svojstava, od kojih su 3 funkcije (npr. ubrzaj, zakoci itd.), a jedna je također objekt. Probajte referencirati druge vrijednosti objekta u funkcijama. Svaka funkcija mora primati argumente i vracati neku vrijednost.

// 2. Pozovite funkcije svog objekta sa argumentima i ispisite rezultat.
// 2. Sa petljom pristupi svim brojivim svojstvima tvog auto objekta i ispiši vrijednosti u konzoli zajedno sa njihovim imenima (kljucevima) (npr. ime: Ivan)
// 3. Ispiši u konzoli razumljivu rečenicu koja uključuje bar 2 svojstva tvog objekta.
// 4. Pretvori svoj objekt u JSON string.

var auto = {
  brend: {
    tip: "Volvo",
    model: "V40",
  },
  boja: "crvena",
  brzina: 60,
  maxBrzina: 120,
  godinaProizvodnje: 1998,
  ubrzaj: function (brojSekundi) {
    while (brojSekundi && this.brzina <= this.maxBrzina) {
      this.brzina = this.brzina + 5;
      brojSekundi = brojSekundi - 1;
    }
    return this.brzina;
  },
  zakoci: function (brojSekundi) {
    while (brojSekundi && this.brzina > 0) {
      this.brzina -= 20;
      brojSekundi -= 1;
    }
    return this.brzina > 0 ? this.brzina : 0;
  },
  promijeniBoju: function (novaBoja) {
    this.boja = novaBoja;
    return this.boja;
  },
};

// 2.
console.log(auto.ubrzaj(10));
console.log(auto.zakoci(5)); // sa 6  rezultat je -10 sto nije realno, ali to je zbog toga sto funkcija ne provjerava da li je brzina vec 0

//  3.
for (var key in auto) {
  if (auto.propertyIsEnumerable(key)) {
    console.log(key + " - " + auto[key]);
  }
}

// 4.

console.log("Boja mog " + auto.brend.tip + " je " + auto.boja);

// 5.
console.log(JSON.stringify(auto));
