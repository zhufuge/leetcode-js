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
  const m = board.length, n = board[0].length, w = word.length
  if (w === 0) return true

  function match(i, j, c) {
    let isExist = false
    if (0 <= i && i < m && 0 <= j && j < n) {
      if (board[i][j] === word[c]) {
        const tmp = word[c]
        board[i][j] = true
        if (next(i, j, c + 1)) isExist = true
        board[i][j] = tmp
      }
    }
    return isExist
  }

  const next = (i, j, c) => c >= w ||
        match(i - 1, j, c) ||
        match(i, j + 1, c) ||
        match(i + 1, j, c) ||
        match(i, j - 1, c)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (match(i, j, 0)) return true
    }
  }

  return false
}


const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

;[
  [board, 'ABCCED'],            // true
  [board, 'SEE'],               // true
  [board, 'ABCB'],              // false
].forEach(args => {
  console.log(exist(...args))
})


// Solution:
// 使用 DFS 遍历矩阵。
// 每匹配一个字符，就在原矩阵中做标记，并在回溯时还原。

// Submission Result: Accepted
