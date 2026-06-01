$(document).ready(function () {
  const source = document.getElementById("hb-template").innerHTML;
  const destination = document.getElementById("hb-result");
  const template = Handlebars.compile(source);

  async function getPokemons() {
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
  }

  function fillList(pokemons) {
    const context = { pokemon: pokemons, tableClass: "table" };
    const html = template(context);
    destination.innerHTML = html;
    $('[data-toggle="popover"]').popover();
  }

  getPokemons().then((pkmns) => {
    fillList(pkmns);
  });
});
