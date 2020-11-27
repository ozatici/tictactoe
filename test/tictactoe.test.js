const TicTacToeGame = require("../src/tictactoe.js");
const Player = require("../src/player.js");

describe("A tic tac toe game should be played", () => {
  describe("The game should be set up", () => {
    it("should create a game of tic tac toe", () => {
      const game = new TicTacToeGame();
      expect(game).toBeTruthy();
    });

    it("The game should have a board with 3 rows", () => {
      const game = new TicTacToeGame();
      expect(game.board.length).toEqual(3);
    });

    it("The game should have a board with 3 cols", () => {
      const game = new TicTacToeGame();
      expect(game.board[0].length).toEqual(3);
    });

    it("should be able to create a player", () => {
      const playerX = new Player("X");
      expect(playerX).toBeTruthy();
    });

    it("the must have an id", () => {
      let playerX = () => new Player(null);
      expect(playerX).toThrow("expception");
    });

    it("The game should have a player X and player O", () => {
      const playerX = new Player("X");
      const playerO = new Player("O");
      const game = new TicTacToeGame(playerX, playerO);
      expect(game.getPlayers().length).toBe(2);
    });

    it("Player X should be marked as the next player to take a turn", () => {
      const playerX = new Player("X");
      const playerO = new Player("O");
      const game = new TicTacToeGame(playerX, playerO);
      expect(game.nextTurn).toEqual(playerX);
    });

    it("should print to the console that the game was created along with the board and the next persons turn", () => {
      const playerX = new Player("X");
      const playerO = new Player("O");
      const game = new TicTacToeGame(playerX, playerO);
      const consoleSpy = jest.spyOn(game, "printIntro");
      const printIntro = game.printIntro();
      expect(consoleSpy).toHaveBeenCalled();
    });
  });

  describe("The rules under which the game is won should be established", () => {
    it("should mark player X as winner if they have a vertical line", () => {
      const playerX = new Player("X");
      const playerO = new Player("O");
      const game = new TicTacToeGame(playerX, playerO);
      game.board = [
        ["X", "", ""],
        ["X", "O", ""],
        ["X", "", "X"],
      ];
      game.checkForWinnerVertical(game, game.playerX);
      expect(game.winner).toEqual("X");
    });

    it("should mark player O as winner if they have a horizontal line", () => {
      const playerX = new Player("X");
      const playerO = new Player("O");
      const game = new TicTacToeGame(playerX, playerO);
      game.board = [
        ["X", "", "X"],
        ["O", "O", "O"],
        ["X", "", ""],
      ];
      game.checkForWinnerHorizontal(game, game.playerO);
      expect(game.winner).toEqual("O");
    });

    it("should mark player X as winner if they have a diagonal line", () => {
      const playerX = new Player("X");
      const playerO = new Player("O");
      const game = new TicTacToeGame(playerX, playerO);
      game.board = [
        ["X", "", ""],
        ["O", "X", ""],
        ["O", "", "X"],
      ];
      game.checkforWinnerDiagonal(game, game.playerX);
      expect(game.winner).toEqual("X");
    });

    it("should check for a draw if the board is full and there is no winner", () => {
      const playerX = new Player("X");
      const playerO = new Player("O");
      const game = new TicTacToeGame(playerX, playerO);
      game.board = [
        ["X", "O", "X"],
        ["O", "O", "X"],
        ["X", "X", "O"],
      ];
      expect(game.checkForDraw(game, game.playerX)).toEqual(true);
    });
  });

  describe("Playing the game", () => {

    it("Player X should take a turn by inserting a piece", () => {
      const playerX = new Player("X");
      const playerO = new Player("O");
      const game = new TicTacToeGame(playerX, playerO);
      game.start(game);
      game.insertIntoBoard("X", 0, 0, game.board);
      let row1 = game.board[0].includes("X");
      let row2 = game.board[1].includes("X");
      let row3 = game.board[2].includes("X");
      let contains = row1 || row2 || row3;
      expect(contains).toEqual(true);
    });

    it("The piece shouldn't be inserted if one is already there", () => {
        const playerX = new Player("X");
        const playerO = new Player("O");
        const game = new TicTacToeGame(playerX, playerO);
        game.start(game);
        game.insertIntoBoard("X", 0, 0, game.board);
        game.insertIntoBoard("O", 0, 0, game.board);

        expect(game.board[0][0]).toEqual("X");
      });

      it("After player X takes a turn, player O takes a turn (both using random numbers)", () => {
        const playerX = new Player("X");
        const playerO = new Player("O");
        const game = new TicTacToeGame(playerX, playerO);
        game.start(game);
        let row1 = game.board[0].includes("X");
        let row2 = game.board[1].includes("X");
        let row3 = game.board[2].includes("X");
        let containsX = row1 || row2 || row3;

        row1 = game.board[0].includes("O");
        row2 = game.board[1].includes("O");
        row3 = game.board[2].includes("O");
        let containsY = row1 || row2 || row3;
        let XandYPresent = containsX && containsY;

        expect(XandYPresent).toEqual(true);
      });

      it('the game should continue to be played until a winner or draw is established', () => {
        const playerX = new Player("X");
        const playerO = new Player("O");
        const game = new TicTacToeGame(playerX, playerO);
        game.start(game);
        console.log("winner", game.winner)
        expect(game.gameRunning).toEqual(false);
      })

      it('the board and winner should be printed when the game ends', () => {
        const playerX = new Player("X");
        const playerO = new Player("O");
        const game = new TicTacToeGame(playerX, playerO);
        game.start(game);
        expect(game.printFinalBoard()).toHaveBeenCalled();
      })

  });
});
