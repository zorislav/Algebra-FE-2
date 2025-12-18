// 1.
// https://dummyjson.com

function getData1() {
  const request = new XMLHttpRequest();
  request.open("GET", "https://dummyjson.com/products/2", true);

  request.onload = function () {
    console.log(`Status: ${request.status}`);
    console.log(request.responseText);
  };
  request.send();
}

// getData1();

function getData2() {
  fetch("https://dummyjson.com/product/2")
    .then((response) => response.json())
    .then((responseData) => console.log(responseData))
    .catch((error) => console.log(error));
}

// getData2();

async function getData3() {
  try {
    const response = await fetch("https://dummyjson.com/product/2");
    console.log(`Status: ${response.status}`);
    if (response.status == 200) {
      const responseData = await response.json();
      console.log(responseData);
    } else {
      console.log("Greška!");
    }
  } catch (error) {
    console.log(error);
  }
}

getData3();
