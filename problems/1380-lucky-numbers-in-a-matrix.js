// 1380. Lucky Numbers in a Matrix
// Easy   72%


// Given a m * n matrix of distinct numbers, return all lucky numbers in the
// matrix in any order.
// A lucky number is an element of the matrix such that it is the minimum element
// in its row and maximum in its column.

// Example 1:
// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row
// and the maximum in its column
// Example 2:
// Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row
// and the maximum in its column.
// Example 3:
// Input: matrix = [[7,8],[1,2]]
// Output: [7]

// Constraints:
//     m == mat.length
//     n == mat[i].length
//     1 <= n, m <= 50
//     1 <= matrix[i][j] <= 10^5.
//     All elements in the matrix are distinct.


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers  = function(matrix) {
  const res = [], n = matrix.length, m = matrix[0].length
  for (let i = 0; i < n; i++) {
    let col = 0
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] < matrix[i][col]) col = j
    }
    let isMax = true
    for (let k = 0; k < n; k++) {
      if (matrix[k][col] > matrix[i][col]) isMax = false
    }
    if (isMax) res.push(matrix[i][col])
  }
  return res
}

;[
  [[3,7,8],[9,11,13],[15,16,17]],
  [[1,10,4,2],[9,3,8,7],[15,16,17,12]],
  [[7,8],[1,2]],
].forEach((matrix) => {
  console.log(luckyNumbers(matrix))
})

// Solution:
// 先找到每行中的最小值，再看看是否为其所在列的最大值

// Submission Result: Accepted