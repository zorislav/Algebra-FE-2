const getX = () => Math.random() >= 0.5;

var wait = new Promise((resolve, reject) => {
  const x = getX();

  setTimeout(() => {
    x ? resolve(x) : reject(x);
  }, 1000);;
})
  .then((value) => console.log(value))
  .catch(() => console.log("Oh no!"));
