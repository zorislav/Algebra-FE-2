import { toggleNav } from "./shared/functions.js";

// Nakon ucitavanja dokumenta startaj funkciju main
document.addEventListener("DOMContentLoaded", main);


// Glavna funkcija skripte
function main() {

  // Dohvati id naloga
  const urlParams = new URLSearchParams(window.location.search);
  const odabraniNalogId = urlParams.get("id");
  
  // Ucitaj naloge iz localStorage
  const nalozi = JSON.parse(localStorage.getItem("tmpNalozi")) || [];

  // Varijable elemenata
  let hamburgerEl = document.getElementById("hamburger-icon");
  let asideEl = document.getElementsByTagName("aside")[0];
  let aIzmjenaEl = document.getElementById("aIzmjena");
  let aIzmjenaSmEl = document.getElementById("aIzmjena-small");
  let aBrisanjeEl = document.getElementById("aBrisanje");
  let aBrisanjeSmEl = document.getElementById("aBrisanje-small");
  let brojNalogaEl = document.getElementById("brojNaloga");
  let brojNarudzbeEl = document.getElementById("brojNarudzbe");
  let datumNalogaEl = document.getElementById("datumNaloga");
  let naruciteljEl = document.getElementById("narucitelj");
  let izvrsiteljEl = document.getElementById("izvrsitelj");
  let mjestoTroskaEl = document.getElementById("mjestoTroska");
  let nositeljTroskaEl = document.getElementById("nositeljTroska");
  let datumPocetkaEl = document.getElementById("datumPocetka");
  let vrijemePocetkaEl = document.getElementById("vrijemePocetka");
  let datumZavrsetkaEl = document.getElementById("datumZavrsetka");
  let vrijemeZavrsetkaEl = document.getElementById("vrijemeZavrsetka");
  let naslovEl = document.getElementById("naslov");
  let opisEl = document.getElementById("opis");

  // Event listeneri
  document.addEventListener("click", (event) => {
    const asideElDisplay = window.getComputedStyle(asideEl).display;
    if(!event.target.closest("div") && asideElDisplay === "block") toggleNav(hamburgerEl, asideEl);
  });

  hamburgerEl.addEventListener("click", () => toggleNav(hamburgerEl, asideEl));
  aIzmjenaEl.addEventListener("click", () => {
    window.open(`izmjena.html?id=${odabraniNalogId}`, "_self");
  });
  aIzmjenaSmEl.addEventListener("click", () => {
    window.open(`izmjena.html?id=${odabraniNalogId}`, "_self");
  });
  aBrisanjeEl.addEventListener("click", obrisiNalog);
  aBrisanjeSmEl.addEventListener("click", obrisiNalog);

  // U nizu naloga pronadji odabrani
  const odabraniNalog = nalozi.find((nalog) => nalog.id === odabraniNalogId);

  // Popuni elemente odabranim nalogom
  brojNalogaEl.innerText = odabraniNalog.brojNaloga;
  brojNarudzbeEl.innerText = odabraniNalog.brojNarudzbe;
  datumNalogaEl.innerText = odabraniNalog.datumNaloga;
  naruciteljEl.innerText = odabraniNalog.narucitelj;
  izvrsiteljEl.innerText = odabraniNalog.izvrsitelj;
  mjestoTroskaEl.innerText = odabraniNalog.mjestoTroska;
  nositeljTroskaEl.innerText = odabraniNalog.nositeljTroska;
  datumPocetkaEl.innerText = odabraniNalog.datumPocetka;
  vrijemePocetkaEl.innerText = odabraniNalog.vrijemePocetka;
  datumZavrsetkaEl.innerText = odabraniNalog.datumZavrsetka;
  vrijemeZavrsetkaEl.innerText = odabraniNalog.vrijemeZavrsetka;
  naslovEl.innerText = odabraniNalog.naslov;
  opisEl.innerText = odabraniNalog.opis;

  // Poziva se pri odabiru brisanja naloga
  function obrisiNalog() {
    const answer = window.confirm("Obriši nalog?");
    if (answer) {
      const nalogIndex = nalozi.indexOf(odabraniNalog);
      nalozi.splice(nalogIndex, 1);
      localStorage.setItem("tmpNalozi", JSON.stringify(nalozi));
      window.open("lista.html", "_self");
    }
  }
}
