// 892. Surface Area of 3D Shapes
// Easy   58%


// On a N * N grid, we place some 1 * 1 * 1 cubes.
// Each value v = grid[i][j] represents a tower of v cubes placed on top of grid
// cell (i, j).
// Return the total surface area of the resulting shapes.

// Example 1:
// Input: [[2]]
// Output: 10
// Example 2:
// Input: [[1,2],[3,4]]
// Output: 34
// Example 3:
// Input: [[1,0],[0,2]]
// Output: 16
// Example 4:
// Input: [[1,1,1],[1,0,1],[1,1,1]]
// Output: 32
// Example 5:
// Input: [[2,2,2],[2,1,2],[2,2,2]]
// Output: 46

// Note:
//     1 <= N <= 50
//     0 <= grid[i][j] <= 50


/**
 * @param {number[][]} grid
 * @return {number}
 */
const surfaceArea = function(grid) {
  const N = grid.length
  let H = 0, max = 0
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j]) H++
      max = Math.max(max, grid[i][j])
    }
  }
  let V = 0
  for (let k = 0; k < max; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (grid[i][j] - k > 0) {
          if (i === 0 || grid[i - 1][j] - k <= 0) V++
          if (j === N - 1 || grid[i][j + 1] - k <= 0) V++
          if (i === N - 1 || grid[i + 1][j] - k <= 0) V++
          if (j === 0 || grid[i][j - 1] -k <= 0) V++
        }
      }
    }
  }
  return 2 * H + V
}

const better = function(grid) {
  let res = 0, n = grid.length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0) res += grid[i][j] * 4 + 2
      if (i > 0) res -= Math.min(grid[i][j], grid[i - 1][j]) * 2
      if (j > 0) res -= Math.min(grid[i][j], grid[i][j - 1]) * 2
    }
  }
  return res
}

;[
  [[2]], // 10
  [[1,2],[3,4]], // 34
  [[1,0],[0,2]], // 16
  [[1,1,1],[1,0,1],[1,1,1]], // 32
  [[2,2,2],[2,1,2],[2,2,2]], // 46
].forEach((grid) => {
  console.log(surfaceArea(grid))
  console.log(surfaceArea(grid))
})

// Solution:
// 分为两部分
// 1. 水平面
// 2. 垂直面

// 水平面可以通过遍历网格上的数是否大于0来判断

// 垂直面，是通过从底层向上，一层层计算的
// 每层中只遍历有方块的四周，若有一个方向没有方块，则添加一个面。

// 最后得出 底层水平面 * 2 + 所有垂直面

// 更好的方法：
// 一个个网格计算
// 遍历网格，计算一个网格内的所有方块的面，即（方块数 * 4 + 2）
// 再减去其与后方和左方的方块合并的面，即（较少的方块数 * 2）
// 遍历完后即可得到答案。


// Submission Result: Accepted