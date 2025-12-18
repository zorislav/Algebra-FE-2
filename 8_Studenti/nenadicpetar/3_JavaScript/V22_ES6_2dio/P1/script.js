// 1. Napišite Promise koji čeka funkciju getX, i na resolved
// reagira sa console.log-om vrijednosti vraćene vrijednosti,
// a na reject reagira sa console.log-om stringa "Oh no!"

// 2. Ako već niste, prepišite sve funkcije u arrow funkcije.

const getX = () => Math.random() >= 0.5;

const myPromise = new Promise((resolve, reject) => {
  const x = getX();

  // if (x) {
  //   setTimeout(resolve, 2000);
  // } else {
  //   setTimeout(reject, 2000);
  // }

  if (x) {
    setTimeout(() => resolve(x), 2000);
  } else {
    setTimeout(() => reject(x), 2000);
  }
});

// myPromise.then((value) => console.log("Da: ${value}"));
// myPromise.catch((value) => console.log("O, ne: ${value}"));

const myAsyncFn = async () => {
  try {
    const value = await myPromise;
    console.log(value);
    console.log(`${value}`);
  } catch (value) {
    console.log(`O, ne: ${value}`);
  }
};

myAsyncFn();
