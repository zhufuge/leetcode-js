// 118. Pascal's Triangle
// Easy   39%

// Given numRows, generate the first numRows of Pascal's triangle.

// For example, given numRows = 5,
// Return

// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
  if (numRows <= 0) return []
  const res = [[1]]
  for (let i = 1; i < numRows; i++) {
    res[i] = []
    for (let j = 0; j <= i; j++) {
      res[i][j] = (res[i - 1][j - 1] || 0) + (res[i - 1][j] || 0)
    }
  }
  return res
}

;[
  -1,
  5,
].forEach(numRows => {
  console.log(generate(numRows))
})

// Solution:
// 初始化第一层为 1，
// 其余的每层中的每个数都是其左右上角的两个数的和（没有数则用0表示）

// Submission Result: Accepted
