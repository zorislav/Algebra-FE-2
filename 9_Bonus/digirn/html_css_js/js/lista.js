import { toggleNav, ucitajFirebase, zapisiFirebase } from "./shared/functions.js";

// Nakon ucitavanja dokumenta startaj funkciju main
document.addEventListener("DOMContentLoaded", main);

// Glavna funkcija skripte
function main() {

  // Varijable elemenata
  let hamburgerEl = document.getElementById("hamburger-icon");
  let asideEl = document.getElementsByTagName("aside")[0];
  let tbodyEl = document.getElementsByTagName("tbody")[0];
  let aUcitajEl = document.getElementById("ucitaj");
  let aSpremiEl = document.getElementById("spremi");
  let aUcitajSmEl = document.getElementById("ucitaj-small");
  let aSpremiSmEl = document.getElementById("spremi-small");
  let nemaNalogaEl = document.getElementById("nema-naloga");

  // Event listeneri
  document.addEventListener("click", (event) => {
    const asideElDisplay = window.getComputedStyle(asideEl).display;
    if(!event.target.closest("div") && asideElDisplay === "block") toggleNav(hamburgerEl, asideEl);
  });
  
  hamburgerEl.addEventListener("click", () => toggleNav(hamburgerEl, asideEl));
  aUcitajEl.addEventListener("click", ucitajNaloge);
  aSpremiEl.addEventListener("click", spremiNaloge);
  aUcitajSmEl.addEventListener("click", ucitajNaloge);
  aSpremiSmEl.addEventListener("click", spremiNaloge);

  // Poziva se nakon odabira reda
  function odaberiRed(data) {
    // Nakon odabira reda otvori dokument prikaz.html
    window.open(`prikaz.html?id=${data.id}`, "_self");
  }

  // Prikazuje sve naloge u tablicnom obliku
  function prikaziNaloge() {
    
    // Niz za spremanje naloga koji se prikazuju
    let nalozi = [];

    // Ucitaj naloge iz localStorage
    const locStorNalozi = localStorage.getItem("tmpNalozi");
    if (locStorNalozi){
      nalozi = JSON.parse(locStorNalozi);
    }
    
    // Obrisi prethodno prikazanu tablicu
    while (tbodyEl.firstChild) {
      tbodyEl.firstChild.remove();
    }

    // Ako nema naloga prikazi poruku
    if (nalozi.length === 0){
      nemaNalogaEl.style.display = "block";
    } else {
      nemaNalogaEl.style.display = "none";
    }

    // Za svaki nalog iz liste kreiraj strukturu unutar tablice
    nalozi.forEach((data, index) => {
      
      // Kreiraj red
      let trEl = document.createElement("tr");
      trEl.title = "Odaberi za prikaz, izmjenu ili brisanje Naloga";
      trEl.addEventListener("click", () => odaberiRed(data));
      
      // Kreiraj stupac sa rednim brojem
      let tdEl = document.createElement("td");
      tdEl.innerText = index + 1;
      trEl.appendChild(tdEl);

      // Kreiraj ostala polja
      let brojNalogaEl = document.createElement("td");
      let datumNalogaEl = document.createElement("td");
      let datumPocetkaEl = document.createElement("td");
      let datumZavrsetkaEl = document.createElement("td");
      let naruciteljEl = document.createElement("td");
      let izvrsiteljEl = document.createElement("td");
      let naslovEl = document.createElement("td");
      
      brojNalogaEl.innerText = data["brojNaloga"];
      datumNalogaEl.innerText = data["datumNaloga"];
      datumNalogaEl.className = "table-col-hide";
      datumPocetkaEl.innerText = data["datumPocetka"];
      datumPocetkaEl.className = "table-col-hide";
      datumZavrsetkaEl.innerText = data["datumZavrsetka"];
      datumZavrsetkaEl.className = "table-col-hide";
      naruciteljEl.innerText = data["narucitelj"];
      izvrsiteljEl.innerText = data["izvrsitelj"];
      naslovEl.innerText = data["naslov"];
      naslovEl.className = "table-col-hide";
      
      trEl.appendChild(brojNalogaEl);
      trEl.appendChild(datumNalogaEl);
      trEl.appendChild(datumPocetkaEl);
      trEl.appendChild(datumZavrsetkaEl);
      trEl.appendChild(naruciteljEl);
      trEl.appendChild(izvrsiteljEl);
      trEl.appendChild(naslovEl);

      tbodyEl.appendChild(trEl);
    });
  }

  // Poziva se pri odabiru ucitavanja naloga iz baze
  async function ucitajNaloge() {
    const answer = confirm("Učitaj naloge iz baze?");
    if (answer) {
      let nalozi = await ucitajFirebase();
      if(nalozi){
        localStorage.setItem("tmpNalozi", JSON.stringify(nalozi));
      }else{
        localStorage.setItem("tmpNalozi", JSON.stringify([]));
      };
      prikaziNaloge();
    }
  }
  
  // Poziva se pri odabiru spremanja naloga u bazu
  function spremiNaloge() {
    let tmpNalozi = JSON.parse(localStorage.getItem("tmpNalozi")) || [];
    if(tmpNalozi.length !== 0){
      const answer = confirm("Spremi naloge u bazu?");
      if (answer) {
        zapisiFirebase(tmpNalozi);
      }
    }else{
      alert("Nema naloga za spremanje!");
    }
  }
  
  prikaziNaloge();

}
