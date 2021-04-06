console.log("--- Number Guess Game | 01 ---");

// Game Values
let minNumber = 1;
let maxNumber = 10;
let randomNumber = getRandomNumber(minNumber, maxNumber);
let playerLife = 3;
let gameOver = false;

// UI Elements
const gameFrame = document.getElementById("number-guess-game");
const minNumberSpan = document.getElementById("min-number");
const maxNumberSpan = document.getElementById("max-number");
const guessInput = document.getElementById("guess-number-input");
const guessButton = document.getElementById("guess-number-btn");
const message = document.getElementById("game-progress-message");
const oldGuessList = document.getElementById("old-guess-table");

// Assign UI min number and max number
minNumberSpan.textContent = minNumber;
maxNumberSpan.textContent = maxNumber;

// Listen for Guess Input

guessInput.addEventListener("input", () => {
  let guessedValue = parseInt(guessInput.value);
  if (guessedValue < minNumber || guessedValue > maxNumber) {
    guessInput.value = "";
    setMessage(`Please enter a number between 
                ${minNumber} and ${maxNumber}`,"red");
  }
});


gameFrame.addEventListener("mousedown", (e) => {
  if (e.target.id === "play-again") {
    window.location.reload();
  }
});

// Validate Number
function validateNumber(number) {
  // Validate Number
  if (isNaN(number)) {
    setMessage('Please enter a number', 'blue');
  } else if (number < minNumber || number > maxNumber) {
    setMessage(`Please enter a number between 
    ${minNumber} and ${maxNumber}`,"red");
  } else {
    return true;
  }
  return false;
}

// Listen for guess
guessButton.addEventListener("click", () => {
  let guessedNumber = parseInt(guessInput.value);
  console.log(guessedNumber, typeof guessedNumber); // debug

  validateNumber(guessedNumber);

  if (guessedNumber === randomNumber && validateNumber(guessedNumber)) {
    // Disable Input
    guessInput.disabled = true;
    guessButton.disabled = true;
    // Change Border Color
    guessInput.style.borderColor = 'green';
    // Set Message
    setMessage(`${randomNumber} is correnct!`, 'green');
    gameOver = true;
    gameOverFunc();
  } else if (validateNumber(guessedNumber)) {
    // Wrong Number Guessed
    playerLife -= 1;
    setMessage(`You have left ${playerLife} guess!`)

    if (playerLife === 0) {
      guessInput.disabled = true;
      guessButton.disabled = true;
      guessInput.style.borderColor = 'red';
      setMessage(`Game Over, you lost. The correct number was ${randomNumber}`, 'red');
      gameOver = true;
      gameOverFunc();
    }

    if (validateNumber(guessedNumber)) {
      let listItem = document.createElement("tr");
      listItem.innerHTML = `<td>${guessInput.value}</td>`
      oldGuessList.appendChild(listItem);
    }
  }

});

function gameOverFunc() {
  guessButton.value = "Play Again!";
  guessButton.id = "play-again";
  guessButton.disabled = false;
  
}

// get random number
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max-min+1) + min);
}

// Set Message Function
function setMessage(msg, clr) {
  message.style.display = "block"
  message.style.color = clr;
  message.textContent = msg;
  setTimeout(() => {
    message.style.display = "none";
  }, 2000);

}
