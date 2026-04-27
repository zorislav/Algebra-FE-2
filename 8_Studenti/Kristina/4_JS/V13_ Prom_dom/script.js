//1

var descriptionEL = document.querySelector(".description");
var h1El = document.createElement("h1");
descriptionEL.parentNode.prepend(h1El);
console.log(descriptionEL);

//2

var divEl = document.createElement("div");
divEl.classList.add("info");
descriptionEL.parentNode.insertBefore(divEl, descriptionEL.nextSibling);

//3

var ulEl = document.getElementById("list");
for (var i = 0; i < 3; i++) {
  ulEl.appendChild(document.createElement("li"));
}
