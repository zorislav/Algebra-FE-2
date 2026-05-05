import { fetchData } from "./data.js";
import { createElement } from "./render.js";

const loadSpin = document.getElementById("loading");
const noResults = document.getElementById("no_results");
const searchInput = document.getElementById("search-input");

const ulElement = document.getElementById("songs");
//var timeout = null;
export default () => {
  const updateMusicList = () => {
    while (ulElement.firstChild) {
      ulElement.removeChild(ulElement.firstChild);
    }
    const searchTerm = searchInput.value;
    if (searchTerm) {
      console.log(searchTerm);
      noResults.style.display = "none";
      loadSpin.style.display = "block";

      const retData = fetchData(searchTerm);
      loadSpin.style.display = "none";

      if (retData.length !== 0) {
        for (let i in retData) {
          if (retData[i].artist && retData[i].song) {
            const liElement = createElement(retData[i]);
            ulElement.appendChild(liElement);
          }
        }
      } else {
        noResults.style.display = "block";
      }
    } else {
      noResults.style.display = "block";
    }
  };
  searchInput.addEventListener("keyup", updateMusicList);
};
