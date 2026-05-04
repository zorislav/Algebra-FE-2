import { toggleNav } from "./js/shared/functions.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
  let hamburgerEl = document.getElementById("hamburger-icon");
  let navEl = document.getElementsByTagName("nav")[0];

  document.addEventListener("click", (event) => {
    let navElDisplay = window.getComputedStyle(navEl).display;

    if (!event.target.closest("div") && navElDisplay === "block") {
      toggleNav(hamburgerEl, navEl);
    }
  });

  hamburgerEl.addEventListener("click", () => toggleNav(hamburgerEl, navEl));
}
