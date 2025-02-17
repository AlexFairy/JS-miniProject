//For the ASIDE///////////////////////////////////////////
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
    displaypokeInfo(pokeData);
  } catch (error) {
    pokeInfo.innerHTML = "<p>Error!</p>";
  }
});

function displaypokeInfo(pokeData) {
  const html = `
    <h2>${pokeData.name}</h2>
    <img src="${pokeData.sprites.front_default}" alt="${pokeData.name}">
    <p>Height: ${pokeData.height}</p>
    <p>Weight: ${pokeData.weight}</p>
  `;
  pokeInfo.innerHTML = html;
}
//FOR THE ASIDE///////////////////////////////////////////////////