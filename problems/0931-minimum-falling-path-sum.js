// 931. Minimum Falling Path Sum
// Medium   62%


// Given a square array of integers A, we want the minimum sum of a falling path
// through A.
// A falling path starts at any element in the first row, and chooses one element
// from each row.  The next row's choice must be in a column that is different
// from the previous row's column by at most one.

// Example 1:
// Input: [[1,2,3],[4,5,6],[7,8,9]]
// Output: 12
// Explanation:
// The possible falling paths are:
//     [1,4,7], [1,4,8], [1,5,7], [1,5,8], [1,5,9]
//     [2,4,7], [2,4,8], [2,5,7], [2,5,8], [2,5,9], [2,6,8], [2,6,9]
//     [3,5,7], [3,5,8], [3,5,9], [3,6,8], [3,6,9]
// The falling path with the smallest sum is [1,4,7], so the answer is 12.

// Constraints:
//     1 <= A.length == A[0].length <= 100
//     -100 <= A[i][j] <= 100


/**
 * @param {number[][]} A
 * @return {number}
 */
const minFallingPathSum = function(A) {
  const n = A.length
  let sum = Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    const temp = [...A[i]]
    for (let j = 0; j < n; j++) {
      let min = sum[j]
      if (j > 0) min = Math.min(min, sum[j - 1])
      if (j < n - 1) min = Math.min(min, sum[j + 1])
      temp[j] += min
    }
    sum = temp
  }

  return Math.min(...sum)
}

const bad = function(A) {
  const n = A.length

  function dfs(i, j) {
    if (i === n - 1) return A[i][j]
    let min = dfs(i + 1, j)
    if (j > 0) min = Math.min(min, dfs(i + 1, j - 1))
    if (j < n - 1) min = Math.min(min, dfs(i + 1, j + 1))
    return A[i][j] + min
  }

  let res = 10000
  for (let i = 0; i < n; i++) {
    res = Math.min(res, dfs(0, i))
  }
  return res
}

;[
  [[1,2,3],[4,5,6],[7,8,9]], // 12
  [[-80,-13,22],[83,94,-5],[73,-48,61]], // -66
].forEach((A) => {
  console.log(minFallingPathSum(A))
})

// Solution:
// 1. 使用深度遍历
//  但是时间复杂度太大，像递归斐波那契数列一样，有无数的重复计算

// 2. 既然同斐波那契数列，则也使用同样的方法解决，即保存前一个状态
// 移动到下一行时，每个位置都可以选择下一行的相邻的2-3个位置，
// 利用反向思维，下一行的每个位置都可以选择上一行的2-3个位置，
// 所以下一行，选择上一行相邻的最小数即可。
// [1  2  3]
//  | \  \
// [4  5  6] -> [5  6  8]
//               | \  \
//              [7  8  9] -> [12 13 15]

// Submission Result: Accepted