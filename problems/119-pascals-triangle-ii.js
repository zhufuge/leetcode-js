// 119. Pascal's Triangle II
// Easy   37%

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
      res[j] += res[j - 1]
    }
  }
  return res
}

;[
  -1,
  0,
  1,
  3,
].forEach(rowIndex => {
  console.log(getRow(rowIndex))
})

// Solution:
// 由于第 n 层的数组有 n + 1 个数，所以先分配该长度的数组。
// 又由于每个数都是其左右上角的两个数的和，且格式化（左对齐）后，数i的值等于其上
// 一层的数i加上数i-1的值，因此只需要在原数组基础上计算（保证 O(k) 的空间复杂度）

// 因为需要加上前一个数，所以从后向前遍历。

// Submission Result: Accepted
