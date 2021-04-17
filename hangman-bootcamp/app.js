const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('car parts', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', function (e) {
  const guess = e.key
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.statusMessage
})
