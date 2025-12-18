// Dimenzije ekrana

console.log("Sirina ekrana: " + window.screen.width);
console.log("Visina ekrana: " + window.screen.height);

// Dimenzije prozora

console.log("Sirina prozora: " + window.innerWidth);
console.log("Visina prozora: " + window.innerHeight);

// 2. Ime domene stranice i redirektajte na google

console.log("Adresa: " + window.location.href);
// window.location.replace("https://www.google.com");

// 3. Napišite naredbu koja otvara konfirmacijski prozor u browseru vezan uz politiku cookieja

var odgovor = window.confirm("Prihvaćate li cookieje?");
if (odgovor) {
  console.log("Da");
} else {
  console.log("Ne");
}

window.alert("Greška");

// 4. Napišite jednostavnu console.log funkciju koja se izvršava 2 sekunde nakon što je pozvana

function kasnim() {
  console.log("Kasnim 5 sekundi!");
}

window.setTimeout(kasnim, 5000);

setTimeout(function () {
  console.log("Kasnim 5 sekundi!");
}, 5000);
