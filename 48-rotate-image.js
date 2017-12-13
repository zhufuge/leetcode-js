// 48. Rotate Image
// Medium 39% locked:false

// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:
// You have to rotate the image in-place, which means you have to modify the
// input 2D matrix directly. DO NOT allocate another 2D matrix and do the
// rotation.

// Example 1:
// Given input matrix =
//   [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
//   ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]

// Example 2:
// Given input matrix =
//   [
//     [ 5, 1, 9,11],
//     [ 2, 4, 8,10],
//     [13, 3, 6, 7],
//     [15,14,12,16]
//   ],

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix) {
  const n = matrix.length, m = n >> 1
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
    for (let j = 0; j < m; j++) {
      [matrix[i][j], matrix[i][n - j - 1]] = [matrix[i][n - j - 1], matrix[i][j]]
    }
  }
}

;[
  [
    [1, 2],
    [3, 4],
  ],
  [
    [1],
  ],
  [
    [1,2,3],
    [4,5,6],
    [7,8,9],
  ]
].forEach(matrix => {
  console.log(matrix)
  rotate(matrix)
  console.log(matrix)
})

// Solution:

// 操作：
// 1) 上下翻折
// 2) 左右翻折
// 3) 沿左上到右下的对角线翻折
// 4) 沿右上到左下的对角线翻折


// 能完成顺时针旋转90度的方法为
// 1. 先1)后3)
// 2. 先2)后4)
// 3. 先3)后2)
// 4. 先4)后1)

// 该实现中使用了方法4

// Submission Result: Accepted
