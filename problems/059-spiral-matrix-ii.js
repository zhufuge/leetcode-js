// 59. Spiral Matrix II
// Medium   40%

// Given an integer n, generate a square matrix filled with elements from 1 to
// n2 in spiral order.

// For example,
// Given n = 3,
// You should return the following matrix:

// [
//   [ 1, 2, 3 ],
//   [ 8, 9, 4 ],
//   [ 7, 6, 5 ]
// ]

/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function(n) {
  if (n <= 0) return []

  const m = Array(n)
  for (let i = 0; i < n; i++) m[i] = Array(n)

  let a = 0, b = n - 1, c = 0, d = n -1, i = 1
  while (i <= n * n) {
    for (let j = a; j <= b; j++) m[c][j] = i++
    c++
    for (let j = c; j <= d; j++) m[j][b] = i++
    b--
    for (let j = b; j >= a; j--) m[d][j] = i++
    d--
    for (let j = d; j >= c; j--) m[j][a] = i++
    a++
  }

  return m
}

;[
  2,
  3,
].forEach(n => {
  console.log(generateMatrix(n))
})

// Solution:
// 先构造一个n*n的矩阵
// 从外层顺时针不断向内层填数，一行行或一列列地填。

// Submission Result: Accepted
