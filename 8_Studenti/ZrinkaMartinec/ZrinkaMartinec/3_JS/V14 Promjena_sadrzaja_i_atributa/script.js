// h1 element mora sadržavati riječ Karlovac

var h1El = document.querySelector("h1");
h1El.innerText = "Karlovac";

//span u description div-u zamjenjen h3 elementom sa tekstom "5 rijeka"

var descriptionEl = document.querySelector(".description");
descriptionEl.innerHTML = "Grad na <h3>5 rijeka</h3>";

//div s class="info" sadrži text"Peta rijeka je pivo"

var infoEl = document.querySelector(".info");
infoEl.innerText = "Peta rijeka je pivo";

//lista u footer elementu izlistati 5 karlovačkih rijeka
var rijeke = ["Mrežnica", "Kupa", "Korana", "Dobra", "Karlovačko"];
var footerEl = document.querySelector("#footer");
for (var i = 0; i < rijeke.length; i++) {
  footerEl.querySelectorAll("li")[i].innerText = rijeke[i];
}
