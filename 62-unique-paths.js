// 62. Unique Paths
// Medium   41%

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
  const dp = Array(m)
  for (let i = 0; i < m; i++) {
    dp[i] = Array(n)
    dp[i][0] = 1
    for (let j = 1; j < n; j++) {
      if (i === 0) dp[i][j] = 1
      else dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
}

;[
  [3, 7],
  [3, 6],
  [100, 100],
].forEach(([m, n]) => {
  console.log(uniquePaths(m, n))
})

// Solution:
// 使用动态规划。
// 用一个表来表示一个mxn的方格，
// 表的每个项表示从开始位置到当前位置的全部不同路径。
// 每个项都是上一个位置与左一个位置相加所得。
// 最后结果为终点值，即最后一个项的值。

// Submission Result: Accepted
