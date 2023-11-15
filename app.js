let winCounter = parseInt(localStorage.getItem("winCounter")) || 0;
let loseCounter = parseInt(localStorage.getItem("loseCounter")) || 0;
let tieCounter = parseInt(localStorage.getItem("tieCounter")) || 0;

function updateScoreDisplay() {
  document.getElementById("winCounter").textContent = winCounter;
  document.getElementById("loseCounter").textContent = loseCounter;
  document.getElementById("tieCounter").textContent = tieCounter;
}

function resetScores() {
  winCounter = 0;
  loseCounter = 0;
  tieCounter = 0;
  localStorage.removeItem("winCounter");
  localStorage.removeItem("loseCounter");
  localStorage.removeItem("tieCounter");
  updateScoreDisplay();
}

function updateImages(userChoice, hand1) {
  const userChoiceImg = document.getElementById("userChoiceImg");
  const computerChoiceImg = document.getElementById("computerChoiceImg");

  userChoiceImg.setAttribute("src", `images/${userChoice}-emoji.png`);
  userChoiceImg.setAttribute("alt", userChoice);

  computerChoiceImg.setAttribute("src", `images/${hand1}-emoji.png`);
  computerChoiceImg.setAttribute("alt", hand1);
}

updateScoreDisplay();

function calculateHand1() {
  const hand = Math.floor(Math.random() * 10);
  if (hand <= 3) {
    return "rock";
  } else if (hand > 3 && hand <= 6) {
    return "paper";
  } else {
    return "scissors";
  }
}

function updateResultAndCounters(userChoice) {
  const hand1 = calculateHand1();
  let resultText;

  if (hand1 === userChoice) {
    resultText = "It's a tie.";
    tieCounter++;
  } else if (
    (userChoice === "rock" && hand1 === "scissors") ||
    (userChoice === "paper" && hand1 === "rock") ||
    (userChoice === "scissors" && hand1 === "paper")
  ) {
    resultText = "You win.";
    winCounter++;
  } else {
    resultText = "You lose.";
    loseCounter++;
  }

  // setUserChoice(userChoice);
  setResult(resultText);
  // setComputerChoice(hand1);
  updateCounters();
  updateImages(userChoice, hand1);
}

document.getElementById("rock").addEventListener("click", function () {
  updateResultAndCounters("rock");
});

document.getElementById("paper").addEventListener("click", function () {
  updateResultAndCounters("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
  updateResultAndCounters("scissors");
});

function setUserChoice(choice) {
  document.getElementById("userChoiceImg").textContent = choice;
}

function setComputerChoice(choice) {
  document.getElementById("computerChoiceImg").textContent = choice;
}

function setResult(resultText) {
  document.getElementById("resultParagraph").textContent = resultText;
}

function updateCounters() {
  document.getElementById("winCounter").textContent = winCounter;
  document.getElementById("loseCounter").textContent = loseCounter;
  document.getElementById("tieCounter").textContent = tieCounter;

  // Update localStorage with the latest scores
  localStorage.setItem("winCounter", winCounter.toString());
  localStorage.setItem("loseCounter", loseCounter.toString());
  localStorage.setItem("tieCounter", tieCounter.toString());
}


document.getElementById("resetButton").addEventListener("click", function () {
  resetScores();
  setUserChoice("");
  setComputerChoice("");
  setResult("");
  // Clear the images
  document.getElementById("userChoiceImg").setAttribute("src", "");
  document.getElementById("computerChoiceImg").setAttribute("src", "");
  document.getElementById("userChoiceImg").setAttribute("alt", "");
  document.getElementById("computerChoiceImg").setAttribute("alt", "");
});






