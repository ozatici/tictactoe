DIRECTIONS:

The exercise involves developing a Tic-Tac-Toe game strictly adhering to the TDD rules.

uat provided:
1 – Game Board Creation phase:
Game Board Creation... ||
-+-+- || -+-+- ||
Board Created.
The game will start with player X
2 – Player X won with a vertical line
3 – Player O won with a horizontal line
4 – Player X won with a diagonal line
5 – Game ends with a draw

--------------

unit tests:

---> SET UP:
1. ✅ A game of tic tac toe should be created.
2. ✅ The game should have a board with 3 rows.
3. ✅ The game should have a board with 3 columns.
4. ✅ Should be able to create a player
5. ✅ The player must have an id
6. ✅ The game should have 2 players - playerX and playerO.
7. ✅ Player X should initially be marked as the next player to take a turn.
8. ✅ We should get a message about this on the console, with the board printed and the text in the obve uat printed.

---> ESTABLISHING THE CONDITIONS UNDER WHICH THE GAME IS WON:
1. ✅ Player X wins with a vertical line
2. ✅ Player O wins with a horizontal line
3. ✅ Player X wins with a diagonal line
4. ✅ should mark draw as the winner if the board is full and there is no winner

---> GAME PLAY
1. ✅ The game should be started ---- later removed because of the code flow/refactoring
2. ✅ Player X should take a turn by inserting a piece
3. ✅ The piece shouldn't be inserted if a piece is already there.
4. ✅ After player X takes a turn, player O takes a turn (both using random numbers)
5. ✅ The game should continue to be played until a winner or draw is established. 
6. ✅ The board and winner should be printed win the game ends.

---> TODO wishlist with more time
- refactor of logic to determine winner or draw and stop the game
- should the game be starting with X every time or could that be made random as well?
- somehow refactor algorithm to determine a diagonal winner or test it more thoroughly if that is not possible. 
