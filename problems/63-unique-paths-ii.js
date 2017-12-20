// 63. Unique Paths II
// Medium   31%

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
  const n = obstacleGrid[0].length
  const dp = Array(n).fill(0)
  dp[0] = 1
  for (let row of obstacleGrid) {
    for (let i = 0; i < n; i++) {
      if (row[i] === 1) dp[i] = 0
      else if (i > 0) dp[i] += dp[i - 1]
    }
  }

  return dp[n - 1]
}

;[
  [
    [1],
    [0]
  ],
  [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ],
].forEach(obstacleGrid => {
  console.log(uniquePathsWithObstacles(obstacleGrid))
})

// Solution:
// 在 62-unique-paths.js 的基础上加上了一些阻碍。
// 只需要将阻碍的位置设为0即可，其他无需改变。
// 同样是使用一个数组的动态规划。

// Submission Result: Accepted
