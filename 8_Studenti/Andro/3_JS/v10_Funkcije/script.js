var words = [
  "quickest",
  "jackie brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

var longestWord = findLongestWord(words);

console.log(longestWord);

function findLongestWord(niz) {
  var word = "";
  for (var i = 0; i < niz.length; i++) {
    if (word.length < niz[i].length) {
      word = niz[i];
    }
  }
  return word;
}
