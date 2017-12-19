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
  const dp = Array(n).fill(0)
  dp[0] = 1
  for (let i = 0; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] += dp[j - 1]
    }
  }
  return dp[n - 1]
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

// 对动态规划表进行优化。
// 因为每次都是上一项加左一项。
// 因此只需要用一个数组即可，
// 每一项在改变之前都代表着上一项的值，只需在原来基础上加左一项即可。
// 因为每一行的每一项只改变一次，且仅使用两次。

// Submission Result: Accepted
