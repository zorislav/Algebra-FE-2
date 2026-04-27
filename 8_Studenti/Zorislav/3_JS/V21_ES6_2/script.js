// Arrow funkcije

const bark = () => "Woof Woof";

// const bark = function (){
//   return "Woof Woof";
// }

// function bark(){
//   return "Woof Woof";
// }

console.log(bark());

const ispis = (ime) => {
  console.log(ime);
  return ime;
};

ispis("Perica");

const ispis2 = (ime, prezime) => {
  console.log(ime, prezime);
  return ime;
};

ispis2("Perica", "Mali");

//1. Napišite Promise koji čeka funkciju getX, i na resolved
// reagira sa console.log-om vrijednosti vraćene vrijednosti,
// a na reject reagira sa console.log-om stringa "Oh no!"
//2. Ako već niste, prepišite sve funkcije u arrow funkcije.

// Opcija 1 - chaining

const getX = () => Math.random() >= 0.5;
//console.log(getX());

const prom = new Promise((resolve, reject) => {
  const x = getX();

  setTimeout(() => {
    x ? resolve(x) : reject(x);
  }, 2000);
});

// prom
//   .then((value) => console.log(`Yay! ${value}`))
//   .catch((value) => console.log(`Oh, no! ${value}`));

// Opcija 2 - async / await

const run = async () => {
  try {
    const value = await prom;
    console.log(`Yay! ${value}`);
  } catch (value) {
    console.log(`Oh, no! ${value}`);
  }
};

run();
