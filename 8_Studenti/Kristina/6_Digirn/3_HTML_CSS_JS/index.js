import { toggleNav } from "./js/functions.js";
document.addEventListener("DOMContentLoaded", main);

function main() {
  let hamburgerEL = document.getElementById("hamburger-icon");
  let navEL = document.getElementsByTagName("nav")[0];

  document.addEventListener("click", (event) => {
    let navElDisplay = window.getComputedStyle(navEL).display;

    if (!event.target.closest("div") && navElDisplay == "block") {
      toggleNav(navEL, hamburgerEL);
    }
  });

  hamburgerEL.addEventListener("click", () => toggleNav(navEL, hamburgerEL));
}
