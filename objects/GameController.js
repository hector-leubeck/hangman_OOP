const { GameInterface } = require("./GameInterface");
const gameInterface = new GameInterface(this);
const { Match } = require("./Match");
const readlineSync = require("readline-sync");

class GameController {
  constructor() {
    this.players = [];
    this.currentMatch = new Match();
    this.gameInterface = new GameInterface(); // Adicionando a instância de GameInterface
  }

  startGame() {
    this.startMatch();
  }

  startMatch() {
    this.gameInterface.displayHangmanStage(/* argumentos necessários */);
    this.gameInterface.displaySecretWord(/* argumentos necessários */);
  }

  addPlayer(player) {
    this.players.push(player);
  }

  endMatch() {
    if (this.currentMatch) {
      this.currentMatch.calculateScores(this.players);
      this.currentMatch = null;
    }
  }
}

module.exports = { GameController };
