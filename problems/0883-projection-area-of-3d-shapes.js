// 883. Projection Area of 3D Shapes
// Easy   67%


// On a N * N grid, we place some 1 * 1 * 1 cubes that are axis-aligned with the
// x, y, and z axes.
// Each value v = grid[i][j] represents a tower of v cubes placed on top of grid
// cell (i, j).
// Now we view the projection of these cubes onto the xy, yz, and zx planes.
// A projection is like a shadow, that maps our 3 dimensional figure to a 2
// dimensional plane.
// Here, we are viewing the "shadow" when looking at the cubes from the top, the
// front, and the side.
// Return the total area of all three projections.

// Example 1:
// Input: [[2]]
// Output: 5
// Example 2:
// Input: [[1,2],[3,4]]
// Output: 17
// Explanation:
// Here are the three projections ("shadows") of the shape made with each
// axis-aligned plane.
// Example 3:
// Input: [[1,0],[0,2]]
// Output: 8
// Example 4:
// Input: [[1,1,1],[1,0,1],[1,1,1]]
// Output: 14
// Example 5:
// Input: [[2,2,2],[2,1,2],[2,2,2]]
// Output: 21

// Note:
//     1 <= grid.length = grid[0].length <= 50
//     0 <= grid[i][j] <= 50


/**
 * @param {number[][]} grid
 * @return {number}
 */
const projectionArea = function(grid) {
  let res = 0
  const N = grid.length
  for (let i = 0; i < N; i++) {
    let p = 0, q = 0
    for (let j = 0; j < N; j++) {
      if (grid[i][j] > 0) res++
      p = Math.max(p, grid[i][j])
      q = Math.max(q, grid[j][i])
    }
    res += p + q
  }
  return res
}

;[
  [[2]], // 5
  [[1,2],[3,4]], // 17
  [[1,0],[0,2]], // 8
  [[1,1,1],[1,0,1],[1,1,1]], // 14
  [[2,2,2],[2,1,2],[2,2,2]], // 21
].forEach((grid) => {
  console.log(projectionArea(grid))
})

// Solution:
// 顶视图的面积为 网格的方块大于0的个数，
// 正视图的面积为 每列最大的数的和，
// 侧视图的面积为 每行最大的数的和，
// 遍历一遍矩阵，分别计算以上值即可。

// Submission Result: Accepted