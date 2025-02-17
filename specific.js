const pokeForm = document.getElementById("pokeForm");
const pokeUserInput = document.getElementById("pokeUserInput");
const pokeInfo = document.getElementById("pokeInfo");

pokeForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const pokeName = pokeUserInput.value.toLowerCase();

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    if (!response.ok) {
      pokeInfo.innerHTML = "<p>Pokémon not in database<br><em>*Please make sure the Pokémon's name is typed correct!</p>";
      return;
    }
    const pokeData = await response.json();
    displayPokeInfo(pokeData);
  } catch (error) {
    pokeInfo.innerHTML = "<p>Error!</p>";
  }
});

function displayPokeInfo(pokeData) {
  const types = pokeData.types.map(typeInfo => typeInfo.type.name).join(', ');
  const abilities = pokeData.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');
  const stats = pokeData.stats.map(statInfo => `${statInfo.stat.name}: ${statInfo.base_stat}`).join(', ');

  const html = `
    <h2 style="text-align: center; padding-top: 5px;">${pokeData.name}</h2>
    <img src="${pokeData.sprites.front_default}" alt="${pokeData.name}">
    <p>Height: ${pokeData.height}</p>
    <p>Weight: ${pokeData.weight}</p>
    <p>Type: ${types}</p>
    <p>Abilities: ${abilities}</p>
    <p>Stats: ${stats}</p>
  `;
  pokeInfo.innerHTML = html;
}
