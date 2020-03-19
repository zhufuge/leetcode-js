// 999. Available Captures for Rook
// Easy   66%


// On an 8 x 8 chessboard, there is one white rook.  There also may be empty
// squares, white bishops, and black pawns.  These are given as characters 'R',
// '.', 'B', and 'p' respectively. Uppercase characters represent white pieces,
// and lowercase characters represent black pieces.
// The rook moves as in the rules of Chess: it chooses one of four cardinal
// directions (north, east, west, and south), then moves in that direction until
// it chooses to stop, reaches the edge of the board, or captures an opposite
// colored pawn by moving to the same square it occupies.  Also, rooks cannot
// move into the same square as other friendly bishops.
// Return the number of pawns the rook can capture in one move.

// Example 1:
// Input:
// [
//  [".",".",".",".",".",".",".","."],
//  [".",".",".","p",".",".",".","."],
//  [".",".",".","R",".",".",".","p"],
//  [".",".",".",".",".",".",".","."],
//  [".",".",".",".",".",".",".","."],
//  [".",".",".","p",".",".",".","."],
//  [".",".",".",".",".",".",".","."],
//  [".",".",".",".",".",".",".","."]
// ]
// Output: 3
// Explanation:
// In this example the rook is able to capture all the pawns.
// Example 2:
// Input:
// [
//  [".",".",".",".",".",".",".","."],
//  [".","p","p","p","p","p",".","."],
//  [".","p","p","B","p","p",".","."],
//  [".","p","B","R","B","p",".","."],
//  [".","p","p","B","p","p",".","."],
//  [".","p","p","p","p","p",".","."],
//  [".",".",".",".",".",".",".","."],
//  [".",".",".",".",".",".",".","."],
// ]
// Output: 0
// Explanation:
// Bishops are blocking the rook to capture any pawn.
// Example 3:
// Input:
// [
//  [".",".",".",".",".",".",".","."],
//  [".",".",".","p",".",".",".","."],
//  [".",".",".","p",".",".",".","."],
//  ["p","p",".","R",".","p","B","."],
//  [".",".",".",".",".",".",".","."],
//  [".",".",".","B",".",".",".","."],
//  [".",".",".","p",".",".",".","."],
//  [".",".",".",".",".",".",".","."]
// ]
// Output: 3
// Explanation:
// The rook can capture the pawns at positions b5, d6 and f5.

// Note:
//     board.length == board[i].length == 8
//     board[i][j] is either 'R', '.', 'B', or 'p'
//     There is exactly one cell with board[i][j] == 'R'

/**
 * @param {character[][]} board
 * @return {number}
 */
const numRookCaptures = function(board) {
  function cap(x, y, dx, dy) {
    while (x >= 0 && y >=0 && x < 8 && y < 8 && board[x][y] !== 'B') {
      if (board[x][y] === 'p') return 1
      x += dx
      y += dy
    }
    return 0
  }
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 'R') {
        return (
          cap(i, j, -1, 0) +
          cap(i, j, 0, 1) +
          cap(i, j, 1, 0) +
          cap(i, j, 0, -1)
        )
      }
    }
  }
  return 0
}

;[
  [
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['.', '.', '.', 'R', '.', '.', '.', 'p'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
  ], // 3
  [
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
    ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
    ['.', 'p', 'B', 'R', 'B', 'p', '.', '.'],
    ['.', 'p', 'p', 'B', 'p', 'p', '.', '.'],
    ['.', 'p', 'p', 'p', 'p', 'p', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
  ], // 0
  [
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['p', 'p', '.', 'R', '.', 'p', 'B', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'B', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
  ], // 3
].forEach((board) => {
  console.log(numRookCaptures(board))
})

// Solution:
// 找到 R 的位置
// 寻找 R 四周方向的 p

// 利用 dx, dy 偏移量来创建查找函数

// Submission Result: Accepted
