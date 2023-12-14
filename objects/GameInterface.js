const readlineSync = require("readline-sync");
const { GameController } = require("./GameController");

class GameInterface {
  constructor() {
    this.gameController = GameController;
    this.MAX_WRONG_GUESSES = 6;
    this.hangmanStages = [
      `
         _______
        |       |
        |
        |
        |
        |
      ============
        `,
      `
         _______
        |       |
        |       O
        |
        |
        |
      ============
        `,
      `
         _______
        |       |
        |       O
        |       |
        |
        |
      ============
        `,
      `
         _______
        |       |
        |       O
        |      /|
        |
        |
      ============
        `,
      `
         _______
        |       |
        |       O
        |      /|\\
        |
        |
      ============
        `,
      `
         _______
        |       |
        |       O
        |      /|\\
        |      /
        |
      ============
        `,
      `
         _______
        |       |
        |       O
        |      /|\\
        |      / \\
        |
      ============
        `,
    ];
    this.wordDisplay = "";
    this.hints = "";
  }

  displayHangmanStage(wrongLetters) {
    const hangmanStage = this.hangmanStages[wrongLetters];
    console.log(hangmanStage);
  }

  displaySecretWord(secretWord) {
    this.wordDisplay = `Palavra: ${secretWord}`;
    console.log(this.wordDisplay);
  }

  displayHints(hints) {
    this.hints = `Dicas: ${hints}`;
    console.log(this.hints);
  }
  displayMenu() {
    console.log("=== Menu ===");
    console.log("1. Chutar uma Letra");
    console.log("2. Chutar a Palavra");
    console.log("3. Consultar a Pontuação");
    console.log("4. Desistir da partida");
  }

  getUserChoice() {
    return readlineSync.question("Escolha uma opção: ");
  }

  handleMenuChoice(choice) {
    switch (choice) {
      case "1":
        const letter = prompt("Digite a letra que deseja chutar: ");
        this.gameController.makeGuess(letter);
        break;
      case "2":
        const wordGuess = prompt("Digite a palavra que deseja chutar: ");
        this.gameController.makeWordGuess(wordGuess);
        break;
      case "3":
        const score = this.gameController.getScore();
        console.log(`Sua pontuação atual é: ${score}`);
        break;
      case "4":
        this.gameController.endMatch();
        break;
      default:
        console.log("Opção inválida! Tente novamente.");
    }
  }
}

module.exports = { GameInterface };
