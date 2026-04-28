// eslint-disable-next-line no-undef
const maxNumber = require("../script.js");

const testArray = [1, 4, 5, 89, 43, 2, -1];

// eslint-disable-next-line no-undef
test("Get max number", () => {
  // eslint-disable-next-line no-undef
  expect(maxNumber(testArray)).toBe(89);
});

// eslint-disable-next-line no-undef
test("get number", () => {
  // eslint-disable-next-line no-undef
  expect(maxNumber(testArray)).not.toBeNaN();
});
