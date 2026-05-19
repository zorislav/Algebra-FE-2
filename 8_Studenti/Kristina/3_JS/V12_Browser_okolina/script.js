//1

// Dimenzije ekrana

console.log("Širina ekrana:" + window.screen.width);
console.log("Visina ekrana:" + window.screen.height);

// Dimenzije ekrana

console.log("Širina prozora:" + window.innerWidth);
console.log("Visina prozora:" + window.innerHeight);

//2

console.log("Adresa:" + window.location.hostname);
//window.location.replace("https://www.google.com");

//3
window.confirm("Prihvaćate li cookije?");

var dogovor = window.confirm("Prijelaz na Google?");
//console.log(dogovor);
if (dogovor) {
  //window.location.replace("https://www.google.com");
}

//4

window.setTimeout(function () {
  console.log("Danas malo kasnim");
}, 5000);

//Bonus

if (navigator.geolocationb) {
  navigator.geolocation.getCurrentPosition(function (pos) {
    console.log("Dužina" + pos.coords.longitude);
    console.log("Širina" + pos.coords.latitude);
  });
} else {
  console.log("Browser ne podržava geolokaciju");
}
