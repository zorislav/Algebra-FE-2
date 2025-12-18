document.addEventListener("DOMContentLoaded", main);

function main() {

  // Ucitaj naloge iz localStorage
  const nalozi = JSON.parse(localStorage.getItem("tmpNalozi")) || [];

  let okButtonEl = document.getElementById("ok");
  let cancelButtonEl = document.getElementById("cancel");
  let brojNalogaEl = document.getElementById("broj_naloga");
  let brojNarudzbeEl = document.getElementById("narudzbenica");
  let datumNalogaEl = document.getElementById("datum_naloga");
  let naruciteljEl = document.getElementById("narucitelj");
  let izvrsiteljEl = document.getElementById("izvrsitelj");
  let mjestoTroskaEl = document.getElementById("mjesto_troska");
  let nositeljTroskaEl = document.getElementById("nositelj_troska");
  let datumPocetkaEl = document.getElementById("datum_pocetka");
  let vrijemePocetkaEl = document.getElementById("vrijeme_pocetka");
  let datumZavrsetkaEl = document.getElementById("datum_zavrsetka");
  let vrijemeZavrsetkaEl = document.getElementById("vrijeme_zavrsetka");
  let naslovEl = document.getElementById("naslov");
  let opisEl = document.getElementById("opis");


  okButtonEl.addEventListener("click", handleOkClick);
  cancelButtonEl.addEventListener("click", handleCancelClick);

  // Poziva se pri spremanju izmjena
  function handleOkClick(event){
    event.preventDefault();

    const answer = confirm("Spremi izmjene?");
    if(answer){

      // Kreiraj objekt za novi nalog
      const noviNalog = {
        id: Math.random().toString(36).slice(5),
        brojNaloga: brojNalogaEl.value,
        brojNarudzbe: brojNarudzbeEl.value,
        datumNaloga: datumNalogaEl.value,
        narucitelj: naruciteljEl.value,
        izvrsitelj: izvrsiteljEl.value,
        mjestoTroska: mjestoTroskaEl.value,
        nositeljTroska: nositeljTroskaEl.value,
        datumPocetka: datumPocetkaEl.value,
        vrijemePocetka: vrijemePocetkaEl.value,
        datumZavrsetka: datumZavrsetkaEl.value,
        vrijemeZavrsetka: vrijemeZavrsetkaEl.value,
        naslov: naslovEl.value,
        opis: opisEl.value
      }

      // Dodaj objekt u niz naloga
      nalozi.push(noviNalog);

      // Zapisi objekt u localStorage  
      localStorage.setItem("tmpNalozi", JSON.stringify(nalozi));
      window.open("lista.html", "_self");
    }
  }

  function handleCancelClick(event){
    event.preventDefault();
    const answer = confirm("Napusti unos bez spremanja?");
    if(answer){
      window.open(`lista.html`, "_self");
    }
  }

}