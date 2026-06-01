$(document).ready(function () {
  const source = document.getElementById("hb-template").innerHTML;
  const destination = document.getElementById("hb-result");
  const template = Handlebars.compile(source);

  let pokemons = [];

  function addStripes() {
    $("table tr").removeClass("striped");
    $("table tr:nth-child(even)").addClass("striped");
  }

  function afterRender() {
    $("table th").css("color", "darkBlue");

    addStripes();

    $("table tr").on("mouseenter", (event) => {
      $(event.currentTarget).css("backgroundColor", "yellow");
    });

    $("table tr").on("mouseleave", (event) => {
      $(event.currentTarget).removeAttr("style");
    });

    setTimeout(function () {
      const hideElements = $("table td a:contains('p')").filter(function () {
        return this.innerHTML.indexOf("p") == 0;
      });
      console.log(hideElements);
      hideElements.closest("tr").remove();
      addStripes();
      $("<div></div>")
        .insertAfter("#hb-template")
        .text("Skriveno: " + hideElements.length);
    }, 2000);
  }

  async function getDetails(pokemon) {
    const response = await fetch(pokemon.url);
    if (!response.ok)
      throw new Error(`${response.status} - ${response.statusText}`);

    const data = await response.json();
    pokemons.push({
      name: pokemon.name,
      url: pokemon.url,
      habitat: data.habitat ? data.habitat.name : "",
      growth_rate: data.growth_rate ? data.growth_rate.name : "",
    });
  }

  async function getPokemons() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon-color/yellow",
      );

      if (!response.ok) throw new Error(`HTML Error: ${response.status}`);
      const data = await response.json();

      await Promise.all(
        data.pokemon_species.slice(0, 20).map((pokemon) => getDetails(pokemon)),
      );
      fillList(pokemons);
    } catch (e) {
      console.log(e);
    }
  }

  function fillList(pokemons) {
    const context = { pokemon: pokemons, tableClass: "table" };
    const html = template(context);
    destination.innerHTML = html;
    $('[data-bs-toggle="popover"]').popover();

    afterRender();
  }

  getPokemons();

  $(window).resize(() => {
    console.log($(window).width());
  });
});
