class TicTacToe {
    constructor (playerX, playerO) {
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];

        this.playerX = playerX;
        this.playerO = playerO;
    }

    getPlayers() {
        const players = [];
        players.push(this.playerX, this.playerO);
        return players;
    }
}

module.exports = TicTacToe;