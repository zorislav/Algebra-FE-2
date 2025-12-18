// var ulEl = document.getElementById("list");
// console.log(ulEl);

// // var liEls = document.getElementsByTagName("li");
// var liEls = document.querySelectorAll("li");
// console.log(liEls[0]);

// 	1. Na početak dodati h1 element
var descriptionNode = document.querySelector(".description");
var h1El = document.createElement("h1");
descriptionNode.parentNode.prepend(h1El);

// 2. Ispod diva sa klasom "description" se umetne novi div sa klasom "info"
var infoDiv = document.createElement("div");
infoDiv.classList.add("info");
descriptionNode.parentNode.insertBefore(
  infoDiv,
  descriptionNode.nextElementSibling
);

// var bodyEl = document.getElementsByTagName("body")[0];
// var footerEl = document.getElementById("footer");
// bodyEl.insertBefore(infoDiv, footerEl);

// 3. Lista u footer elementu na kraju mora sadrzavati 5 praznih <li> elemenata
var ulEl = document.getElementById("list");

for (var i = 0; i < 3; i++) {
  ulEl.appendChild(document.createElement("li"));
}
