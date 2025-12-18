var inpEl = document.getElementById("inp");

function onInputHandler() {
  console.log(event.target.value);
}

inpEl.addEventListener("input", onInputHandler);