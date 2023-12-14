const { GameController } = require("./objects/GameController");
const { UserInterface } = require("./objects/UserInterface");

const gameController = new GameController();
const gameInterface = new UserInterface(gameController);

function startGame() {
  UserInterface.displayMenu();
  const choice = gameInterface.getUserChoice();

  switch (choice) {
    case "1":
      gameController.startMatch();
      break;
    case "2":
      console.log("Encerrando o programa. Adeus!");
      process.exit();
      break;
    default:
      console.log("Opção inválida! Tente novamente.");
  }

  startGame();
}

startGame();
