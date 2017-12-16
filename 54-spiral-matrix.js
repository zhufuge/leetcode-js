// 54. Spiral Matrix
// Medium   26%

// Given a matrix of m x n elements (m rows, n columns), return all elements of
// the matrix in spiral order.

// For example, Given the following matrix:

// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

// You should return [1,2,3,6,9,8,7,4,5].

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function(matrix) {
  if (matrix == null || matrix.length === 0) return []
  const rows = matrix.length, cols = matrix[0].length

  const res = []
  let a = 0, b = cols - 1, c = 0, d = rows - 1
  while (a <= b && c <= d) {
    for (let i = a; i <= b; i++) res.push(matrix[c][i])
    c++
    for (let i = c; i <= d; i++) res.push(matrix[i][b])
    b--
    for (let i = b; i >= a && c <= d; i--) res.push(matrix[d][i])
    d--
    for (let i = d; i >= c && a <= b; i--) res.push(matrix[i][a])
    a++
  }
  return res
}

;[
  [
    [1, 2, 3, 0],
    [4, 5, 6, 1],
    [0, 1, 0, 2],
    [7, 8, 9, 3]
  ],
  [
    [2,3]
  ],
  [
    [2],
    [3],
    [4]
  ]
].forEach(matrix => {
  console.log(spiralOrder(matrix))
})

// Solution:
// 按照题意，从外圈层层向里读。
// 设置矩阵的四个边界，没读完最外层的行或列，都改变一个边界。

// Submission Result: Accepted
