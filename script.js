const cardInput = document.getElementById("card-input");
const cardsDiv = document.getElementById("cards");
const cardSubmit = document.getElementById("card-submit");

function createCards() {
  cardsDiv.innerHTML = ''
  const numberOfCards = cardInput.value;
  for (let i = 0; i < numberOfCards; i++) {
    const card = document.createElement("DIV");
    card.classList.add("card");

    card.addEventListener("click", () => {
      s
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

cardSubmit.addEventListener("click", createCards);

