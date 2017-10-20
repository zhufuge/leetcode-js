// 119. Pascal's Triangle II
// Easy 37% locked:false

// Given an index k, return the kth row of the Pascal's triangle.

// For example, given k = 3,
// Return [1,3,3,1].

// Note: Could you optimize your algorithm to use only O(k) extra space?

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function(rowIndex) {
  if (rowIndex < 0) return []
  const res = new Array(rowIndex + 1)
  res[0] = 1
  for (let i = 1; i <= rowIndex; i++) {
    res[i] = 0
    for (let j = i; j > 0; j--) {
      res[j] = res[j] + res[j - 1]
    }
  }
  return res
}

console.log(getRow(3))
