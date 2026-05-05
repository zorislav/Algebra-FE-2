import { fetchData } from "./data.js";

const inputEl = document.getElementById("search-term");
const noSongsEl = document.getElementById("no-songs");
var timeout = null;

export default () => {
  const updateMusicList = () => {
    clearTimeout(timeout);

    timeout = setTimeout(async () => {
      const inputElValue = inputEl.value;

      if (inputElValue) {
        noSongsEl.style.display = "none";
        // Dohvati i prikaži
        const retData = fetchData(inputElValue);

        if (retData.length !== 0) {
          console.log(retData);
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
