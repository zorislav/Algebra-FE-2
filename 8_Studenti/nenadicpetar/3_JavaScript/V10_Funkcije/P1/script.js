var words = ["quickest", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];

function findLongestWord(arr) {
  var word = "";
  for (let i = 0; i < arr.length - 1; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word;
}

function findShortestWord(arr) {
  let word = arr[0]; // početna vrijednost je prva riječ
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < word.length) {
      word = arr[i];
    }
  }
  return word;
}

var longestWord = findLongestWord(words);
var shortestWord = findShortestWord(words);

console.log(longestWord);
console.log(shortestWord);
