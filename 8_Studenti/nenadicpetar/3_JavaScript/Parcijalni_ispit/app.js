const input = document.getElementById("search");
const statusDiv = document.getElementById("status");
const resultsDiv = document.getElementById("results");
let timeout = null;

input.addEventListener("input", () => {
  clearTimeout(timeout);
  const term = input.value.trim();
  if (!term) {
    resultsDiv.innerHTML = "";
    statusDiv.innerHTML = "";
    return;
  }
  timeout = setTimeout(() => fetchData(term), 500);
});

async function fetchData(term) {
  resultsDiv.innerHTML = "";
  statusDiv.innerHTML = `
    <div class="loading">
      <div class="spinner"></div>
      <span>Pretražujem "${term}"...</span>
    </div>`;

  try {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
      term
    )}&entity=song&limit=10`;
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
      url
    )}`;
    const response = await fetch(proxyUrl);
    if (!response.ok) throw new Error("Greška prilikom preuzimanja podataka");

    const dataRaw = await response.json();
    const data = JSON.parse(dataRaw.contents);

    if (data.results.length === 0) {
      statusDiv.innerHTML = `<div class="error">Nema rezultata za "${term}".</div>`;
      return;
    }

    statusDiv.innerHTML = "";
    renderTable(data.results);
  } catch (err) {
    statusDiv.innerHTML = `<div class="error">${err.message}</div>`;
  }
}

function renderTable(songs) {
  let html = `
    <table>
      <thead>
        <tr>
          <th>Pjesma</th>
          <th>Umjetnik</th>
          <th>Album</th>
          <th>Preslušaj</th>
        </tr>
      </thead>
      <tbody>
  `;

  songs.forEach((song) => {
    html += `
      <tr>
        <td>${song.trackName}</td>
        <td>${song.artistName}</td>
        <td>${song.collectionName}</td>
        <td>
          <audio controls>
            <source src="${song.previewUrl}" type="audio/mpeg">
            Vaš preglednik ne podržava audio.
          </audio>
        </td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  resultsDiv.innerHTML = html;
}
