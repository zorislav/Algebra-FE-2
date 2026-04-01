//1
//Dimenzije ekrana
console.log("Širina ekrana: " + window.screen.width);
console.log("Visina ekrana: " + window.screen.height);

//Dimenzije prozora
console.log("Širina prozora: " + window.innerWidth);
console.log("Visina prozora: " + window.innerHeight);

//2
console.log("Adresa: " + window.location.hostname);
// window.location.replace("http://www.google.com");

//3
window.confirm("Prihvaćate li cookije?");

var odgovor = window.confirm("Prijelaz na google?");
if (odgovor) window.location.replace("http://google.com");

//4
setTimeout(function () {
  console.log("Danas malo kasnim");
}, 5000);

//Bonus

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (pos) {
    console.log("Duzina: " + pos.coords.longitude);
    console.log("Sirina: " + pos.coords.latitude);
  });
} else {
  console.log("Browser ne podrzava geolokaciju");
}
