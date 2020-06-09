// 1275. Find Winner on a Tic Tac Toe Game
// Easy   53%


// Tic-tac-toe is played by two players A and B on a 3 x 3 grid.
// Here are the rules of Tic-Tac-Toe:
//     Players take turns placing characters into empty squares (" ").
//     The first player A always places "X" characters, while the second player B
// always places "O" characters.
//     "X" and "O" characters are always placed into empty squares, never on
// filled ones.
//     The game ends when there are 3 of the same (non-empty) character filling
// any row, column, or diagonal.
//     The game also ends if all squares are non-empty.
//     No more moves can be played if the game is over.
// Given an array moves where each element is another array of size 2
// corresponding to the row and column of the grid where they mark their
// respective character in the order in which A and B play.
// Return the winner of the game if it exists (A or B), in case the game ends in
// a draw return "Draw", if there are still movements to play return "Pending".
// You can assume that moves is valid (It follows the rules of Tic-Tac-Toe), the
// grid is initially empty and A will play first.

// Example 1:
// Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
// Output: "A"
// Explanation: "A" wins, he always plays first.
// "X  "    "X  "    "X  "    "X  "    "X  "
// "   " -> "   " -> " X " -> " X " -> " X "
// "   "    "O  "    "O  "    "OO "    "OOX"
// Example 2:
// Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
// Output: "B"
// Explanation: "B" wins.
// "X  "    "X  "    "XX "    "XXO"    "XXO"    "XXO"
// "   " -> " O " -> " O " -> " O " -> "XO " -> "XO "
// "   "    "   "    "   "    "   "    "   "    "O  "
// Example 3:
// Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]
// Output: "Draw"
// Explanation: The game ends in a draw since there are no moves to make.
// "XXO"
// "OOX"
// "XOX"
// Example 4:
// Input: moves = [[0,0],[1,1]]
// Output: "Pending"
// Explanation: The game has not finished yet.
// "X  "
// " O "
// "   "

// Constraints:
//     1 <= moves.length <= 9
//     moves[i].length == 2
//     0 <= moves[i][j] <= 2
//     There are no repeated elements on moves.
//     moves follow the rules of tic tac toe.


/**
 * @param {number[][]} moves
 * @return {string}
 */
const tictactoe = function(moves) {
  const gird = []
  for (let i = 0; i < 3; i++) gird[i] = [0,0,0]
  let i = 0
  for (; i < moves.length; i++) {
    let r = moves[i][0], c = moves[i][1]
    gird[r][c] = i % 2 ? -1 : 1
    if (
      Math.abs(gird[r][0] + gird[r][1] + gird[r][2]) === 3 ||
      Math.abs(gird[0][c] + gird[1][c] + gird[2][c]) === 3 ||
      (r === c && Math.abs(gird[0][0] + gird[1][1] + gird[2][2]) === 3) ||
      (r + c === 2 && Math.abs(gird[0][2] + gird[1][1] + gird[2][0]) === 3)
    ) return i % 2 ? 'B' : 'A'
  }
  return i < 9 ? 'Pending' : 'Draw'
}

;[
  [[0,0],[2,0],[1,1],[2,1],[2,2]],
  [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]],
  [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]],
  [[0,0],[1,1]],
].forEach((moves) => {
  console.log(tictactoe(moves))
})

// Solution:
// 创建一个 3*3 矩阵，全部填充 0，
// A 下的位置填入 1， B 下的填入 -1
// 每次下完，都检查一次棋盘
// 检查下的棋子所在位置的行列，若在对角线上还需要检查对角线
// 当 行、列、对角线 上的和的绝对值等于 3 （`1+1+1` 或 `-1-1-1`）时，则该次下棋则胜。

//  1  0  0
//  0  1  0
// -1 -1  1

// Submission Result: Accepted