// 73. Set Matrix Zeroes
// Medium   36%

// Given a m x n matrix, if an element is 0, set its entire row and column to 0.
// Do it in place.

// click to show follow up.
//   Follow up:

// Did you use extra space?
// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function(matrix) {
  const m = matrix.length, n = matrix[0].length
  let col0 = 1
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) col0 = 0
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) matrix[i][0] = matrix[0][j] = 0
    }
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 1; j--) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0
    }
    if (col0 === 0) matrix[i][0] = 0
  }
}

;[
  [
    [0, 1, 0],
    [1, 1, 1],
    [1, 1, 1]
  ],
].forEach(matrix => {
  console.log(matrix)
  setZeroes(matrix)
  console.log(matrix)
})

// Solution:
// 方法一：使用另一个矩阵记录0的位置。（直接）
// Space：O(m*n)

// 方法二：使用两个数组记录0的位置。
// Space: O(m+n)

// 方法三：在原矩阵中记录。
// Space: O(1)
// 将每行的状态记录在行头，将每列的状态记录在列头。
// 最后还需要记录第一列的状态在一个变量上。

// Submission Result: Accepted
