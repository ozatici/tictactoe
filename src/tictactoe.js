class TicTacToe {
    constructor (playerX, playerO) {
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];

        this.playerX = playerX;
        this.playerO = playerO;

        this.nextTurn = this.playerX;
        this.winner = '';
        
    }

    printIntro() {
        console.log("Game Board Creation...")

        let board = ''
        for (var i = 0; i < this.board.length; i++) {
            for(var j = 0; j < this.board.length; j++) {
                board += this.board[i][j] + "|";
            }
            board += '\n';
            board += "-+-+-";
            board += '\n';
        }
        console.log(board);
        console.log('Board Created.');
        console.log('The game will start with player X');
    }

    getPlayers() {
        const players = [];
        players.push(this.playerX, this.playerO);
        return players;
    }

      checkForWinnerVertical(game, player) {
        for (var i = 0; i < game.board[0].length; i++) {
            if (game.board[0][i] === player.id &&
                game.board[1][i] === player.id && 
                game.board[2][i] === player.id) {
                    game.winner = player.id;
            }
        }
      }

      checkForWinnerHorizontal(game, player) {
        for (var i = 0; i < game.board[0].length; i++) {
            if (game.board[i][0] === player.id &&
                game.board[i][1] === player.id &&
                game.board[i][2] === player.id) {
                    game.winner = player.id;
                }
        }
      }
     

}

module.exports = TicTacToe;