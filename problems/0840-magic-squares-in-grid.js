// 840. Magic Squares In Grid
// Easy   37%


// A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9
// such that each row, column, and both diagonals all have the same sum.
// Given an grid of integers, how many 3 x 3 "magic square" subgrids are there?
// (Each subgrid is contiguous).

// Example 1:
// Input: [[4,3,8,4],
//         [9,5,1,9],
//         [2,7,6,2]]
// Output: 1
// Explanation:
// The following subgrid is a 3 x 3 magic square:
// 438
// 951
// 276
// while this one is not:
// 384
// 519
// 762
// In total, there is only one magic square inside the given grid.
// Note:
//     1 <= grid.length <= 10
//     1 <= grid[0].length <= 10
//     0 <= grid[i][j] <= 15


/**
 * @param {number[][]} grid
 * @return {number}
 */
const numMagicSquaresInside = function(grid) {
  const circle = '29438167'
  const pos = [[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]]
  function isMagicSquares(i, j) {
    if (grid[i][j] !== 5) return false
    let a = b = circle.indexOf(grid[i - 1][j - 1])
    if (a % 2 === 1) return false
    let passA = true, passB = true
    for (let p of pos) {
      const n = grid[i + p[0]][j + p[1]]
      if (n != circle[a]) passA = false
      if (n != circle[b]) passB = false
      a = (a + 1) % 8
      b = (b + 7) % 8
    }
    return passA || passB
  }
  const n = grid.length, m = grid[0].length
  let res = 0
  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < m - 1; j++) {
      if (isMagicSquares(i, j)) res++
    }
  }
  return res
}

;[
  [[4,3,8,4],[9,5,1,9],[2,7,6,2]],
].forEach((grid) => {
  console.log(numMagicSquaresInside(grid))
})

// Solution:
// 1 + 2 + ... + 9 = 45
// 45 / 3 = 15
// 行、列、对角线的和都为 15
// 3 个数的和为 15 的组合的规律

const set = new Set()
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    if (i === j) continue
    const k = 15 - i - j
    if (i === k || j === k || k <= 0 || k > 9) continue
    const a = [i, j, k]
    a.sort((a, b) => a - b)
    set.add(a.join(' '))
  }
}

// 组合有
// Set {
//   '1 5 9',
//   '1 6 8',
//   '2 4 9',
//   '2 5 8',
//   '2 6 7',
//   '3 4 8',
//   '3 5 7',
//   '4 5 6'
// }

// 在四个边的数只需要出现在 2 个组合内，所以有 1，3，7，9
// 在四个角的数需要在 3 个组合内，所以只能是 2，4，6，8 (所有偶数)
// 中间的数必须出现在 4 个组合内，只能是 5

// 159，258，357，456

// 能组成的矩阵有
// 2 9 4
// 7 5 3
// 6 1 8
// 及其旋转和镜像等
// 共 8 个

// 因此
// 1，判断中间是否为 5
// 2，判断周围的环是否与环 2-9-4-3-8-1-6-7(或逆环) 相同

// Submission Result: Accepted