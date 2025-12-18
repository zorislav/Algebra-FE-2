import { dummyNalozi } from "./data.js";

export function toggleNav(hamburgerEl, asideEl){

  let asideDisplay = window.getComputedStyle(asideEl).display;

  if (asideDisplay === "block"){
    asideEl.classList.remove("open");
  } else {
    asideEl.classList.add("open");
  }


  hamburgerEl.classList.toggle("hamburger-change");
  hamburgerEl.classList.toggle("change");

}

export function ucitajFirebase(){

  try {

    // Dihvat podataka

    return dummyNalozi;

  } catch(error) {
    alert(error);
  }

}

export function zapisiFirebase(){
  console.log("Nalozi zapisani!");
}

function obrisiFirebase(){}