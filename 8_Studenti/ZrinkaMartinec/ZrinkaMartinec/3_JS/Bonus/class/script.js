class Osoba extends {
constructor(firstName, lastName) {
  this.ime = firstName;
  this.prezime = lastName;
  this.ispisiMe = function () {
    console.log(`Ja sam ${this.ime}, ${this.prezime}`);
  };
}
}

//function osoba(firstName, lastName) {
  //this.ime = firstName;
  //this.prezime = lastName;
  //this.ispisiMe = function () {
  //console.log(`Ja sam ${this.ime}, ${this.prezime}`);
  //};
//},

const ivica = new Osoba("Ivan", "Horvat");
ivica.ispisiMe();
