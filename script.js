"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent =
      "please guess some number!👀";
  } else if (guess === number) {
    displayMessage("correct number !😁");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "400px";
    document.querySelector(".number").textContent = number;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "too high!" : "too low !");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("you lose the game !😢");
      document.querySelector(".score").textContent = 0;
    }
  }
}); /*else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too low !😒";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lose the game !😢";
      document.querySelector(".score").textContent = 0;
    }
  }*/

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "150px";
});
