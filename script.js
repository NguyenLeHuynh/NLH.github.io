// =============== Memory Card Game ===============

// Image sources (update if needed)
const images = ["img-1.png", "img-2.png", "img-3.png", "img-4.png", "img-5.png", "img-6.png"];
let cardsArray = [...images, ...images]; // Duplicate for matching pairs
cardsArray.sort(() => 0.5 - Math.random());

const cardsContainer = document.querySelector(".cards");

cardsArray.forEach(img => {
  const li = document.createElement("li");
  li.classList.add("card");
  li.innerHTML = `
    <div class="view front-view">
      <img src="images/que_icon.svg" alt="icon" />
    </div>
    <div class="view back-view">
      <img src="images/${img}" alt="card-img" />
    </div>
  `;
  cardsContainer.appendChild(li);
});

let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard(card) {
  if (card !== cardOne && !disableDeck) {
    card.classList.add("flip");

    if (!cardOne) {
      return cardOne = card;
    }

    cardTwo = card;
    disableDeck = true;

    let img1 = cardOne.querySelector(".back-view img").src;
    let img2 = cardTwo.querySelector(".back-view img").src;

    matchCards(img1, img2);
  }
}

function matchCards(img1, img2) {
  if (img1 === img2) {
    matched++;
    if (matched === images.length) {
      setTimeout(() => alert("🎉 Chúc mừng bạn đã thắng trò chơi!"), 300);
    }
    cardOne = cardTwo = null;
    disableDeck = false;
  } else {
    setTimeout(() => {
      cardOne.classList.remove("flip");
      cardTwo.classList.remove("flip");
      cardOne = cardTwo = null;
      disableDeck = false;
    }, 1000);
  }
}

// Add event listener
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => flipCard(card));
});
