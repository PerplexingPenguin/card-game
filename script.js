const cardInput = document.getElementById("card-input");
const cardsDiv = document.getElementById("cards");
const cardSubmit = document.getElementById("card-submit");


function createCards() {
  cardsDiv.innerHTML = ''
  const numberOfCards = cardInput.value;
  for (let i = 0; i < numberOfCards; i++) {
    const card = document.createElement("DIV");
    card.classList.add("card");
    cardsDiv.appendChild(card);
  };
};

cardSubmit.addEventListener("click", createCards);

