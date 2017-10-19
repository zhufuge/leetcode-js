// 74. Search a 2D Matrix
// Medium 34% locked:false

// Write an efficient algorithm that searches for a value in an m x n matrix.
// This matrix has the following properties:

// 1. Integers in each row are sorted from left to right.

// 2. The first integer of each row is greater than the last integer of the
// previous row.

// For example,

// Consider the following matrix:

// [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]

// Given target = 3, return true.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false
  const m = matrix.length, n = matrix[0].length
  let i = 0, j = m - 1
  while (i < j) {
    const mid = Math.trunc((i + j) / 2)
    if (target < matrix[mid][0]) j = mid - 1
    else if (target > matrix[mid][0]) i = mid + 1
    else return true
  }

  let row = (target < matrix[i][0]) ? i - 1 : i
  if (row < 0) return false
  ;[i, j] = [0, n - 1]
  while (i <= j) {
    const mid = Math.trunc((i + j) / 2)
    if (target < matrix[row][mid]) j = mid - 1
    else if (target > matrix[row][mid]) i = mid + 1
    else return true
  }

  return false
}


const treatAsList = function(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false
  const m = matrix.length, n = matrix[0].length
  let i = 0, j = m * n - 1
  while (i <= j) {
    const mid = (i + j) >> 1,
          value = matrix[Math.trunc(mid / n)][mid % n]
    if (target < value) j = mid - 1
    else if (target > value) i = mid + 1
    else return true
  }
  return false
}

const matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
const n = 20
console.log(searchMatrix(matrix, n))
console.log(treatAsList(matrix, n))
