// 120. Triangle
// Medium 34% locked:false

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
  if (triangle.length === 0) return 0
  const n = triangle.length
  const sum = new Array(n)
  sum[0] = triangle[0][0]
  for (let i = 1; i < n; i++) {
    sum[i] = triangle[i][i] + sum[i - 1]
    for (let j = i - 1; j > 0; j--) {
      sum[j] = triangle[i][j] + Math.min(sum[j], sum[j - 1])
    }
    sum[0] += triangle[i][0]
  }

  return sum.reduce((min, v) => Math.min(min, v))
}

const triangle = [
  [2],
  [3,4],
  [6,5,7],
  [4,1,8,3]
]

console.log(minimumTotal(triangle));
