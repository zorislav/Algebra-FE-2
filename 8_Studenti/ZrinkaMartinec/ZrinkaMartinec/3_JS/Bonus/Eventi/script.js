var btnEl = document.getElementById("btn");
var inpEl = document.getElementById("inp");
var divEl = document.getElementById("div");

function onInpHandler(e) {
  console.log(e.target.value);
}
function onClickHandler(event) {
  event.stopPropagation();
  console.log("Bok - btn");
}

function onDivClickHandler() {
  console.log("Bok - div");
}

inpEl.addEventListener("input", onInpHandler);
btnEl.addEventListener("click", onClickHandler);
divEl.addEventListener("click", onDivClickHandler);
