// 695. Max Area of Island
// Easy 53% locked:false


// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's
// (representing land) connected 4-directionally (horizontal or vertical.) You
// may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array.
// (If there is no island, the maximum area is 0.)

// Example 1:

// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6.
// Note the answer is not 11, because the island must be connected
// 4-directionally.

// Example 2:

// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.

// Note:
// The length of each dimension in the given grid does not exceed 50.


/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function(grid) {
  const row = grid.length,
        col = grid[0].length

  function island(i, j) {
    if (!(0 <= i && i < row) ||
        !(0 <= j && j < col) ||
        grid[i][j] <= 0) return 0
    grid[i][j] = -1
    return 1
      + island(i - 1, j)    // top
      + island(i + 1, j)    // bottom
      + island(i, j - 1)    // left
      + island(i, j + 1)    // right
  }

  let result = 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] > 0) {
        result = Math.max(result, island(i, j))
      }
    }
  }

  return result
}


const grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
              [0,0,0,0,0,0,0,1,1,1,0,0,0],
              [0,1,1,0,1,0,0,0,0,0,0,0,0],
              [0,1,0,0,1,1,0,0,1,0,1,0,0],
              [0,1,0,0,1,1,0,0,1,1,1,0,0],
              [0,0,0,0,0,0,0,0,0,0,1,0,0],
              [0,0,0,0,0,0,0,1,1,1,0,0,0],
              [0,0,0,0,0,0,0,1,1,0,0,0,0]]

console.log(maxAreaOfIsland(grid))

// Solution:

// 1.
// 想到的是用 “水波” 迭代（不知道有没有这样的术语），由上和左及原始值决定新数值。
// 过程如下：
// 1 0 1      1 0 1
// 1 1 1  ->  2 3 5  (上 + 左 + it)
// 0 0 1      0 0 6
// (例1)

// 存在问题：无法记录右上角的连接，例子如下：
// 1 1 1      1 2 3
// 1 0 0  ->  2 0 0  \/
// 1 0 0      3 0 0  /\
// (例2)

// 2.
// 没有放弃 “水波” 迭代，附加上负数记录。
// 过程如下：
// 1 1 1     1  2  3
// 1 0 0  -> 2 -3 -4  (it ? 1 : -1) * (abs(上) + abs(左) - abs(左上) + it)
// 1 0 0     3 -4 -5

// 存在问题：例1 没通过 -_-|||
// 又经过几次改进，还是不行。

// 3.
// 只能用深度优先遍历了（一开始就想到这个，但是觉得可能会比较慢，其实不慢）。
// 遇见一个 1 ，翻成负数，然后就开始遍历上下左右，只有再遇见 1 才继续，否则返回。

// Submission Result: Accepted
