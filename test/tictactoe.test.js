describe('A tic tac toe game should be played', () => {
    describe('The game should be set up', () => {
        it("should create a game of tic tac toe", () => {
            const game = new TicTacToeGame();
            expect(game).toBeTruthy();
        });
    })
})