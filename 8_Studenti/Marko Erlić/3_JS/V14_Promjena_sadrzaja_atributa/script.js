// 	h1 element sadrži tekst "Karlovac"
var h1El = document.querySelector("h1");
h1El.textContent = "Karlovac";

// 	span u description div-u je zamijenjen h3 elementom sa tekstom "5 rijeka"
var descriptionEl = document.querySelector(".description");
descriptionEl.innerHTML = "Grad na <h3>5 rijeka</h3>";

// 	div s klasom "info" sadrži text "Peta rijeka je piva."
var infoEl = document.querySelector(".info");
infoEl.textContent = "Peta rijeka je piva.";

// lista u footer elementu izlistava svih 5 karlovačkih rijeka u li elementima
// var footerEl = document.querySelector("#footer");
// var rivers = ["Kupa", "Korana", "Mrežnica", "Dobra", "Piva"];
// var listItems = rivers.map(function (river) {
//   return "<li>" + river + "</li>";
// });
// footerEl.innerHTML = "<ul>" + listItems.join("") + "</ul>";
var rijeke = ["Mrežnica", "Kupa", "Korana", "Dobra", "Karlovačko"];
var footerEl = document.querySelector("#footer");

for (var i = 0; i < rijeke.length; i++) {
  footerEl.querySelectorAll("li")[i].innerText = rijeke[i];
}
