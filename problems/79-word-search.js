// 79. Word Search
// Medium 27% locked:false

// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where
// "adjacent" cells are those horizontally or vertically neighboring. The same
// letter cell may not be used more than once.

// For example,
// Given board =

// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// word = "ABCCED", -> returns true,
// word = "SEE", -> returns true,
// word = "ABCB", -> returns false.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function(board, word) {
  if (board.length === 0 || board[0].length === 0) return false
  if (word.length === 0) return true
  const m = board.length, n = board[0].length, w = word.length

  const matchOne = (i, j, used, c) => {
    if (0 <= i && i < m && 0 <= j && j < n) {
      if (!used[i][j] && board[i][j] === word[c]) {
        used[i][j] = true
        if (match(i, j, used, c + 1)) return true
        used[i][j] = false
      }
    }
    return false
  }
  const match = (i, j, used, c) => {
    return c === w ||
      matchOne(i - 1, j, used, c) ||
      matchOne(i, j + 1, used, c) ||
      matchOne(i + 1, j, used, c) ||
      matchOne(i, j - 1, used, c)
  }

  const used = new Array(m).fill(0).map(row => new Array(n).fill(false))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matchOne(i, j, used, 0)) return true
    }
  }

  return false
}


const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

console.log(exist(board, 'ABCCED'))
console.log(exist(board, 'SEE'))
console.log(exist(board, 'ABCB'));
