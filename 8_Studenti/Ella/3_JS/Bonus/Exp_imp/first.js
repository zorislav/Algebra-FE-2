function nekaFunkcija() {}

var modul1 = {
  x: 1,
  y: function () {
    console.log("Hello from modul1");
  },
  z: nekaFunkcija,
};

var niz = [1, 2, 3, 4];

var tekst = "Ovo je primjer za default export";
export default tekst;
