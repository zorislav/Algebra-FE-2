// 1. Napišite JavaScript funkciju koja prihvaća zadani niz kao parametar i pronalazi najdužu riječ unutar niza.
// 2. Vratite tu riječ iz funkcije i spremite u varijablu.
// 3. Ispišite varijablu u konzoli.

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

// sta je bolje? Pisat funkcije na pocetku ili kraju teksta, ili u drugi file
