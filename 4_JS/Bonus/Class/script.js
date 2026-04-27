class Osoba {
  constructor(firstName, lastName) {
    this.ime = firstName;
    this.prezime = lastName;
    this.ispisiMe = function () {
      console.log(`Ja sam ${this.ime}, ${this.prezime}`);
    };
  }
}

const ivica = new Osoba("Ivan", "Horvat");
ivica.ispisiMe();

// function Osoba(firstName, lastName) {
//   this.ime = firstName;
//   this.prezime = lastName;
//   this.ispisiMe = function () {
//     console.log(`Ja sam ${this.ime}, ${this.prezime}`);
//   };
// }

// const ivica = new Osoba("Ivan", "Horvat");
// ivica.ispisiMe();
