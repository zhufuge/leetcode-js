// 51. N-Queens
// Hard   31%

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
  function iter(rows) {
    if (rows.length === n) {
      addSolution(rows)
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
  function addSolution(rows) {
    const solution = Array(n)
    for (let i = 0; i < n; i++) {
      let string = ''
      for (let j = 0; j < n; j++) {
        string += rows[i] === j ? 'Q' : '.'
      }
      solution[i] = string
    }
    result.push(solution)
  }

  iter([])
  return result
}

;[
  4,
  5,
].forEach(n => {
  console.log(solveNQueens(n))
})

// Solution:
// 每个摆放方法，都只需要用一个数组来表示（因为棋盘中每行只能放一个皇后）
// 数组下标表示行号，数值表示列号（都从0开始）

// 使用试探的方法来递归地解决，试探错误则回溯。
// 每次试着填写一个数字，若合适，则填写下一个数字，否则换一个数字来填写。
// 直到数组填满，这个填满的数组就是一种摆放方法。

// 检查函数，每次只需检查已填的数字
// 需要检查4种情况：
// 1. 每行只能放一个皇后。因为每行用一个数组位置表示，因此确保了每行一个。
// 2. 每列只能放一个皇后。因为每次添加一个数之前，前面的数都是合法的，因此只需要
//    检查新加的数是否合法。所以，检查新加的数是否出现过，即列号是否出现过。
// 3. “\”方向斜线只能放一个皇后。若在该同斜线上的皇后，则它们 *下标与值的差* 是
//    相同的。
// 4. “/”方向斜线只能放一个皇后。这时检查它们 *下标与值的和* 是否相同。

// Submission Result: Accepted
