import {
  toggleNav,
  ucitajFirebase,
  zapisiFirebase,
} from "./shared/functions.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
  let hamburgerEl = document.getElementById("hamburger-icon");
  let navEl = document.getElementsByTagName("nav")[0];
  let aUcitajEl = document.getElementById("ucitaj");
  let aSpremiEl = document.getElementById("ucitaj");
  let tBodyEl = document.getElementsByTagName("tbody")[0];
  let nemaNalogaEl = document.getElementsById("nema-naloga");

  document.addEventListener("click", (event) => {
    let navElDisplay = window.getComputedStyle(navEl).display;

    if (!event.target.closest("div") && navElDisplay === "block") {
      toggleNav(hamburgerEl, navEl);
    }
  });

  hamburgerEl.addEventListener("click", () => toggleNav(hamburgerEl, navEl));
  aUcitajEl.addEventListener("click", ucitajNaloge);
  aSpremiEl.addEventListener("click", spremiNaloge);

  async function ucitajNaloge() {
    const answer = confirm("Učitaj naloge iz baze?");

    if (answer) {
      const nalozi = await ucitajFirebase();
      if (nalozi) {
        localStorage.setItem("tmpNalozi", JSON.stringify(nalozi));
      } else {
        localStorage.setItem("tmpNalozi", JSON.stringify([]));
      }

      prikaziNaloge(nalozi);
    }
  }

  function spremiNaloge() {
    let tmpNalozi = JSON.parse(localStorage.getItem("tmpNalozi")) || [];

    if (tmpNalozi.length !== 0) {
      const answer = confirm("Spremi naloge u  baze?");

      if (answer) {
        zapisiFirebase(tmpNalozi);
      }
    } else {
      alert("Nema naloga za spremanje!");
    }
  }

  function odaberiRed(data) {
    window.open(`prikaz.html?id=${data.id}`, "_self");
  }

  function prikaziNaloge() {
    let nalozi = [];
    const locStorNalozi = localStorage.getItem("tmpNalozi");

    if (locStorNalozi) {
      nalozi = JSON.parse(locStorNalozi);
    }

    while (tBodyEl.firstChild) {
      tBodyEl.firstChild.remove();
    }

    if (nalozi.length === 0) {
      nemaNalogaEl.style.display = "block";
    } else {
      nemaNalogaEl.style.display = "none";
    }

    nalozi.forEach((data, index) => {
      let trEl = document.createElement("tr");
      trEl.title = "Odaberi za prikaz, izmjenu ili brisanje naloga";
      trEl.addEventListener("click", () => odaberiRed(data));
      let tdEl = document.createElement("td");
      tdEl.innerText = index + 1;
      trEl.append(tdEl);

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

      tBodyEl.appendChild(trEl);
    });
  }

  prikaziNaloge();
}
