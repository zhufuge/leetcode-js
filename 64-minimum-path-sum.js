// 64. Minimum Path Sum
// Medium   38%

// Given a m x n grid filled with non-negative numbers, find a path from top
// left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example 1:

// [[1,3,1],
//  [1,5,1],
//  [4,2,1]]

// Given the above grid map, return 7. Because the path 1→3→1→1→1 minimizes
// the sum.

/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function(grid) {
  const m = grid.length, n = grid[0].length
  const dp = Array(n)
  dp[0] = grid[0][0]
  for (let i = 1; i < n; i++) dp[i] = dp[i - 1] + grid[0][i]
  for (let i = 1; i < m; i++) {
    dp[0] +=  grid[i][0]
    for (let j = 1; j < n; j++) {
      dp[j] = grid[i][j] + Math.min(dp[j - 1], dp[j])
    }
  }
  return dp[n - 1]
}

;[
  [
    [1, 3],
    [2, 1]
  ],
  [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ],
].forEach(grid => {
  console.log(minPathSum(grid))
})

// Solution:
// 同 62-unique-paths.js 一样使用动态规划
// 只是在其基础上多了路径权数。

// Submission Result: Accepted
