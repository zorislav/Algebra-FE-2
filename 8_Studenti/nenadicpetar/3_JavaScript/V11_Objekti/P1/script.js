var auto = {
  brend: {
    tip: "Volvo",
    model: "V40",
  },
  boja: "crvena",
  brzina: 60,
  maxBrzina: 160,
  godinaProizvodnje: 1998,

  ubrzaj: function (brojSekundi) {
    while (brojSekundi > 0 && this.brzina + 5 <= this.maxBrzina) {
      this.brzina += 5;
      brojSekundi--;
    }
    return this.brzina;
  },

  zakoci: function (brojSekundi) {
    while (brojSekundi > 0 && this.brzina > 0) {
      this.brzina = Math.max(0, this.brzina - 20);
      brojSekundi--;
    }
    return this.brzina;
  },

  promijeniBoju: function (boja) {
    this.boja = boja;
    return this.boja;
  },
};

console.log(auto.zakoci(4)); // očekuješ da brzina padne (ali ne ispod 0)
console.log(auto.ubrzaj(10)); // povećava brzinu ali ne preko maxBrzina

// Ispis svih svojstava objekta:
for (const key in auto) {
  if (auto.propertyIsEnumerable(key)) {
    console.log(key + ": " + auto[key]);
  }
}

// Prikaz boje i brenda
console.log("Boja mog " + auto.brend.tip + " auta je " + auto.boja);

// JSON prikaz
console.log(JSON.stringify(auto));
