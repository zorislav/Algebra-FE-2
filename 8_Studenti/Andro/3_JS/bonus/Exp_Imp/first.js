function nekaFunkcija() {
  console.log("Neka funkcija");
}

export var modul1 = {
  x: 1,
  y: function () {
    console.log("Hello from modul1");
  },
  z: nekaFunkcija,
};

export var niz = [1, 2, 3, 4];

var tekst = "Ovo je primjer za default export";

export default tekst;
