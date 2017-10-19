// 51. N-Queens
// Hard 31% locked:false

// The n-queens puzzle is the problem of placing n queens on an n×n chessboard
// such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle.

// Each solution contains a distinct board configuration of the n-queens'
// placement, where 'Q' and '.' both indicate a queen and an empty space
// respectively.

// For example,
// There exist two distinct solutions to the 4-queens puzzle:

// [
//  [".Q..",  // Solution 1
//   "...Q",
//   "Q...",
//   "..Q."],

//  ["..Q.",  // Solution 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]

/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function(n) {
  const result = []

  const solve = (p, a, b) => {
    const m = p.length
    if (m === n) result.push(p)
    else {
      for (let i = 0; i < n; i++) {
        if (!p.includes(i) && !a.includes(i - m) && !b.includes(i + m)) {
          solve([...p, i], [...a, i - m], [...b, i + m])
        }
      }
    }
  }

  solve([], [], [])

  return result.map(p => {
    const s = []
    for (let i = 0; i < n; i++) {
      s[i] = new Array(n).fill('.')
      s[i][p[i]] = 'Q'
      s[i] = s[i].join('')
    }
    return s
  })
}

console.log(solveNQueens(6))
