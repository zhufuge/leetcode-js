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

console.log(generate(-1))
