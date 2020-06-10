// 1252. Cells with Odd Values in a Matrix
// Easy   78%


// Given n and m which are the dimensions of a matrix initialized by zeros and
// given an array indices where indices[i] = [ri, ci]. For each pair of [ri, ci]
// you have to increment all cells in row ri and column ci by 1.
// Return the number of cells with odd values in the matrix after applying the
// increment to all indices.

// Example 1:
// Input: n = 2, m = 3, indices = [[0,1],[1,1]]
// Output: 6
//
// 0 0 0   0,1   1 2 1   1,1   1 3 1
// 0 0 0  ---->  0 1 0  ---->  1 3 1
//
// Explanation: Initial matrix = [[0,0,0],[0,0,0]].
// After applying first increment it becomes [[1,2,1],[0,1,0]].
// The final matrix will be [[1,3,1],[1,3,1]] which contains 6 odd numbers.

// Example 2:
// Input: n = 2, m = 2, indices = [[1,1],[0,0]]
// Output: 0
//
// 0 0   1,1   0 1   0,0   2 2
// 0 0  ---->  1 2  ---->  2 2
//
// Explanation: Final matrix = [[2,2],[2,2]]. There is no odd number in the final
// matrix.

// Constraints:
//     1 <= n <= 50
//     1 <= m <= 50
//     1 <= indices.length <= 100
//     0 <= indices[i][0] < n
//     0 <= indices[i][1] < m


/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
const oddCells = function(n, m, indices) {
  const matrix = Array(n)
  for (let i = 0; i < n; i++) matrix[i] = Array(m).fill(0)
  for (let indice of indices) {
    for (let i = 0; i < m; i++) matrix[indice[0]][i]++
    for (let i = 0; i < n; i++) matrix[i][indice[1]]++
  }
  let res = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] % 2) res++
    }
  }
  return res
}

;[
  [2, 3, [[0,1],[1,1]]],
  [2, 2, [[1,1],[0,0]]],
].forEach(([n, m, indices]) => {
  console.log(oddCells(n, m, indices))
})

// Solution:
// 创建一个矩阵，直接执行操作，最后统计即可。

// TODO #1252 使用时间和空间复杂度更低的方法

// Submission Result: Accepted