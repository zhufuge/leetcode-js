// 36. Valid Sudoku
// Medium   36%

// Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

// The Sudoku board could be partially filled, where empty cells are filled with
// the character '.'.


// A partially filled sudoku which is valid.

// Note: A valid Sudoku board (partially filled) is not necessarily solvable.
// Only the filled cells need to be validated.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
  const n = 9, trunc = Math.trunc
  for (let i = 0; i < n; i++) {
    const checks = [{}, {}, {}]
    for (let j = 0; j < n; j++) {
      const c = [
        board[i][j],
        board[j][i],
        board[trunc(i / 3) * 3 + trunc(j / 3)][j % 3 + i % 3 * 3]
      ]
      for (let k = 0; k < 3; k++) {
        if (c[k] !== '.') {
          if (checks[k][c[k]]) return false
          checks[k][c[k]] = true
        }
      }
    }
  }

  return true
}

;[
  [
    ".87654321",
    "2........",
    "3........",
    "4........",
    "5........",
    "6........",
    "7........",
    "8........",
    "9........"
  ],                            // true
].forEach(board => {
  console.log(isValidSudoku(board))
})

// Solution:
// 分别检查行，列，宫是否合法。
// 检查一个组是否有重复，使用哈希表来判断。

// Submission Result: Accepted
