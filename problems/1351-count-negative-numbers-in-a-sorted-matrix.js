// 1351. Count Negative Numbers in a Sorted Matrix
// Easy   77%


// Given a m * n matrix grid which is sorted in non-increasing order both
// row-wise and column-wise.
// Return the number of negative numbers in grid.

// Example 1:
// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:
// Input: grid = [[3,2],[1,0]]
// Output: 0
// Example 3:
// Input: grid = [[1,-1],[-1,-1]]
// Output: 3
// Example 4:
// Input: grid = [[-1]]
// Output: 1

// Constraints:
//     m == grid.length
//     n == grid[i].length
//     1 <= m, n <= 100
//     -100 <= grid[i][j] <= 100


/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = function(grid) {
  const m = grid.length, n = grid[0].length
  let res = 0
  for (let i = 0; i < m && grid[i][0] >= 0; i++) {
    for (let j = 0; j < n && grid[i][j] >= 0; j++) res++
  }
  return m * n - res
}

const better = function(grid) {
  let m = grid.length, n = grid[0].length, res = 0, c = 0
  while (m > 0 && c < n) {
    if (grid[m - 1][c] < 0) {
      res += n - c
      m--
    } else {
      c++
    }
  }
  return res
}

;[
  [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]],
  [[3,2],[1,0]],
  [[1,-1],[-1,-1]],
  [[-1]],
].forEach((grid) => {
  console.log(countNegatives(grid))
  console.log(better(grid))
})

// Solution:
// 1. 直接计算，或数非负数个数再用总数减。

// 2. 充分利用非递增的规律
// 矩阵的大致布局如下：
// +++++++
// +++++--
// ++-----
// +------
// -------
// 可以发现，从下到上每行的负数依次减少，即从下到上每行的第一个负数的下标依次增加。
// 通过第一个负数的位置和每行的长度可以计算出该行的负数的个数。
// 因此可以从下到上遍历，而遍历每行是，记录第一个负数的位置，在遍历下一行时，从该位置开始即可。

// Submission Result: Accepted