//Arrow funkcije

const bark = () => "Woof Woof";

// const bark = function () {
//   return "Woof Woof";
// };

// function bark() {
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

//1., 2.

//Opcija 1 - chaining

const getX = () => Math.random() >= 0.5;
//console.log(getX());

const prom = new Promise((resolve, reject) => {
  const x = getX();

  setTimeout(() => {
    x ? resolve(x) : reject(x);
  }, 2000);
});

// prom
//   .then(() => console.log(`Yay! ${value}`))
//   .catch(() => console.log(`Oh, no! ${value}`));

//Opcija 2 - async / await

const run = async () => {
  try {
    const value = await prom;
    console.log(`Yay! ${value}`);
  } catch (value) {
    console.log(`Oh, no! ${value}`);
  }
};

run();

fetch().then(() => {});
