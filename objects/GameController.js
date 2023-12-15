const { GameInterface } = require("./GameInterface");
const { Match } = require("./Match");

class GameController {
  constructor() {
    this.players = [];
    this.currentMatch = new Match();
    this.gameInterface = new GameInterface(this); // Passa a referência do GameController para GameInterface
  }

  startGame() {
    this.startMatch();
  }

  startMatch() {
    this.gameInterface.displayMenu();
    const choice = this.gameInterface.getUserChoice();

    this.gameInterface.handleMenuChoice(choice);
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
