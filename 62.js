// A robot is located at the top-left corner of a m x n grid (marked 'Start' in
// the diagram below).

// The robot can only move either down or right at any point in time. The robot
// is trying to reach the bottom-right corner of the grid (marked 'Finish' in
// the diagram below).

// How many possible unique paths are there?


// Above is a 3 x 7 grid. How many possible unique paths are there?

// Note: m and n will be at most 100.

// easy recursion but big
// const uniquePaths = function(m, n) {
//   if (m === 1) return 1
//   if (n === 1) return 1
//   return uniquePaths(m - 1, n) + uniquePaths(m, n - 1)
// }


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
  const dp = []
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(i === 0 ? 1 : 0)
    dp[i][0] = 1
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
}

console.log(uniquePaths(100, 100))
