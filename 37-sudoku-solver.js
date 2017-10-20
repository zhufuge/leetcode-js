// 37. Sudoku Solver
// Hard 30% locked:false

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
    for (let j = 0; j < 9; j++) {
      if (board[row][j] === x ||
          board[j][col] === x ||
          board[p + trunc(j / 3)][j % 3 + q] === x)
        return false
    }

    return true
  }

  for (let i = 0; i < 9; i++) board[i] = board[i].split('')
  solve(board)
  for (let i = 0; i < 9; i++) board[i] = board[i].join('')
}



const b = [
  "53..7....",
  "6..195...",
  ".98....6.",
  "8...6...3",
  "4..8.3..1",
  "7...2...6",
  ".6....28.",
  "...419..5",
  "....8..79"
]
console.log(b)
solveSudoku(b)
console.log(b)

