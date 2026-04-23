// const request = new XMLHttpRequest();

// request.open("GET", "https://dummyjson.com/products/2", true);

// request.onload = function (result) {
//   console.log(result.currentTarget.responseText);
// };

// request.send();

// Opcija 2

function getData() {
  fetch("https://dummyjson.com/products/255")
    .then((response) => response.json())
    .then((responseData) => {
      console.log(JSON.stringify(responseData));
      console.log(responseData);
    })
    .catch((err) => console.log(err));
}

// getData();

// Opcija 3

try {
  async function getData2() {
    const response = await fetch("https://dummyjson.com/products/255");
    const responseData = await response.json();

    console.log(responseData);
  }

  getData2();
} catch (err) {
  HTMLFormControlsCollection.log(err);
}
