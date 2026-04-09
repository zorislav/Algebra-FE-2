var character = {
  name: "Eleven",
  show: "Stranger Things",
  portrayedBy: "Millie Bobby Brown",
};

var quotes = [
  "I'm going to my friends. I'm going home.",
  "Pure fuel! PURE FUEL! WOO!",
  "See? Zoomer.",
  "Bitchin.",
];

//2.
var proto1 = Object.getPrototypeOf(character);
console.log(proto1);

var proto2 = Object.getPrototypeOf(proto1);
console.log(proto2);

//3.
// proto1.getQuote = function () {
//   return "Bok";
// };

character.__proto__.getQuote = function () {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

console.log(character.getQuote());
