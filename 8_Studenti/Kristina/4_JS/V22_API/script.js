//Opcija1
//const request = new XMLHttpRequest();

/*request.open("GET", "https://dummyjson.com/products/1", true);
request.onload = function (result) {
  console.log(result.currentTarget.responseText);
};
request.send();*/

// Opciija2

function getData() {
  fetch("https://dummyjson.com/products/1")
    .then((response) => response.json())
    .then((responseData) => console.log(responseData.s));
}
//getData();

// Opcija3
try {
  async function getData2() {
    const response = await fetch("https://dummyjson.com/products/255");
    const responseData = await response.json();
    console.log(responseData);
  }
} catch (err) {
  console.log(err);
}
getData2();
