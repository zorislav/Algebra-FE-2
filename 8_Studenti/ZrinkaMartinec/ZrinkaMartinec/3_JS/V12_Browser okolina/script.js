//dimenzije ekrana
console.log("Širina ekrana:" + window.screen.width);
console.log("Visina ekrana:" + window.screen.height);

console.log("Širina prozora:" + window.innerWidth);
console.log("Visina prozora:" + window.innerHeight);

//2
console.log("Adresa:" + window.location.hostname);
//window.location.replace("http://www.google.com");

//3
window.confirm("Prihvaćate li coookies");

var odgovor = window.confirm("Prijelaz na google?");
if (odgovor) window.location.replace("http://google.com");

console.log(odgovor);
//4

window.setTimeout(function () {
  console.log("Danas malo kasnim");
}, 5000);

//Bonus

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (pos) {
    console.log("Dužina:" + pos.coords.longitude);
    console.log("Širina:" + pos.coords.latitude);
  });
} else {
  console.log("Browser ne podržava geolokaciju");
}
