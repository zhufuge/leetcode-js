// 994. Rotting Oranges
// Easy   47%


// In a given grid, each cell can have one of three values:
//     the value 0 representing an empty cell;
//     the value 1 representing a fresh orange;
//     the value 2 representing a rotten orange.
// Every minute, any fresh orange that is adjacent (4-directionally) to a rotten
// orange becomes rotten.
// Return the minimum number of minutes that must elapse until no cell has a
// fresh orange.  If this is impossible, return -1 instead.

// Example 1:
// Input: [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:
// Input: [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation:  The orange in the bottom left corner (row 2, column 0) is never
// rotten, because rotting only happens 4-directionally.
// Example 3:
// Input: [[0,2]]
// Output: 0
// Explanation:  Since there are already no fresh oranges at minute 0, the answer
// is just 0.

// Note:
//     1 <= grid.length <= 10
//     1 <= grid[0].length <= 10
//     grid[i][j] is only 0, 1, or 2.


/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function(grid) {
  let count = 0
  let queue = []
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) count++
      if (grid[i][j] === 2) queue.push([i, j])
    }
  }
  function rot(i, j) {
    if (i >= 0 && j >=0 && i < grid.length && j < grid[0].length && grid[i][j] === 1) {
      grid[i][j] = 2
      count--
      queue.push([i, j])
    }
  }
  let minute = 0
  while (queue.length > 0) {
    let len = queue.length
    while (len-- > 0) {
      const cell = queue.shift()
      rot(cell[0] - 1, cell[1])
      rot(cell[0] + 1, cell[1])
      rot(cell[0], cell[1] - 1)
      rot(cell[0], cell[1] + 1)
    }
    if (queue.length > 0) minute++
  }
  return count === 0 ? minute : -1
}

;[
  [[2,1,1],[1,1,0],[0,1,1]], // 4
  [[2,1,1],[0,1,1],[1,0,1]], // -1
  [[0,2]],                   // 0
  [[2,1,1],[1,1,1],[1,1,2]], // 2
  [[0]],                     // 0
].forEach((grid) => {
  console.log(orangesRotting(grid))
})

// Solution:
// BFS
// 找出所有 2，添加到先进先出队列中，使用广度遍历所有 2 的四周，将遍历过的 1 变为 2，
// 记录遍历的次数
// 找出所有 1，记录个数，用于判断是否能将所有 1 变为 2


// Submission Result: Accepted