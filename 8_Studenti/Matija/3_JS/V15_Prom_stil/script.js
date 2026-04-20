// umjesto circle buleta na elementima liste prikažu redne brojke
var liEls = document.querySelectorAll("li");

for (var i = 0; i < liEls.length; i++) {
  liEls[i].style.listStyleType = "decimal";
}

//div sa klasom info treba dobiti klasu koja će ga sakriti (dodajte u stylesheet)
var infoEl = document.querySelector(".info");
infoEl.classList.add("hide");

// saznajte margin-left izračunati stil koji je primijenjen na body elementu
var bodyEl = document.querySelector("body");
var bodyStyles = window.getComputedStyle(bodyEl, null);
var marginLeft = bodyStyles.getPropertyValue("margin-left");
console.log(margin - left);

var marginNum = parseInt(marginLeft);
var reverse = false;
//console.log(marginNum);

// animirajte veličinu margine body elementa od pocetne do 30px i natrag u ponavljajućoj petlji
function frame() {
  if (reverse) {
    marginNum--;
  } else {
    marginNum++;
  }

  if (marginNum === 30) reverse = true;

  if (marginNum === 0) reverse = false;

  bodyEl.style.marginLeft = marginNum + "px";
}

var intId = setInterval(frame, 200);
//clearInterval(intId);
