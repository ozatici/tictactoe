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

        it("Player X should be marked as the next player to take a turn", () => {
            const playerX = new Player("X");
            const playerO = new Player("O");
            const game = new TicTacToeGame(playerX, playerO);
            expect(game.nextTurn).toEqual(playerX);
        });

        it('should print to the console that the game was created along with the board and the next persons turn', () => {
            const playerX = new Player("X");
            const playerO = new Player("O");
            const game = new TicTacToeGame(playerX, playerO);
            const consoleSpy = jest.spyOn(game, 'printIntro');
            const printIntro = game.printIntro();
            expect(consoleSpy).toHaveBeenCalled();
        })
    })

    describe('The rules under which the game is won should be established', () => {
        it('should mark player X as winner if they have a vertical line', () => {
            const playerX = new Player("X");
            const playerO = new Player("O");
            const game = new TicTacToeGame(playerX, playerO);
            game.board = [
                ["X", "", ""],
                ["X", "O", ""],
                ["X", "", "X"],
            ]
            game.checkForWinnerVertical(game, game.playerX);
            expect(game.winner).toEqual("X");

        })

        it('should mark player O as winner if they have a horizontal line', () => {
            const playerX = new Player("X");
            const playerO = new Player("O");
            const game = new TicTacToeGame(playerX, playerO);
            game.board = [
                ["X", "", "X"],
                ["O", "O", "O"],
                ["X", "", ""],
            ]
            game.checkForWinnerHorizontal(game, game.playerO);
            expect(game.winner).toEqual("O");
        })

        it('should mark player X as winner if they have a diagonal line', () => {
            const playerX = new Player("X");
            const playerO = new Player("O");
            const game = new TicTacToeGame(playerX, playerO);
            game.board = [
                ["X", "", ""],
                ["O", "X", ""],
                ["O", "", "X"],
            ]
            game.checkforWinnerDiagonal(game, game.playerX);
            expect(game.winner).toEqual("X");
        })
    })
})