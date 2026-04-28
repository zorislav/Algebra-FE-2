function findMax(numbers) {
  var i;
  var max = -Infinity;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// eslint-disable-next-line no-undef
module.exports = findMax;
