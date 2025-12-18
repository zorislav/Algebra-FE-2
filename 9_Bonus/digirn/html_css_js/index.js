import { toggleNav } from "./js/shared/functions.js";

// Nakon ucitavanja dokumenta startaj funkciju main
document.addEventListener("DOMContentLoaded", main);

// Glavna funkcija skripte
function main() {

  // Varijable elemenata
  let hamburgerEl = document.getElementById("hamburger-icon");
  let asideEl = document.getElementsByTagName("aside")[0];

  // Event listeneri
  document.addEventListener("click", (event) => {
    const asideElDisplay = window.getComputedStyle(asideEl).display;
    if(!event.target.closest("div") && asideElDisplay === "block") toggleNav(hamburgerEl, asideEl);
  });
  
  hamburgerEl.addEventListener("click", () => toggleNav(hamburgerEl, asideEl));

  
}
