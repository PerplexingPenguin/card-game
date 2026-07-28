const cardInput = document.getElementById("card-input");
const cardsDiv = document.getElementById("cards");
const cardSubmit = document.getElementById("card-submit");
const randomItems = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash"];

let flippedCards = [];
let matchedCards = 0;
let cardsDone = []

let noClicky = false;

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

  matchedCards = 0;
  cardsDone = []
  noClicky = false;
  flippedCards = [];
  cardsDiv.innerHTML = '';
  const numberOfCards = cardInput.value;

  if (Number(numberOfCards) % 2 != 0 || Number(numberOfCards) > 20) {
    alert('u either picked too great of a number or picked an odd number! pls pick an even number that is <= 20 :))');
    return;
  };

  const randomItemsSliced = randomItems.slice(0, numberOfCards / 2);
  randomItemsSliced.forEach((item) => {
    randomItemsSliced.push(item);
  });
  shuffle(randomItemsSliced);

  for (let i = 0; i < numberOfCards; i++) {
    const card = document.createElement("DIV");
    card.classList.add("card");
    card.addEventListener("click", () => {
      if (flippedCards.includes(card) || noClicky || cardsDone.includes(card.dataset.pokemon)) {
        return;
      }

      if (card.classList.contains('flipped')) {
        card.classList.remove("flipped");
      } else {
        card.classList.add("flipped");
      };

      flippedCards.push(card);
      if (flippedCards.length === 2) {
        noClicky = true;
        const first = flippedCards[0].dataset.pokemon;
        const second = flippedCards[1].dataset.pokemon;
        if (first === second) {
          console.log("Matched!")
          matchedCards += 2;
          cardsDone.push(flippedCards[0].dataset.pokemon);
          flippedCards = []
          noClicky = false;
          if (matchedCards === Number(numberOfCards)) {
            alert("you win! reinput a number to reset!");
            matchedCards = 0;
          }
        } else {
          console.log("Not matched")
          setTimeout(() => {
            flippedCards[0].classList.remove("flipped"); flippedCards[1].classList.remove("flipped"); flippedCards = [];
            noClicky = false;
          }, 1000);
        }
      }
    });

    card.innerHTML = "<div class='front'><img src='sylveonFocus-ezgif.com-crop.gif' width='100'/></div> <div class='back'><p class='poke-identity'></p></div>"
    const para = card.querySelector('.poke-identity')
    const img = document.createElement("img")
    img.src = "images/" + randomItemsSliced[i] + ".avif";
    card.dataset.pokemon = randomItemsSliced[i];
    para.appendChild(img);
    cardsDiv.appendChild(card);
  };
};

cardSubmit.addEventListener("click", createCards);

