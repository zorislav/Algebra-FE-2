import { addItem } from "../dom.js";

test("Add div to body", () => {
  addItem("Hello");
  expect(document.body.querySelector("div").textContent).toBe("Hello");
});
