// 1. Kreiraj objekt koji reprezentira neki specifični auto, sa bar 8 svojstava, od kojih su 3 funkcije
// (npr.ubrzaj, zakoci itd.), a jedna je također objekt.
// Probajte referencirati druge vrijednosti objekta u funkcijama.
// Svaka funkcija mora primati argumente i vracati neku vrijednost.

var auto = {
  brend: {
    tip: "Volvo",
    model:"V40",
  },
  boja: "crvena",
  brzina: 60,
  maxBrzina: 160,
  godinaProizvodnje: 1998,
  ubrzaj: function (brojSekundi) {

    while (brojSekundi && this.brzina <= this.maxBrzina) {
      this.brzina = this.brzina + 5;
    brojSekundi--;
    }
    

    return this.brzina;
   },
  zakoci: function () { },
  promjeniBoju: function () { }
};

console.log(auto.ubrzaj(30));