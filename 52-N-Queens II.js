// 52. N-Queens II
// Hard 45% locked:false

// Follow up for N-Queens problem.

// Now, instead outputting board configurations, return the total number of
// distinct solutions.

/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = function(n) {
  let res = 0
  const solve = (p, a, b) => {
    const m = p.length
    if (m === n) res++
    else {
      for (let i = 0; i < n; i++) {
        if (!p.includes(i) && !a.includes(m - i) && !b.includes(m + i)) {
          solve([...p, i], [...a, m - i], [...b, m + i])
        }
      }
    }
  }

  solve([], [], [])
  return res
}

console.log(totalNQueens(8))
