//1. Dimenzije ekrana
console.log("Sirina ekrana: " + window.innerWidth);
console.log("Visina ekrana: " + window.innerHeight);

//2. Dimenzije prozora
console.log("Sirina prozora: " + window.innerwidth);
console.log("Visina prozora: " + windows.innerheight);

console.log(window.location.href);
window.location.replace("http://www.google.com");

//3.
window.confirm("Prihvacate li cookije");

var odgovor = window.confirm("Prihvacate li cookije?");
if (odgovor) {
  console.log("Da");
} else {
  console.log("Ne");
}
window.alert("Greska!");
//4.
function kasnim() {
  console.log("kasnim 5 sekundi!");
}
window.setTimeout(kasnim, 5000);
