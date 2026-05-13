/*async function getPokemons() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon-color/yellow",
    );

    if (!response.ok) throw new Error(`HTML Error: ${response.status}`);

    const data = await response.json();

    return data.pokemon_species.slice(0, 20);
  } catch (e) {
    console.log(e);
  }

  function fillList(pokemons) {
    //Handelbars
    //Template
    //Rezultat
    const context = { pokemon: pokemons };
    const html = template(context);
    destination.innerHTML = html;
  }
}
getPokemons().then((pkmns) => {
  fillList(pkmns);
});*/
const source = document.getElementById("hb-template").innerHTML;
const template = Handlebars.compile(source);

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon-color/yellow", true);

function fillList() {
  const data = JSON.parse(xhr.response);
  const context = { pokemon: data.pokemon_species.slice(0, 20) };
  const html = template(context);
  const destination = document.getElementById("hb-result");

  destination.innerHTML = html;
}

xhr.onload = function () {
  fillList();
};

xhr.send();
