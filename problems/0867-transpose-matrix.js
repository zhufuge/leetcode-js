// 867. Transpose Matrix
// Easy   63%


// Given a matrix A, return the transpose of A.
// The transpose of a matrix is the matrix flipped over it's main diagonal,
// switching the row and column indices of the matrix.

// Example 1:
// Input: [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]
// Example 2:
// Input: [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]

// Note:
//     1 <= A.length <= 1000
//     1 <= A[0].length <= 1000


/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const transpose = function(A) {
  const N = A.length, M = A[0].length
  const res = []
  for (let i = 0; i < M; i++) {
    res[i] = []
    for (let j = 0; j < N; j++) {
      res[i].push(A[j][i])
    }
  }
  return res
}

const inPlace = function(A) {
  const N = A.length, M = A[0].length
  const MAX = Math.max(N, M)
  for (let i = N; i < MAX; i++) A.push([])
  for (let i = 0; i < MAX; i++) {
    for (let j = i; j < MAX; j++) {
      const t = A[i][j]
      A[i][j] = A[j][i]
      A[j][i] = t
    }
    for (let j = N; j < MAX; j++) A[i].pop()
  }
  for (let i = M; i < MAX; i++) A.pop()
  return A
}

;[
  [[1,2,3],[4,5,6],[7,8,9]], // [[1,4,7],[2,5,8],[3,6,9]]
  [[1,2,3],[4,5,6]], // [[1,4],[2,5],[3,6]]
  [[1,2],[3,4],[5,6]],// [[1,3,5],[2,4,6]]
].forEach((A) => {
  console.log(transpose(A))
})

// Solution:
// 1. 新建一个数组

// 2. 就地替换
// 先添加翻转后缺少的行
// 交换
// 去除列中多余的数
// 去除多余的行

// Submission Result: Accepted