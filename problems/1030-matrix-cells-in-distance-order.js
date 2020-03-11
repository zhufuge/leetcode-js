// 1030. Matrix Cells in Distance Order
// Easy   64%

// We are given a matrix with R rows and C columns has cells with integer
// coordinates (r, c), where 0 <= r < R and 0 <= c < C.
// Additionally, we are given a cell in that matrix with coordinates (r0, c0).
// Return the coordinates of all cells in the matrix, sorted by their distance
// from (r0, c0) from smallest distance to largest distance.  Here, the distance
// between two cells (r1, c1) and (r2, c2) is the Manhattan distance, |r1 - r2| +
// |c1 - c2|.  (You may return the answer in any order that satisfies this
// condition.)

// Example 1:
// Input: R = 1, C = 2, r0 = 0, c0 = 0
// Output: [[0,0],[0,1]]
// Explanation: The distances from (r0, c0) to other cells are: [0,1]
// Example 2:
// Input: R = 2, C = 2, r0 = 0, c0 = 1
// Output: [[0,1],[0,0],[1,1],[1,0]]
// Explanation: The distances from (r0, c0) to other cells are: [0,1,1,2]
// The answer [[0,1],[1,1],[0,0],[1,0]] would also be accepted as correct.
// Example 3:
// Input: R = 2, C = 3, r0 = 1, c0 = 2
// Output: [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]
// Explanation: The distances from (r0, c0) to other cells are: [0,1,1,2,2,3]
// There are other answers that would also be accepted as correct, such as
// [[1,2],[1,1],[0,2],[1,0],[0,1],[0,0]].

// Note:
//     1 <= R <= 100
//     1 <= C <= 100
//     0 <= r0 < R
//     0 <= c0 < C

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
const allCellsDistOrder = function(R, C, r0, c0) {
  const visited = Array(R)
  for (let i = 0; i < R; i++) visited[i] = Array(C).fill(false)

  const result = []

  const queue = [[r0, c0]]
  while (queue.length > 0) {
    const cell = queue.shift()
    const r = cell[0], c = cell[1]

    if (r < 0 || r >= R || c < 0 || c >= C) continue
    if (visited[r][c]) continue

    result.push([r, c])
    visited[r][c] = true

    queue.push([r, c - 1])
    queue.push([r, c + 1])
    queue.push([r - 1, c])
    queue.push([r + 1, c])
  }
  return result
}

;[
  [1, 2, 0, 0],
  [2, 2, 0, 1],
  [2, 3, 1, 2],
].forEach(([R, C, r0, c0]) => {
  console.log(allCellsDistOrder(R, C, r0, c0))
})

// Solution:
// 1. 按照曼哈顿距离使用内部排序即可
// 2. BFS 遍历，使用标记矩阵和先进先出队列来完成广度遍历来完成

// Submission Result: Accepted
