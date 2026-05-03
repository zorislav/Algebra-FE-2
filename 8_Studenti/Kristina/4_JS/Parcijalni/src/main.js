import { fetchData } from "./data.js";
import { createElement } from "./render.js";

const loadSpin = document.getElementById("#loading");
const noResults = document.getElementById("#results");
const searchInput = document.getElementById("#search-input");
//const searchBtn = document.getElementById("#search-btn");
const ulElement = document.getElementById("#songs");

export const app = () => {
  const updateMusicList = async () => {
    while (ulElement.firstChild) {
      ulElement.removeChild(ulElement.firstChild);
    }
    const searchTerm = searchInput.value;
    if (searchTerm) {
      noResults.style.display = "block";
      loadSpin.style.display = "block";
      let retData = [];
      retData = await fetchData(searchTerm);
      loadSpin.style.display = "none";

      if (retData.length !== 0) {
        for (let i in retData) {
          if (retData[i].artist && retData[i].song) {
            const liElement = createElement("retData[i]");
            ulElement.appendChild(liElement);
          }
        }
      }
    } else {
      noResults.style.display = "none";
    }
  };
  searchInput.addEventListener("submit", updateMusicList);
};
