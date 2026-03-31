//1 Dimenzije ekrana
console.log("Širina ekrana" + window.screen.width);
console.log("Visina ekrana" + window.screen.height);

// Dimenzije prozora
console.log("Širina prozora" + window.innerWidth);
console.log("Visina prozora" + window.innerHeight);

// 2
console.log("Adresa" + window.location.hostname);
window.location.replace("http://www.google.com");

// 3
window.confirm("Prihvaćate li cookije?");
var odgovor = window.confirm("Prihvaćate li cookije?");

var odgovor = window.confirm("Prijelaz na google?");
if (odgovor) window.location.replace("http://google.com");

// 4
window.setTimeout(function () {
  console.log("Danas malo kasnim");
}, 5000);
