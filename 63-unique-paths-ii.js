// 63. Unique Paths II
// Medium 31% locked:false

// Follow up for "Unique Paths":

// Now consider if some obstacles are added to the grids. How many unique paths
// would there be?

// An obstacle and empty space is marked as 1 and 0 respectively in the grid.

// For example,

// There is one obstacle in the middle of a 3x3 grid as illustrated below.

// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]

// The total number of unique paths is 2.

// Note: m and n will be at most 100.

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid === null || obstacleGrid.length === 0) return 0
  const m = obstacleGrid.length, n = obstacleGrid[0].length
  if (n === 0 || obstacleGrid[m - 1][n - 1] === 1) return 0

  for (let i = 0; i < n && obstacleGrid[0][i] !== 1; i++) obstacleGrid[0][i] = -1
  for (let i = 0; i < m && obstacleGrid[i][0] !== 1; i++) obstacleGrid[i][0] = -1

  console.log(obstacleGrid)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] !== 1) {
        const a = obstacleGrid[i - 1][j],
              b = obstacleGrid[i][j - 1]
        obstacleGrid[i][j] = (a === 1 ? 0 : a) + (b === 1 ? 0 : b)
      }
    }
  }

  return Math.abs(obstacleGrid[m - 1][n - 1])
}

const grid = [
  [1],
  [0]
]
console.log(uniquePathsWithObstacles(grid))
