// 64. Minimum Path Sum
// Medium 38% locked:false

// Given a m x n grid filled with non-negative numbers, find a path from top
// left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function(grid) {
  const m = grid.length, n = grid[0].length
  if (m === 0 || n === 0) return -1

  for (let i = 1; i < n; i++) grid[0][i] += grid[0][i - 1]
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (j === 0) grid[i][j] += grid[i - 1][j]
      else grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
    }
  }

  return grid[m - 1][n - 1]
}

const grid = [
  [1, 3],
  [2, 1]
]
console.log(minPathSum(grid))
