class TicTacToe {
  constructor(playerX, playerO) {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];

    this.playerX = playerX;
    this.playerO = playerO;

    this.nextTurn = this.playerX;
    this.winner = "";
    this.gameRunning = false;
  }

  start(game) {
    game.gameRunning = true;
  }

  printIntro() {
    console.log("Game Board Creation...");

    let board = "";
    for (var i = 0; i < this.board.length; i++) {
      for (var j = 0; j < this.board.length; j++) {
        board += this.board[i][j] + "|";
      }
      board += "\n";
      board += "-+-+-";
      board += "\n";
    }
    console.log(board);
    console.log("Board Created.");
    console.log("The game will start with player X");
  }

  getPlayers() {
    const players = [];
    players.push(this.playerX, this.playerO);
    return players;
  }

  isStarted() {
    return this.gameRunning;
  }

  insertIntoBoard(id, locToInsert, locToInsert2, board) {
    board[locToInsert][locToInsert2] = id;
  }

  checkForWinnerVertical(game, player) {
    for (var i = 0; i < game.board[0].length; i++) {
      if (
        game.board[0][i] === player.id &&
        game.board[1][i] === player.id &&
        game.board[2][i] === player.id
      ) {
        game.winner = player.id;
        return true;
      }
    }
  }

  checkForWinnerHorizontal(game, player) {
    for (var i = 0; i < game.board[0].length; i++) {
      if (
        game.board[i][0] === player.id &&
        game.board[i][1] === player.id &&
        game.board[i][2] === player.id
      ) {
        game.winner = player.id;
        return true;
      }
    }
  }

  checkforWinnerDiagonal(game, player) {
    if (
      game.board[0][0] === player.id &&
      game.board[1][1] === player.id &&
      game.board[2][2] === player.id
    ) {
      game.winner = player.id;
      return true;
    }
    if (
      game.board[2][0] === player.id &&
      game.board[1][1] === player.id &&
      game.board[0][2] === player.id
    ) {
      game.winner = player.id;
      return true;
    }
    if (
      game.board[0][0] === player.id &&
      game.board[1][1] === player.id &&
      game.board[2][2] === player.id
    ) {
      game.winner = player.id;
      return true;
    }
    if (
      game.board[2][0] === player.id &&
      game.board[1][1] === player.id &&
      game.board[0][2] === player.id
    ) {
      game.winner = player.id;
      return true;
    }
  }

  checkForDraw(game) {
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (game.board[i][j] === "") {
          return false;
        }
      }
    }
    if (
      (this.checkForWinnerVertical(game, game.playerO) ||
        this.checkForWinnerHorizontal(game, game.playerO) ||
        this.checkforWinnerDiagonal(game, game.playerO),
      this.checkforWinnerDiagonal(game, game.playerX) ||
        this.checkForWinnerHorizontal(game, game.playerX),
      this.checkForWinnerVertical(game, game.playerX))
    ) {
      return false;
    }
    return true;
  }
}

module.exports = TicTacToe;
