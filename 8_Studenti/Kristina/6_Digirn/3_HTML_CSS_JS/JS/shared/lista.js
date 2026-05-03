import { toggleNav } from "../JS/shared/functions.js";

document.addEventListener("DOMContentLoaded", main);

function main() {
  let hamburgerEl = document.getElementById("hamburger-icon");
  let navEl = document.getElementsByTagName("nav")[0];
  let aUcitajEl = document.getElementById("ucitaj");
  let tbodyEl = document.getElementById("tbody");
  let nemaNalogaEl = document.getElementById("nema-naloga");  

  document.addEventListener("click", (event) => {
    let navElDisplay = window.getComputedStyle(navEL).display;

    if (!event.target.closest("div") && navElDisplay == "block") {
      toggleNav(navEL, hamburgerEL);
    }
  });

  hamburgerEL.addEventListener("click", () => toggleNav(navEL, hamburgerEL));

  aUcitajEl.addEventListener("click", ucitajNaloge);


  function odaberiRed() {
    window.open(`prikaz.html?id=${data.id}`, `_self`);
  }

 async function ucitajNaloge() {


  const answer = confirm ("Učitaj naloge...");
  
  if (answer) {
    
    //ucitaj naloge
 
    const nalozi = await ucitajFirebase();
    if(nalozi){
      localStorage.setItem("tmpNalozi", JSON.stringify(nalozi));
    }
    else{}
localStorage.setItem("tmpNalozi", JSON.stringify([]));
    //prikazi naloge
    prikaziNaloge(nalozi)

}

}
  function spremiNaloge() {

    let tmpNalozi = JSON.parse(localStorage.getItem("tmpNalozi")) || [];

    if(tmpNalozi.length !== 0){
      if (answer) {
        
        //zapisi Firebase
        spremiFirebase(tmpNalozi);
        
        const answer = confirm ("Učitaj naloge...");
        
        //prikazi naloge
        prikaziNaloge(nalozi)
    
    }

    }else{
      alert("Nema naloga za spremiti");
    }


}

function prikaziNaloge(nalozi) {

  let nalozi=[];
  const locStoreNalozi=localStorage.getItem("tmpNalozi");

  if(locStoreNalozi){
    const nalozi = JSON.parse(locStoreNalozi);


while(tbodyEl.firstChild){tbodyEl.firstChild.remove();}

if(nalozi.length==0){
  nemaNalogaEl.style.display="block";
}else{nemaNalogaEl.style.display="none";
}



  nalozi.forEach((data,index)=>{
    let trEL = document.createElement("tr");
    trEL.title = "Odaberi za prikaz i izmjenu naloga"
    trEL.addEventListener("click", () => odaberiRed());
  
    let tdEL= document.createElement("td");
    tdEL.innerText= index+1;
    trEL.appendChild(tdEL); 


    let brojNalogaEl= document.createElement("td");
    let datumNalogaEl= document.createElement("td");
    let datumNalogaEl= document.createElement("td");
    let datumPočetkaEl= document.createElement("td");
    let datumZavršetkaEl= document.createElement("td");
    let naruciteljEl= document.createElement("td");
    let izvrsiteljEl= document.createElement("td");
    let naslovEl= document.createElement("td");

brojNalogaEl.innerText=data["brojNaloga"];
datumNalogaEl.innerText=data["datumNaloga"];
datumNalogaEl.className="table-col-hide"
datumPočetkaEl.innerText=data["datumPočetka"];
datumZavršetkaEl.innerText=data["datumZavršetka"];
naruciteljEl.innerText=data["Narucitelj"];
izvrsiteljEl.innerText=data["izvrsitelj"];

naslovEl.innerText=data["naslov"];
trEL.appendChild(brojNalogaEl);
trEL.appendChild(datumNalogaEl);
trEL.appendChild(datumPočetkaEl);
trEL.appendChild(datumZavršetkaEl);
trEL.appendChild(naruciteljEl);
trEL.appendChild(izvrsiteljEl);
trEL.appendChild(naslovEl);

    tbodyEl.appendChild(trEL);
  }
}

  }
}
prikaziNaloge()

}