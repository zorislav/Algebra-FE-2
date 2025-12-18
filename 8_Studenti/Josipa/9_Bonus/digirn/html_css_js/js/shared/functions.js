import { dummyNalozi } from "./data.js";

const API_URL =
  "https://algebra-fe-default-rtdb.europe-west1.firebasedatabase.app/digirn.json";

export function toggleNav(hamburgerEl, asideEl) {
  let asideDisplay = window.getComputedStyle(asideEl).display;

  if (asideDisplay === "block") {
    asideEl.classList.remove("open");
  } else {
    asideEl.classList.add("open");
  }

  hamburgerEl.classList.toggle("hamburger-change");
  hamburgerEl.classList.toggle("change");
}

export async function ucitajFirebase() {
  try {
    // Dohvat podataka
    const tmpNalozi = [];

    const response = await fetch(API_URL);
    const data = await response.json();

    for (let key in data) {
      tmpNalozi.push(data[key]);
    }
    console.log(tmpNalozi[0]);

    return tmpNalozi[0];
  } catch (error) {
    alert(error);
  }
}

export async function zapisiFirebase(nalozi) {
  // Obrisi trenutne naloge
  await obrisiFirebase();

  // Zapisi naloge
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(nalozi),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    alert(error);
  }
}

async function obrisiFirebase() {
  try {
    await fetch(API_URL, {
      method: "DELETE",
    });
  } catch (error) {
    alert(error);
  }
}
