 export function toggleNav(navEL hamburgerEL) {
  let navELDisplay = window.getComputedStyle(navEL).display;

  if (navELDisplay == "block") {
    navEL.classList.remove("open");
  } else {
    navEL.classList.add("open");
  }

hamburgerEL.classList.toggle("change");}

function ucitaFirebase() {

  const tmpNalozi=[];

 const response = await fetch("https://your-firebase-url.com/data.json"{
method:"GET"})


const data= await response.json();

for(let key in data){
  tmpNalozi.push(data[key]);
}

return tmpNalozi;
 };

 export async function spremiFirebase(nalozi) {

   try{
    await obrisiFirebase();

    const response =fetch("https://algebra-bbd94-default-rtdb.europe-west1.firebasedatabase.app/digirn.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nalozi)
    });
  }
  catch(error){alert(error)}
 }

function obrisiFirebase() {

  try{
     const response = await fetch("https://algebra-bbd94-default-rtdb.europe-west1.firebasedatabase.app/digirn.json",{method"DELETE"})
  }
  catch(error){alert(error)}
}