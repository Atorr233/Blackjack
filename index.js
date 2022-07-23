"use strict";

// This neeeded to be hoisted because it's not a function declaration. It is a function expression.
const getRandomCard = function () {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
};

// cards.src = `${randomNumber}_of_hearts.png`;
let randomNumber = 0;
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector(".cards-el");
// let cards2El = document.querySelector(".cards2-el");
// let cards3El = document.querySelector(".cards3-el");
// let cards4El = document.querySelector(".cards4-el");
let playerEl = document.querySelector("#player-el");

let player = {
  name: "Player1",
  chips: 143,
};

playerEl.textContent = `${player.name}: $${player.chips}`;

// This is the function when you start the game
const startGame = function () {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  console.log(cards);
  cardsEl.textContent += cards;
  // cardsEl.src = `${firstCard}_of_hearts.png`;
  // cards2El.src = `${secondCard}_of_hearts.png`;
  sum = firstCard + secondCard;
  isAlive = true;
  renderGame();
};

// This renders the card numbers onto the DOM.
const renderGame = function () {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i <= cards.length - 1; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
};

const newCard = function () {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    // cards3El.src = `${card}_of_hearts.png`;
    cards.push(card);
    sum += card;
  }
  renderGame();
};

// To do:
//  How to add another card to the new card pile without creating a duplicate?
// Organizing all the cards into loadable format.
// Adding and updating player chips into the game.
