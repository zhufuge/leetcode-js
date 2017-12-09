// 37. Sudoku Solver
// Hard   30%

// Write a program to solve a Sudoku puzzle by filling the empty cells.
// Empty cells are indicated by the character '.'.
// You may assume that there will be only one unique solution.

// A sudoku puzzle...

// ...and its solution numbers marked in red.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = function(board) {
  const solve = function(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === '.') {
          for (let c = 1; c <= 9; c++) {
            if (isValid(board, i, j, c + '')) {
              board[i][j] = c + ''
              if(solve(board)) return true
              else board[i][j] = '.'
            }
          }
          return false
        }
      }
    }
    return true
  }

  const isValid = function(board, row, col, x) {
    const trunc = Math.trunc,
          p = trunc(row / 3) * 3,
          q = trunc(col / 3) * 3
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === x ||
          board[i][col] === x ||
          board[p + trunc(i / 3)][i % 3 + q] === x)
        return false
    }

    return true
  }

  for (let i = 0; i < 9; i++) board[i] = board[i].split('')
  solve(board)
  for (let i = 0; i < 9; i++) board[i] = board[i].join('')
}

;[
  [
    "53..7....",
    "6..195...",
    ".98....6.",
    "8...6...3",
    "4..8.3..1",
    "7...2...6",
    ".6....28.",
    "...419..5",
    "....8..79"
  ],
].forEach(board => {
  console.log(board)
  solveSudoku(board)
  console.log(board)
})

// Solution:
// 深度遍历表
// 每次碰到点（空格位），就测试该位可填的最小的数。
// 测试时，只需测试某数在该位是否合法，而不需要测试整个表。
// 当遇到某个位置没有任何数可填时，则回溯到上一个数，上一个数进行改变再测试。
// 合适就继续，不行就回溯，直到将整个表填完。

// Submission Result: Accepted
