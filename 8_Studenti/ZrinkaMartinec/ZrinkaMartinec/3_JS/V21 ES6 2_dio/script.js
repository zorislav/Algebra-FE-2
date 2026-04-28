// arrow funkcije

const bark = () => "Woof Woof";

function bark() {
  return "Woof Woof";
}

const bar = function () {
  return "Woof Woof";
};

console.log(bark);

const ispis = (ime) => {
  console.log(ime);
  return ime;
};
ispis("Alex");

const ispis2 = (ime, prezime) => {
  console.log(ime, prezime);
  return ime;
};
ispis2("Alex", "Mali");
//2
const getX = () => Math.random() >= 0.5;

const prom = new Promise((resolve, reject) => {
  const x = getX();

  x ? resolve(x) : reject(x);
});
console.log(prom);

prom
  .then((value) => console.log(`Yay! ${value}`))
  .catch((value) => console.log(`Oh, no! ${value}`));

var wait = new Promise((resolve, reject) => {
  const x = getX();

  if (x) {
    return setTimeout(() => resolve(x), 1000);
  }
  return setTimeout(reject, 1000);
});

//Opcija 2 async / await

const run = async () => {
  try {
    const value = await prom;
    console.log(`Yay! ${value}`);
  } catch (value) {
    console.log(`Oh, no! ${value}`);
  }

  console.log(value);
};
run();

fetch().then(() => {});
