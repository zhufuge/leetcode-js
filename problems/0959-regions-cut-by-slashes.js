// 959. Regions Cut By Slashes
// Medium   66%


// In a N x N grid composed of 1 x 1 squares, each 1 x 1 square consists of a /,
// \, or blank space.  These characters divide the square into contiguous
// regions.
// (Note that backslash characters are escaped, so a \ is represented as "\\".)
// Return the number of regions.

// Example 1:
// Input:
// [
//   " /",
//   "/ "
// ]
// Output: 2
// Explanation: The 2x2 grid is as follows:

// Example 2:
// Input:
// [
//   " /",
//   "  "
// ]
// Output: 1
// Explanation: The 2x2 grid is as follows:

// Example 3:
// Input:
// [
//   "\\/",
//   "/\\"
// ]
// Output: 4
// Explanation: (Recall that because \ characters are escaped, "\\/" refers to
// \/, and "/\\" refers to /\.)
// The 2x2 grid is as follows:

// Example 4:
// Input:
// [
//   "/\\",
//   "\\/"
// ]
// Output: 5
// Explanation: (Recall that because \ characters are escaped, "/\\" refers to
// /\, and "\\/" refers to \/.)
// The 2x2 grid is as follows:

// Example 5:
// Input:
// [
//   "//",
//   "/ "
// ]
// Output: 3
// Explanation: The 2x2 grid is as follows:

// Note:
//     1 <= grid.length == grid[0].length <= 30
//     grid[i][j] is either '/', '\', or ' '.


/**
 * @param {string[]} grid
 * @return {number}
 */
const regionsBySlashes = function(grid) {
  const n = grid.length, m = []
  for (let i = 0; i < n; i++) {
    m.push([], [], [])
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '/') m[i * 3][j * 3 + 2] = m[i * 3 + 1][j * 3 + 1] = m[i * 3 + 2][j * 3] = true
      if (grid[i][j] === '\\') m[i * 3][j * 3] = m[i * 3 + 1][j * 3 + 1] = m[i * 3 + 2][j * 3 + 2] = true
    }
  }

  function dfs(i, j) {
    if (0 <= i && i < n * 3 && 0 <= j && j < n * 3 && !m[i][j]) {
      m[i][j] = true
      dfs(i - 1, j)
      dfs(i, j + 1)
      dfs(i + 1, j)
      dfs(i, j - 1)
    }
  }

  let res = 0
  for (let i = 0; i < n * 3; i++) {
    for (let j = 0; j < n * 3; j++) {
      if (!m[i][j]) {
        dfs(i, j)
        res++
      }
    }
  }
  return res
}

;[
  [
    ' /',
    '/ ',
  ], // 2
  [
    ' /',
    '  ',
  ], // 1
  [
    '\\/',
    '/\\',
  ], // 4
  [
    '/\\',
    '\\/',
  ], // 5
  [
    '//',
    '/ ',
  ], // 3
].forEach((grid) => {
  console.log(regionsBySlashes(grid))
})

// Solution:
// 将矩阵扩大为原来的3倍，再使用广度遍历法，找到不同区块的数量
// 扩大时
// '/' 变为
// '  1'
// ' 1 '
// '1  '
// '\\' 变为
// '1  '
// ' 1 '
// '  1'

// 示例
// 如 [
//     '\\/',
//     '/\\',
//    ]
// 变为
// '1    1'
// ' 1  1 '
// '  11  '
// '  11  '
// ' 1  1 '
// '1    1'

// Submission Result: Accepted