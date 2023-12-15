const readlineSync = require("readline-sync");
const { words } = require("./wordLists");
class GameMenu {
  static display() {
    console.log("=== Menu ===");
    console.log("1. Fazer uma suposição");
    console.log("2. Receber uma dica");
    console.log("3. Encerrar a rodada");
  }
}

class Match {
  static getUserChoice() {
    return readlineSync.question("Escolha uma opção: ");
  }

  static getLetterGuess() {
    return readlineSync.question("Faça uma suposição de letra: ");
  }

  static getPlayerName() {
    return readlineSync.question("Digite o nome do jogador: ");
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  incrementScore() {
    this.score++;
  }

  getScore() {
    return this.score;
  }
}

class HangmanRenderer {
  static render(wrongGuesses) {
    const hangmanStages = [
      `
           ___
          |       |
          |
          |
          |
          |
        ============
          `,
      `
           ___
          |       |
          |       O
          |
          |
          |
        ============
          `,
      `
           ___
          |       |
          |       O
          |       |
          |
          |
        ============
          `,
      `
           ___
          |       |
          |       O
          |      /|
          |
          |
        ============
          `,
      `
           ___
          |       |
          |       O
          |      /|\\
          |
          |
        ============
          `,
      `
           ___
          |       |
          |       O
          |      /|\\
          |      /
          |
        ============
          `,
      `
           ___
          |       |
          |       O
          |      /|\\
          |      / \\
          |
        ============
          `,
    ];

    console.log(hangmanStages[wrongGuesses]);
  }
}

class HintProvider {
  constructor(wordList) {
    this.hints = this.generateHints(wordList);
  }

  generateHints(wordList) {
    const hints = {};
    wordList.forEach((item) => {
      hints[item.word.toLowerCase()] = item.description;
    });
    return hints;
  }

  getHint(word) {
    return this.hints[word.toLowerCase()] || "Sem dica disponível.";
  }
}

class GameController {
  constructor() {
    this.players = [];
    this.currentPlayerIndex = 0;
    this.maxWrongGuesses = 6;
    this.wrongGuesses = 0;
    this.correctGuesses = [];
    this.wordDisplay = "";
    this.guessHistory = [];
    this.hintProvider = new HintProvider(words);
    this.chooseSecretWord();
  }

  chooseSecretWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const selectedWord = words[randomIndex];
    this.secretWord = selectedWord.word.toLowerCase();
    this.wordDisplay = "_".repeat(this.secretWord.length);
  }
  initializeWordDisplay() {
    return "_".repeat(this.secretWord.length);
  }

  makeGuess(letter) {
    if (!this.isValidGuess(letter)) {
      console.log("Entrada inválida. Insira uma única letra do alfabeto.");
      return;
    }

    if (this.secretWord.includes(letter)) {
      this.updateWordDisplay(letter);
      this.correctGuesses.push(letter);
    } else {
      this.wrongGuesses++;
    }

    this.guessHistory.push(letter);
    this.checkGameStatus();
  }

  getHint() {
    const currentWord = this.secretWord.toLowerCase();
    const hint = this.hintProvider.getHint(currentWord);
    console.log(`Dica: ${hint}`);
  }

  isValidGuess(letter) {
    return /^[a-zA-Z]$/.test(letter) && !this.guessHistory.includes(letter);
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

  checkGameStatus() {
    console.clear();
    HangmanRenderer.render(this.wrongGuesses);
    console.log(`Palavra: ${this.wordDisplay}`);
    console.log(
      `Tentativas Restantes: ${this.maxWrongGuesses - this.wrongGuesses}`
    );
    console.log(`Letras Corretas: ${this.correctGuesses.join(", ")}`);
    console.log(
      `Letras Erradas: ${this.guessHistory
        .filter((letter) => !this.secretWord.includes(letter))
        .join(", ")}`
    );

    if (this.wordDisplay === this.secretWord) {
      console.log(
        `Parabéns, ${this.getCurrentPlayer().name}! Você acertou a palavra!`
      );
      this.getCurrentPlayer().incrementScore();
      this.endRound();
    } else if (this.wrongGuesses >= this.maxWrongGuesses) {
      console.log(
        `Você excedeu o número máximo de tentativas. A palavra era: ${this.secretWord}`
      );
      this.endRound();
    }
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  endRound() {
    console.log(
      `Rodada encerrada. Pontuação de ${
        this.getCurrentPlayer().name
      }: ${this.getCurrentPlayer().getScore()}`
    );
    this.resetRound();

    if (this.players.every((player) => player.getScore() >= 3)) {
      console.log(
        "Jogo encerrado. Todos os jogadores atingiram a pontuação máxima!"
      );
      process.exit();
    }

    this.switchPlayer();
  }

  switchPlayer() {
    this.currentPlayerIndex =
      (this.currentPlayerIndex + 1) % this.players.length;
    console.log(`Próximo jogador: ${this.getCurrentPlayer().name}`);
  }

  resetRound() {
    this.secretWord = this.chooseSecretWord();
    this.wrongGuesses = 0;
    this.correctGuesses = [];
    this.wordDisplay = this.initializeWordDisplay();
    this.guessHistory = [];
  }

  startGame() {
    console.log("Bem-vindo ao Jogo da Forca!");

    const numPlayers = parseInt(
      readlineSync.question("Digite o número de jogadores: ")
    );
    for (let i = 0; i < numPlayers; i++) {
      const playerName = Match.getPlayerName();
      this.players.push(new Player(playerName));
    }

    while (true) {
      GameMenu.display();
      const choice = Match.getUserChoice();

      switch (choice) {
        case "1":
          const guess = Match.getLetterGuess();
          this.makeGuess(guess);
          break;
        case "2":
          this.getHint();
          break;
        case "3":
          this.endRound();
          break;
        default:
          console.log("Opção inválida! Tente novamente.");
      }
    }
  }
}

const hangmanGame = new GameController();
hangmanGame.startGame();
