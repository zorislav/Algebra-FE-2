import { fetchData } from "./data.js";
import { createElement } from "./render.js";

const loadSpin = document.getElementById("loading");
const noResults = document.getElementById("no_results");
const searchInput = document.getElementById("search-input");

const ulElement = document.getElementById("songs");
var timeout = null;
export default () => {
  const updateMusicList = () => {
    clearTimeout(timeout);

    while (ulElement.firstChild) {
      ulElement.removeChild(ulElement.firstChild);
    }
    timeout = setTimeout(async () => {
      const searchTerm = searchInput.value;
      if (searchTerm) {
        console.log(searchTerm);
        noResults.style.display = "none";
        loadSpin.style.display = "block";

        const retData = await fetchData(searchTerm);
        loadSpin.style.display = "none";

        if (retData.length !== 0) {
          for (let i in retData) {
            if (retData[i].artist && retData[i].song) {
              const liElement = createElement(retData[i]);
              ulElement.appendChild(liElement);
              console.log(liElement);
            }
          }
        } else {
          noResults.style.display = "block";
        }
      } else {
        noResults.style.display = "block";
      }
    }, 1000);
  };
  searchInput.addEventListener("keyup", updateMusicList);
};
