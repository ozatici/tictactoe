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
}

module.exports = TicTacToe;