export function toggleNav(hamburgerEl, navEl) {
  let navElDisplay = window.getComputedStyle(navEl).display;

  if (navElDisplay === "block") {
    navEl.classList.remove("open");
  } else {
    navEl.classList.add("open");
  }

  hamburgerEl.classList.toggle("change");
}

export async function ucitajFirebase() {
  const tmpNalozi = [];

  const response = await fetch(
    "https://algebra-fe-demo-default-rtdb.europe-west1.firebasedatabase.app/digirn.json",
    {
      method: "GET",
    },
  );

  const data = await response.json();

  for (let key in data) {
    tmpNalozi.push(data[key]);
  }

  return tmpNalozi[0];
}

export async function zapisiFirebase(nalozi) {
  try {
    await obrisiFirebase();
    const response = await fetch(
      "https://algebra-fe-demo-default-rtdb.europe-west1.firebasedatabase.app/digirn.json",
      {
        method: "POST",
        body: JSON.stringify(nalozi),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    alert(error);
  }
}

async function obrisiFirebase() {
  try {
    const response = await fetch(
      "https://algebra-fe-demo-default-rtdb.europe-west1.firebasedatabase.app/digirn.json",
      {
        method: "DELETE",
      },
    );
  } catch (error) {
    alert(error);
  }
}
