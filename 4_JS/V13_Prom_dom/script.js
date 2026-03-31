//1
var descriptionEl = document.querySelector(".description");
var h1El = document.createElement("h1");
descriptionEl.parentNode.prepend(h1El);

//2
var divEL = document.createElement("div");
divEL.classList.add("info");
descriptionEl.parentNode.insertBefore(divEL, descriptionEl.nextSibling);

//3
var ulEl = document.getElementById("list");
for (var i = 0; i < 3; i++) {
  ulEl.appendChild(document.createElement("li"));
}
