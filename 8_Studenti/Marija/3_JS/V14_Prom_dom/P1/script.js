// var ulEl = document.getElementById("list");
// console.log(ulEl);

// var liEls = document.getElementsByTagName("li");
// var liEls = document.querySelectorAll("li");
// console.log(liEls[0]);

// 1. na početak dodati h1 element

var descriptionNode = document.querySelector(".description");

// console.log(descriptionNode.parentNode);

var h1El = document.createElement("h1");

descriptionNode.parentNode.prepend(h1El);

// 2. ispod diva klasom "description" se umetne novi div sa klasom "info"

var infoDiv = document.createElement("div");

infoDiv.classList.add("info");
// infoDiv.classList.add("info2");

descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextSibling);

// var bodyEl = document.getElementsByTagName("body")[0];
// var footerEl = document.getElementById("footer");
// bodyEl.insertBefore(infoDiv, footerEl);

// 3. lista u footer elementu na kraju mora sadržavati 5 praznih <li> elementa

var ulEl = document.getElementById("list");

for (var i = 0; i < 3; i++) {
  ulEl.appendChild(document.createElement("li"));
}
