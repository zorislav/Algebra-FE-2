// 1.

const getX = () => Math.random() >= 0.5;

const myPromise = new Promise((resolve, reject) => {
  const x = getX();

  if (x) {
    setTimeout(() => resolve(x), 2000);
  } else {
    setTimeout(() => reject(x), 2000);
  }
});

// myPromise
//  .then((value) => console.log(`Da: ${value}`))
//  .catch((value) => console.log(`Ne: ${value}`));

const myAsyncFn = async () => {
  try {
    const value = await myPromise;
    console.log(`Da: ${value}`);
  } catch (value) {
    console.log(`Ne: ${value}`);
  }
};

myAsyncFn();
