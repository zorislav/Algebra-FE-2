// Povezivanje elemenata u DOM
const input = document.querySelector(".search-input");
const searchButton = document.querySelector("button");
const list = document.querySelector("ul");
const spinner = document.querySelector(".spinner");

// Dodavanje funkcije za loading spinner
const setLoading = function (on) {
  if (on) {
    spinner.classList.remove("hidden");
    if (searchButton) searchButton.disabled = true;
  } else {
    spinner.classList.add("hidden");
    if (searchButton) searchButton.disabled = false;
  }
};

// Dodavanje handler funkcije na Button
searchButton.addEventListener("click", getData);

// Kreiranje getData funkcije, brisanje starih rezultata i prekidanje funkcije ako je input prazan
async function getData() {
  list.innerHTML = "";
  const term = input.value.trim();

  if (!term) {
    list.innerHTML = "Unesi nesto u trazilicu";
    return;
  }

  // Paljenje loading spinnera
  setLoading(true);

  // Sastavi URL sa searchParams svojstvom
  const url = new URL("https://itunes.apple.com/search");
  url.searchParams.set("term", term);
  url.searchParams.set("entity", "musicTrack");
  url.searchParams.set("limit", "20");

  // Fetch + provjere + JSON
  const req = await fetch(url);
  if (!req) throw new Error(`HTTP ${req.status}`);
  const data = await req.json();

  // Dodaj LI za svaku pjesmu
  data.results.forEach((track) => {
    const li = document.createElement("li");
    li.innerHTML = `${track.artistName}: ${track.trackName}`;
    list.appendChild(li);
  });

  // Gasenje loading spinnera
  setLoading(false);
}
