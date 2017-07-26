// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Follow up:
// Could you do this in-place?

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix) {
  const n = matrix.length
  if (n === 0) return

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
    for (let j = 0, m = Math.trunc(n / 2); j < m; j++) {
      [matrix[i][j], matrix[i][n - j - 1]] = [matrix[i][n - j - 1], matrix[i][j]]
    }
  }
}

const ms = [
  [
    [1, 2],
    [3, 4]
  ],
  [
    [1]
  ],
]

for (let m of ms) {
  console.log(m)
  rotate(m)
  console.log(m)
}
