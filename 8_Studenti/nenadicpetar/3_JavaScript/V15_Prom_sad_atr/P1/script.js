var h1El = document.querySelector("h1");
h1El.innerText = "Karlovac";

var descEl = document.querySelector(".description");
descEl.innerHTML = "Grad na <h3>5 rijeka</h3>";

var infoEl = document.querySelector(".info");
infoEl.innerHTML = "Peta je pivo.";

var rijeke = ["Mrežnica", "Kupa", "Korana", "Dobra", "Karlovačko"];

var footerEl = document.querySelector("#footer");

for (var i = 0; i < rijeke.length; i++) {
  footerEl.querySelectorAll("li")[i].innerText = rijeke[i];
}
