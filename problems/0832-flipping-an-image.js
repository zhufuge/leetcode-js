// 832. Flipping an Image
// Easy   75%


// Given a binary matrix A, we want to flip the image horizontally, then invert
// it, and return the resulting image.
// To flip an image horizontally means that each row of the image is reversed.
// For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced
// by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].
// Example 1:
// Input: [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
// Example 2:
// Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// Explanation: First reverse each row:
// [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
// Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// Notes:
//     1 <= A.length = A[0].length <= 20
//     0 <= A[i][j] <= 1


/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = function(A) {
  const N = A.length
  for (let i = 0; i < N; i++) {
    for (let j = 0, k = N - 1; j <= k; j++, k--) {
      if (k === j) A[i][j] ^= 1
      else {
        const t = A[i][j]
        A[i][j] = A[i][k] ^ 1
        A[i][k] = t ^ 1
      }
    }
  }
  return A
}

const awesome = function(A) {
  const N = A.length
  for (let row of A) {
    for (let i = 0; i * 2 < N; i++) {
      if (row[i] == row[N - i - 1]) row[i] = row[N - i - 1] ^= 1
    }
  }
  return A
}

;[
  [[1,1,0],[1,0,1],[0,0,0]],
  [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]],
].forEach((A) => {
  // console.log(flipAndInvertImage(A))
  console.log(awesome(A))
})

// Solution:
// 1 1 0    <|>    0 1 1   0->1    1 0 0
// 1 0 1  ------>  1 0 1  ------>  0 1 0
// 0 0 0           0 0 0   1->0    1 1 1

// 每行镜像转换，并同时将 0/1 转换
// 注意中间的转换

// 神级操作
// 镜像转换时，需要交换的两个数 a 和 b
// 当 a==b 时，(即 a=1&&b=1 或 a=0&&b=0)，最终的到的结果为 a==b==^a
// 当 a!=b 时，最终得到的结果不变。

// Submission Result: Accepted