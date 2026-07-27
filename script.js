const cardInput = document.getElementById("card-input");
const cardsDiv = document.getElementById("cards");
const cardSubmit = document.getElementById("card-submit");
const randomItems = [Bulbasaur, Ivysaur, Venusaur, Charmander, Charmeleon, Charizard, Squirtle, Wartortle, Blastoise, Caterpie, Metapod, Butterfree, Weedle, Kakuna, Beedrill, Pidgey, Pidgeotto, Pidgeo, Rattata, Raticate, Spearow, Fearow, Ekans, Arbok, Pikachu, Raichu, Sandshrew, Sandslash]

function createCards() {
  cardsDiv.innerHTML = ''
  const numberOfCards = cardInput.value;
  for (let i = 0; i < numberOfCards; i++) {
    const card = document.createElement("DIV");
    card.classList.add("card");

    card.addEventListener("click", () => {
      if (card.classList.contains('flipped')) {
        card.classList.remove("flipped");
      } else {
        card.classList.add("flipped");
      };
    });

    card.innerHTML = "<div class='front'><img src='sylveonFocus-ezgif.com-crop.gif' width='100'/></div> <div class='back'><p></p></div>"
    cardsDiv.appendChild(card);
  };
};



function fetchPokemonSprite(pokemon) {
  let url = pokemon.url
  fetch(url).then(response => response.json()).then(data => {
    console.log(data.sprites.front_default);
  })
};

function fetchPokemon() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(response => response.json()).then(function (allpokemon) {
    allpokemon.results.forEach(function (pokemon) {
      fetchPokemonSprite(pokemon);
    })
  })
};

fetchPokemon();

cardSubmit.addEventListener("click", createCards);

