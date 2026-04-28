export function addItem(text) {
  const DivEl = document.createElement("div");
  DivEl.textContent = text;
  document.body.appendChild(DivEl);
}
