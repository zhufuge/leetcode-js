// 54. Spiral Matrix
// Medium 26% locked:false

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
  if (matrix === void 0 || matrix.length === 0) return []
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

const m = [
  [1, 2, 3, 0],
  [4, 5, 6, 1],
  [0, 1, 0, 2],
  [7, 8, 9, 3]
]

console.log(spiralOrder(m))
console.log(spiralOrder([[2, 3]]))
console.log(spiralOrder([[2], [3], [4]]))
