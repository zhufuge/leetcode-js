// 1260. Shift 2D Grid
// Easy   61%


// Given a 2D grid of size m x n and an integer k. You need to shift the grid k
// times.
// In one shift operation:
//     Element at grid[i][j] moves to grid[i][j + 1].
//     Element at grid[i][n - 1] moves to grid[i + 1][0].
//     Element at grid[m - 1][n - 1] moves to grid[0][0].
// Return the 2D grid after applying shift operation k times.

// Example 1:
//
//  1 2 3      9 1 2
//  4 5 6  ->  3 4 5
//  7 8 9      7 8 9
//
// Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
// Output: [[9,1,2],[3,4,5],[6,7,8]]
// Example 2:
// Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
// Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
// Example 3:
// Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
// Output: [[1,2,3],[4,5,6],[7,8,9]]

// Constraints:
//     m == grid.length
//     n == grid[i].length
//     1 <= m <= 50
//     1 <= n <= 50
//     -1000 <= grid[i][j] <= 1000
//     0 <= k <= 100


/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const shiftGrid = function(grid, k) {
  const m = grid.length, n = grid[0].length
  const rowShift = Math.floor(k / n) % m, colShift = k % n
  const res = []
  for (let i = 0; i < m; i++) {
    res[i] = []
    for (let j = 0; j < n; j++) {
      const r = (i - rowShift + Math.floor((j - colShift) / n) + m) % m
      const c = (j - colShift + n) % n
      res[i][j] = grid[r][c]
    }
  }
  return res
}

;[
  [[[1,2,3],[4,5,6],[7,8,9]], 1],
  [[[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], 4],
  [[[1,2,3],[4,5,6],[7,8,9]], 9],
].forEach(([grid, k]) => {
  console.log(shiftGrid(grid, k))
})

// Solution:
// 水平移动距离为 colShift = k % n
// 垂直移动距离为 rowShift = Math.floor(k / n) % m （k除以n取整为行移动距离，取m的模是
// 因为移动m次与不移动是一样的）

// 移动后网格 res[i][j] 的数据为 grid[r][c]
// c = (j - colShift + n) % n，其中 +n 是为了读取向前读取时可以读到上一行的数据
// r = (i - rowShift - Math.floor((j - colShift) / n) + m) % m

// Submission Result: Accepted