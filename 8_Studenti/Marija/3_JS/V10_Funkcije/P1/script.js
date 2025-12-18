var words = ["quickest", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];

function findLongestWord(arr) {
  var word = "";

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > word.length) {
      word = arr[i];
    }
  }

  return word;
}

var longestWord = findLongestWord(words);

console.log("Najduža riječ je: " + longestWord);
