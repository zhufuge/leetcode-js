// 73. Set Matrix Zeroes
// Medium 36% locked:false

// Given a m x n matrix, if an element is 0, set its entire row and column to 0.
// Do it in place.

// click to show follow up.
//   Follow up:

// Did you use extra space?
// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function(matrix) {
  if (matrix === void 0 || matrix.length === 0) return
  const m = matrix.length, n = matrix[0].length

  let col0 = 1
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) col0 = 0
    for (let j = 1; j < n; j++)
      if (matrix[i][j] === 0) matrix[i][0] = matrix[0][j] = 0
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 1; j--)
      if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0
    if (col0 === 0) matrix[i][0] = 0
  }
}

const matrix = [
  [0, 1, 0],
  [1, 1, 1],
  [1, 1, 1]
]

console.log(matrix)
setZeroes(matrix)
console.log(matrix)

const Omplusn = function(matrix) {
  if (matrix === void 0 || matrix.length === 0) return
  const m = matrix.length, n = matrix[0].length
  const rows = new Array(m).fill(false), cols = new Array(n).fill(false)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true
        cols[j] = true
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rows[i] || cols[j]) matrix[i][j] = 0
    }
  }
}

