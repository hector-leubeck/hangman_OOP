const { words } = require("./wordLists");

class Match {
  constructor() {
    this.secretWord = "";
    this.guesses = 0;
    this.maxWrongGuesses = 6;
    this.wordDisplay = "";
    this.guessHistory = [];
    this.words = words;
  }

  chooseSecretWord() {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    this.secretWord = this.words[randomIndex].word;
    this.initializeWordDisplay();
  }

  initializeWordDisplay() {
    this.wordDisplay = "_".repeat(this.secretWord.length);
  }

  makeGuess(letter) {
    if (!/^[a-zA-Z]$/.test(letter)) {
      console.log("Entrada inválida. Insira uma única letra do alfabeto.");
      return false;
    }

    if (this.wordDisplay.includes(letter)) {
      console.log(`Você já tentou a letra ${letter}. Escolha outra letra.`);
      return false;
    }

    const letterExists = this.secretWord.includes(letter);
    letterExists ? this.updateWordDisplay(letter) : this.guesses++;

    this.guessHistory.push(letter);

    this.checkGameStatus();

    return letterExists;
  }

  updateWordDisplay(letter) {
    const wordArray = this.wordDisplay.split("");
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.secretWord[i] === letter) {
        wordArray[i] = letter;
      }
    }
    this.wordDisplay = wordArray.join("");
  }

  makeWordGuess(wordGuess) {
    const isCorrect = this.secretWord === wordGuess;
    return isCorrect;
  }

  checkGameStatus() {
    const isGameWon = this.wordDisplay === this.secretWord;
    const isGameLost = this.guesses >= this.maxWrongGuesses;

    if (isGameWon || isGameLost) {
      return {
        isGameWon,
        isGameLost,
        secretWord: this.secretWord,
      };
    }

    return null;
  }

  getGuessHistory() {
    return this.guessHistory;
  }
}

module.exports = { Match };
