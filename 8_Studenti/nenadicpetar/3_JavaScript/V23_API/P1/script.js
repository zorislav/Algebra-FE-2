// 1. Odite na stranicu https://any-api.com/
// https://dummyjson.com/

// 2. Izaberite jedan public API sa liste koji podržava REST
// standard, pruža podatke u JSON obliku i ima upute za
// dohvaćanje sa XMLHttpRequest objektom (nativni JavaScript
// jezik).

// 3. Napišite JS kod koji se priključuje na taj API (po uzoru
// na primjer iz prijašnje lekcije).

// 4. Izaberite jedan endpoint u APIju nad kojim možete
// napraviti GET request.
// Ispišite rezultat u konzolu.

var request = new XMLHttpRequest();
request.open("GET", "https://dummyjson.com/products/1", true);

request.onload = function (result) {
  console.log(result.currentTarget.responseText);
};

request.send();

async function getData1() {
  try {
    const resp = await fetch("https://dummyjson.com/products/1");
    const jsonData = await resp.json();
    console.log(JSON.stringify(jsonData));
  } catch (error) {
    console.log(error);
  }
}

//getData1();

function getData2() {
  fetch("https://dummyjson.com/products/1", {
    method: "GET",
  })
    .then((resp) => resp.json())
    .then((jsonData) => console.log(JSON.stringify(jsonData)))
    .catch((error) => console.log(error));
}

//getData2();

async function getData3() {
  try {
    const response = await fetch("https://dummyjson.com/products/2");
    console.log("Status: ${response.status}");
    if (response.status === 200) {
      const responseData = await response.json();
      console.log(responseData);
    } else {
      console.log("Greška!");
    }
  } catch (error) {
    console.log(error);
  }
}
