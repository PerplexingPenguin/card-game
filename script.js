const cardInput = document.getElementById("card-input");
const cardsDiv = document.getElementById("cards");
const cardSubmit = document.getElementById("card-submit");
const randomItems = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash"];

function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

shuffle(randomItems);

function createCards() {
  cardsDiv.innerHTML = '';
  const numberOfCards = cardInput.value;
  const randomItemsSliced = randomItems.slice(0, numberOfCards / 2);
  randomItemsSliced.forEach((item) => {
    randomItemsSliced.push(item);
  });
  shuffle(randomItemsSliced);

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

    card.innerHTML = "<div class='front'><img src='sylveonFocus-ezgif.com-crop.gif' width='100'/></div> <div class='back'><p class='poke-identity'></p></div>"
    const para = card.querySelector('.poke-identity')
    para.innerHTML = randomItemsSliced[i];
    cardsDiv.appendChild(card);
  };
};

cardSubmit.addEventListener("click", createCards);

