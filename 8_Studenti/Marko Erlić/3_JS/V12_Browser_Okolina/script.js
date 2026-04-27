// Dimenzije ekrana
console.log("Širina ekrana: " + window.screen.width);
console.log("Visina ekrana: " + window.screen.height);

// Dimenzije prozora
console.log("Širina prozora: " + window.innerWidth);
console.log("Visina prozora: " + window.innerHeight);

// Ime domene i redirect URL
console.log("Adresa: " + window.location.hostname);
// window.location.replace("https://www.google.com");

//
window.confirm("Prihvaćate li cookije?");

// var odgovor = window.confirm("Prijelaz na Google?");
// if (odgovor) window.location.replace("https://www.google.com");

// 4

window.setTimeout(function () {
  console.log("Danas malo kasnim");
}, 5000);

// Bonus

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log("Širina: " + position.coords.latitude);
    console.log("Dužina: " + position.coords.longitude);
  });
} else {
  console.log("Geolokacija nije podržana u ovom pregledniku.");
}
