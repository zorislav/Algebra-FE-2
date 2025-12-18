import { toggleNav } from "./js/shared/functions.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
  let hamburgerEl = document.getElementById("hamburger-icon");
  let asideEl = document.getElementsByTagName("aside")[0];

  document.addEventListener("click", (event) => {
    const asideElDisplay = window.getComputedStyle(asideEl).display;
    if (!event.target.closest("div") && asideElDisplay === "block")
      toggleNav(hamburgerEl, asideEl);
  });

  hamburgerEl.addEventListener("click", () => toggleNav(hamburgerEl, asideEl));
}
