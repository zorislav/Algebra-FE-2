//Cookies

//window.document
document.cookie = "ime=Petar Nenadic";
document.cookie = "adresa= Slavka Batusica 25";
console.log(document.cookie);

// LocalStorage
localStorage.setItem("name", "John");
console.log(localStorage.getItem("name"));

// Geolokacija

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log("Duzina: " + position.coords.longitude);
    console.log("Sirina: " + position.coords.latitude);
  });
} else {
  console.log("Browser ne podrzava geolokaciju.");
}
