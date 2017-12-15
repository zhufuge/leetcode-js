// 52. N-Queens II
// Hard    45%

// Follow up for N-Queens problem.

// Now, instead outputting board configurations, return the total number of
// distinct solutions.

/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = function(n) {
  let result = 0
  function iter(rows) {
    if (rows.length === n) {
      result++
      return
    }
    for (let i = 0; i < n; i++) {
      rows.push(i)
      if (check(rows)) iter(rows)
      rows.pop(i)
    }
  }
  function check(rows) {
    for (let i = rows.length - 1, j = i - 1; j >= 0; j--) {
      if (rows[i] === rows[j]) return false
      if (rows[i] - i === rows[j] - j) return false
      if (rows[i] + i === rows[j] + j) return false
    }
    return true
  }
  iter([])
  return result
}

;[
  4,
  5,
  8,
].forEach(n => {
  console.log(totalNQueens(n))
})

// Solution:
// 同 51-n-queens.js

// Submission Result: Accepted
