// Toggle aside i hamburger elemente
export function toggleNav(hamburgerEl, asideEl) {
  // Toggle aside
  let asideElDisplay = window.getComputedStyle(asideEl).display;
  if (asideElDisplay === "block") {
    asideEl.classList.remove("open");
  } else {
    asideEl.classList.add("open");
  }

  // Toggle hamburger icon
  hamburgerEl.classList.toggle("hamburger-change");
  hamburgerEl.classList.toggle("change");
}

// Ucitaj Firebase podatke
export async function ucitajFirebase(){
  
  try {
    
    const tmpNalozi = [];

    const response = await fetch('https://algebra-fe-default-rtdb.europe-west1.firebasedatabase.app/digirn.json', {
      method: 'GET'
    });
  
    const data = await response.json(response);

    for (let key in data) {
      tmpNalozi.push(data[key]);
    }

    return tmpNalozi[0];

  } catch (error) {

    alert(error);

  }

}

// Zapisi Firebase podatke
export async function zapisiFirebase(nalozi){
  
  try {
    
    await obrisiFirebase();
    
    const response = await fetch('https://algebra-fe-default-rtdb.europe-west1.firebasedatabase.app/digirn.json', {
      method: 'POST',
      body: JSON.stringify(nalozi),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
  } catch (error) {
    
    alert(error);
    
  }
  
}

// Obrisi Firebase podatke
async function obrisiFirebase(){
  try {

    const response = await fetch('https://algebra-fe-default-rtdb.europe-west1.firebasedatabase.app/digirn.json', {
      method: 'DELETE',
    });
  
  } catch (error) {

    alert(error);

  }

}