import { fetchData } from "./data.js";
import { createElement } from "./render.js";

const inputEl = document.getElementById("search-term");
const noSongsEl = document.getElementById("no-songs");
const ulEl = document.getElementById("songs-list");
const loadSpinEl = document.getElementById("loading-spinner");
var timeout = null;

export default () => {
  const updateMusicList = () => {
    clearTimeout(timeout);

    while (ulEl.firstChild) {
      ulEl.removeChild(ulEl.firstChild);
    }

    timeout = setTimeout(async () => {
      const inputElValue = inputEl.value;

      if (inputElValue) {
        noSongsEl.style.display = "none";

        loadSpinEl.style.display = "block";

        //Dohvati i prikaži
        const retData = await fetchData(inputElValue);

        loadSpinEl.style.display = "none";

        if (retData.length !== 0) {
          for (let i in retData) {
            if (retData[i].artist && retData[i].song) {
              const listItemEl = createElement(retData[i]);
              ulEl.appendChild(listItemEl);
            }
          }
        } else {
          noSongsEl.style.display = "block";
        }
      } else {
        noSongsEl.style.display = "block";
      }
    }, 1000);
  };

  inputEl.addEventListener("keyup", updateMusicList);
};
