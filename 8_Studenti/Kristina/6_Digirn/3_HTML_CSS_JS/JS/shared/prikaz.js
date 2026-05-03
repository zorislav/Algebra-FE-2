imprt {toggleNav} from "./shared/functions.js";



document.addEventListener("DOMContentLoaded", main);

function main() {


    let hamburgerEl = document.getElementById("hamburger-icon");
    let navEl = document.getElementsByTagName("nav")[0];
    let brojNalogaEl= document.getElementById("broj-naloga");
    let brojNarudzbeEl = document.getElementById("broj-narudzbe");
    let datumNalogaEl = document.getElementById("datum-naloga");
    let naruciteljEl = document.getElementById("narucitelj");
    let izvrsiteljEl = document.getElementById("izvrsitelj");
    let mjestoTroskaEL= document.getElementById("mjesto-troska");
    let nositeljTroskaEl = document.getElementById("nositelj-troska");
    let datumPocetkaEl = document.getElementById("datum-pocetka");
    let vrijemePocetkaEl = document.getElementById("vrijeme-pocetka");
    let datumZavrsetkaEl = document.getElementById("datum-zavrsetka");
    let naslovEl = document.getElementById("naslov");
    let opisRadaEl = document.getElementById("opis-rada");

    const nalozi= JSON.parse(localStorage.getItem("tmpNalozi")) || [];
  
    document.addEventListener("click", (event) => {
      let navElDisplay = window.getComputedStyle(navEL).display;
  
      if (!event.target.closest("div") && navElDisplay == "block") {
        toggleNav(navEL, hamburgerEL);
      }
    });
      hamburgerEL.addEventListener("click", () => toggleNav(navEL, hamburgerEL));
  
  const urlParmas = new URLSearchParams(window.location.search);
  const odabraniNalogId = urlParmas.get("id");

  const odabraniNalog = nalozi.find(nalog => nalog.id === odabraniNalogId); 

  brojNalogaEl.innerText = odabraniNalog.brojNaloga;
  brojNarudzbeEl.innerText = odabraniNalog.brojNarudzbe;
  datumNalogaEl.innerText = odabraniNalog.datumNaloga;
  naruciteljEl.innerText = odabraniNalog.narucitelj;
  izvrsiteljEl.innerText = odabraniNalog.izvrsitelj;
  mjestoTroskaEL.innerText = odabraniNalog.mjestoTroska;
  nositeljTroskaEl.innerText = odabraniNalog.nositeljTroska;
  datumPocetkaEl.innerText = odabraniNalog.datumPocetka;  
  vrijemePocetkaEl.innerText = odabraniNalog.vrijemePocetka;
  datumZavrsetkaEl.innerText = odabraniNalog.datumZavrsetka;
  naslovEl.innerText = odabraniNalog.naslov;
  opisRadaEl.innerText = odabraniNalog.opisRada;
  console.log(odabraniNalogId);
}
