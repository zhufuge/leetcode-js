// 120. Triangle
// Medium   34%

// Given a triangle, find the minimum path sum from top to bottom. Each step you
// may move to adjacent numbers on the row below.

// For example, given the following triangle

// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]

// The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

// Note: Bonus point if you are able to do this using only O(n) extra space,
// where n is the total number of rows in the triangle.

/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function(triangle) {
  const n = triangle.length
  if (n === 0) return 0

  const sum = Array(n)
  sum[0] = triangle[0][0]
  for (let i = 1; i < n; i++) {
    sum[i] = triangle[i][i] + sum[i - 1]
    for (let j = i - 1; j > 0; j--) {
      sum[j] = triangle[i][j] + Math.min(sum[j], sum[j - 1])
    }
    sum[0] += triangle[i][0]
  }

  return Math.min(...sum)
}

;[
  [
    [2],
    [3,4],
    [6,5,7],
    [4,1,8,3]
  ]
].forEach(triangle => {
  console.log(minimumTotal(triangle))
})

// Solution:
// 使用一个数组记录从顶层到某层的中每个数的最小路径和。

// 在迭代中，上一层每个数的最小路径和已经确定，现在来计算到该层的每个数的最小路
// 径和，由于只能从上一层的两个相邻数选择，因此选最小的一个相加即可（边缘数只有
// 一个，直接加）

// 如上例子，每遍历一层后的结果：
// 1          [2]
// 2        [5, 6]
// 3     [11, 10, 13]
// 4   [15, 11, 18, 16]

// Submission Result: Accepted
