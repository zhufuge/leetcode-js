// 463. Island Perimeter
// Easy   57%


// You are given a map in form of a two-dimensional integer grid where 1
// represents land and 0 represents water. Grid cells are connected
// horizontally/vertically (not diagonally). The grid is completely surrounded by
// water, and there is exactly one island (i.e., one or more connected land
// cells). The island doesn't have "lakes" (water inside that isn't connected to
// the water around the island). One cell is a square with side length 1. The
// grid is rectangular, width and height don't exceed 100. Determine the
// perimeter of the island.

// Example:

// [[0,1,0,0],
//  [1,1,1,0],
//  [0,1,0,0],
//  [1,1,0,0]]

// Answer: 16
// Explanation: The perimeter is the 16 yellow stripes in the image below:


/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function(grid) {
  if (grid.length === 0 || grid[0].length === 0 ) return 0
  const m = grid.length, n = grid[0].length
  const getIJ = (i, j) => (grid[i] && grid[i][j] || 0) ^ 1
  let result = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        result +=
          getIJ(i - 1, j) +
          getIJ(i, j - 1) +
          getIJ(i, j + 1) +
          getIJ(i + 1, j)
      }
    }
  }
  return result
}

;[
  [[0,1,0,0],
   [1,1,1,0],
   [0,1,0,0],
   [1,1,0,0]],                  // 16
].forEach(grid => {
  console.log(islandPerimeter(grid))
})

// Solution:

// 对岛屿的每个块，检查其四周是否为水。
// 是，结果则加 1
// 否则加 0

// Submission Result: Accepted
