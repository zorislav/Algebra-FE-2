document.addEventListener("DOMContentLoaded", main);

function main() {

  // Dohvati id naloga
  const urlParams = new URLSearchParams(window.location.search);
  const odabraniNalogId = urlParams.get("id");

  // Ucitaj naloge iz localStorage
  const nalozi = JSON.parse(localStorage.getItem("tmpNalozi")) || [];

  let okButtonEl = document.getElementById("ok");
  let cancelButtonEl = document.getElementById("cancel");
  // let brojNalogaEl = document.getElementById("brojNaloga");
  // let brojNarudzbeEl = document.getElementById("brojNarudzbe");
  // let datumNalogaEl = document.getElementById("datumNaloga");
  // let naruciteljEl = document.getElementById("narucitelj");
  // let izvrsiteljEl = document.getElementById("izvrsitelj");
  // let mjestoTroskaEl = document.getElementById("mjestoTroska");
  // let nositeljTroskaEl = document.getElementById("nositeljTroska");
  // let datumPocetkaEl = document.getElementById("datumPocetka");
  // let vrijemePocetkaEl = document.getElementById("vrijemePocetka");
  // let datumZavrsetkaEl = document.getElementById("datumZavrsetka");
  // let vrijemeZavrsetkaEl = document.getElementById("vrijemeZavrsetka");
  // let naslovEl = document.getElementById("naslov");
  // let opisEl = document.getElementById("opis");


  okButtonEl.addEventListener("click", handleOkClick);
  cancelButtonEl.addEventListener("click", () => handleCancelClick(odabraniNalogId));


  // U nizu naloga pronmadji odabrani
  const odabraniNalog = nalozi.find((nalog) => nalog.id === odabraniNalogId);

  // Popuni elemente odabranim nalogom
  // brojNalogaEl.innerText = odabraniNalog.brojNaloga;
  // brojNarudzbeEl.innerText = odabraniNalog.brojNarudzbe;
  // datumNalogaEl.innerText = odabraniNalog.datumNaloga;
  // naruciteljEl.innerText = odabraniNalog.narucitelj;
  // izvrsiteljEl.innerText = odabraniNalog.izvrsitelj;
  // mjestoTroskaEl.innerText = odabraniNalog.mjestoTroska;
  // nositeljTroskaEl.innerText = odabraniNalog.nositeljTroska;
  // datumPocetkaEl.innerText = odabraniNalog.datumPocetka;
  // vrijemePocetkaEl.innerText = odabraniNalog.vrijemePocetka;
  // datumZavrsetkaEl.innerText = odabraniNalog.datumZavrsetka;
  // vrijemeZavrsetkaEl.innerText = odabraniNalog.vrijemeZavrsetka;
  // naslovEl.innerText = odabraniNalog.naslov;
  // opisEl.innerText = odabraniNalog.opis;

  // Poziva se pri odabiru brisanja naloga
  function handleOkClick(){
    // const answer = confirm("Obriši nalog?");
    // if(answer){
    //   const nalogIndex = nalozi.indexOf(odabraniNalog);
    //   nalozi.splice(nalogIndex,1);
    //   localStorage.setItem("tmpNalozi", JSON.stringify(nalozi));
    //   window.open("lista.html", "_self");
    // }
  }

  function handleCancelClick(id){
    window.open(`prikaz.html?id=${id}`, "_self");
  }

}