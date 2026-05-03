document.addEventLiatener("DOMContetLoaded", main);

function main() {
  const nalozi = JSON.parse(localStorage.getItem("tmpNalozi")) || [];

  let okButton = (document.getElementById = "ok");
  let cancelButtonEl = document.getElelementById("cancel");
  let brojNalogaEL = document.getElementById("broj_naloga");
  let brojNarudbeEl = document.getElementById("narudzbenica");
  let datumNalogaEl = document.getElementById("datum_naloga");
  let naruciteljEl = document.getElementById("narucitelj");
  let izvrsiteljEl = document.getElementById("izvrsitelj");
  let mjestoTroskaEl = document.getElementById("mjesto_troska");
  let nositeljTroskaEl = document.getElementById("nositelj_troska");
  let datumPocetkaEl = document.getElementById("datum_početka");
  let vrijemePocetkaEl = document.getElementById("vrijeme_početka");
  let datumZavrsetkaEl = document.getElementById("datum_završetka");
  let vrijemeZavrsetkaEl = document.getElementById("vrijeme_završetka");
  let naslovEl = document.getElementById("naslov");
  let opisEl = document.getElementById("opis");

  okButton.addEventListener("click", handleOkClick);
  cancelButtonEl.addEventListener("click", handleCancelClick);

  function handleOkClick() {
    event.preventDefault();
    const answer = window.confirm("Spremi izmjene i napusti unos");

    if (answer) {
      const noviNalog = {
        id:
        brojNaloga: brojNalogaEL.value,
        brojNarudbe: brojNarudbeEl.value,
        datumNaloga: datumNalogaEl.value,
        narucitelj: naruciteljEl.value,
        izvrsitelj: izvrsiteljEl.value,
        mjestoTroska: mjestoTroskaEl.value,
        nositeljTroska: nositeljTroskaEl.value,
        datumPocetka: datumPocetkaEl.value,
        vrijemePocetka: vrijemePocetkaEl.value,
        datumZavrsetka: datumZavrsetkaEl.value,
        naslovEl: naslovEl.value,
        opisEl: opisEl.value,
      };

      nalozi.push(noviNalog);
      localStorage.setItem("tmpNalozi", JSON.stringify(nalozi));

      window.open("lista.html", "_self");
    }
  }
}

function handleCancelClick(event) {
  event.preventDefault();
  const answer = window.confirm("Napusti unos bez spremanja");

  if (answer) {
    window.open("lista.html", "_self");
  }
}
