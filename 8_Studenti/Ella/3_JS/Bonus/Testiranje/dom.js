export function addItem(text) {
  const divEl = document.createElement("div");
  divEl.textContent = text;
  document.body.appendChild(divEl);
}
