const TicTacToeGame = require("../src/tictactoe.js");
const Player = require("../src/player.js");

describe('A tic tac toe game should be played', () => {
    describe('The game should be set up', () => {
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
            const playerX = new Player('X');
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
    })
})