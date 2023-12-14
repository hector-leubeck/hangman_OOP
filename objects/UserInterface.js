const readlineSync = require("readline-sync");

class UserInterface {
  static displayMenu() {
    console.log("=== Menu ===");
    console.log("1. Iniciar Novo Jogo");
    console.log("2. Encerrar Programa");
  }

  getUserChoice() {
    return readlineSync.question("Escolha uma opção: ");
  }
}

module.exports = { UserInterface };
