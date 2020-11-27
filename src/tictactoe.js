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

      checkForWinnerVertical(game) {
        if (
          game.board[0][0] === 'X' &&
          game.board[1][0] === 'X' &&
          game.board[2][0] === 'X'
        ) {
          game.winner = 'X';
          console.log("hiii", game.board )
    
          game.gameRunning = false;
          return true;
    
        }
        if (
          game.board[0][1] === 'X' &&
          game.board[1][1] === 'X' &&
          game.board[2][1] === 'X'
        ) {
          game.winner = 'X';
          game.gameRunning = false;
          return true;
    
        }
        if (
          game.board[0][2] === 'X' &&
          game.board[1][2] === 'X' &&
          game.board[2][2] === 'X'
        ) {
          game.winner = 'X';
          game.gameRunning = false;
          return true;
    
        }
        if (
          game.board[0][0] === 'O' &&
          game.board[1][0] === 'O' &&
          game.board[2][0] === 'O'
        ) {
          game.winner = 'O';
          game.gameRunning = false;
          return true;
    
        }
        if (
          game.board[0][1] === 'O' &&
          game.board[1][1] === 'O' &&
          game.board[2][1] === 'O'
        ) {
          game.winner = 'O';
          game.gameRunning = false;
          return true;
    
        }
        if (
          game.board[0][2] === 'O' &&
          game.board[1][2] === 'O' &&
          game.board[2][2] === 'O'
        ) {
          game.winner = 'O';
          game.gameRunning = false;
          return true;
    
        }
    
        return false;
      }
    
      checkForWinnerDiagonal(game) {
        if (
          game.board[0][0] === 'X' &&
          game.board[1][1] === 'X' &&
          game.board[2][2] === 'X'
        ) {
          game.winner = 'X';
          game.gameRunning = false;
          return true;
    
        }
        if (
          game.board[2][0] === 'X' &&
          game.board[1][1] === 'X' &&
          game.board[0][2] === 'X'
        ) {
          game.winner = 'X';
          game.gameRunning = false;
          return true;
    
        }
        if (
            game.board[0][0] === 'O' &&
            game.board[1][1] === 'O' &&
            game.board[2][2] === 'O'
          ) {
            game.winner = 'O';
            game.gameRunning = false;
            return true;
    
          }
          if (
            game.board[2][0] === 'O' &&
            game.board[1][1] === 'O' &&
            game.board[0][2] === 'O'
          ) {
            game.winner = 'O';
            game.gameRunning = false;
            return true;
    
          }
    
          return false;
      }


}

module.exports = TicTacToe;