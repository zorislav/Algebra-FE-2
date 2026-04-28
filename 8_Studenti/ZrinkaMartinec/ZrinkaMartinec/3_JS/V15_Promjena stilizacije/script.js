//1. umjesto circle bulleta redne brojeve

var liEls = document.querySelectorAll("li");
for (var i = 0; i < liEls.length; i++) {
  liEls[i].style.listStyleType = "decimal";
}
console.log(liEls);

//2. div s class="info" dodati class koja će ga sakriti

var infoEl = document.querySelector(".info");
infoEl.classList.add("hide");

//3.margin-left Computed style

var bodyEl = document.querySelector("body");
var bodyStyles = window.getComputedStyle(bodyEl, null);
var marginLeft = bodyStyles.getPropertyValue("margin-left");
console.log(marginLeft);

var marginNum = parseInt(marginLeft);
var reverse = false;
console.log(marginNum);
//4. animacija veličine margine bodyEl od početne do 30px

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

var IntId = setInterval(frame, 200);

//clearInterval(IntId);
//ukoliko koristimo periodičko ponavljanje prekidamo sa clearInterval
