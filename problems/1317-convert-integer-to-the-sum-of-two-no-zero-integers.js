// 1317. Convert Integer to the Sum of Two No-Zero Integers
// Easy   59%


// Given an integer n. No-Zero integer is a positive integer which doesn't
// contain any 0 in its decimal representation.
// Return a list of two integers [A, B] where:
//     A and B are No-Zero integers.
//     A + B = n
// It's guarateed that there is at least one valid solution. If there are many
// valid solutions you can return any of them.

// Example 1:
// Input: n = 2
// Output: [1,1]
// Explanation: A = 1, B = 1. A + B = n and both A and B don't contain any 0 in
// their decimal representation.
// Example 2:
// Input: n = 11
// Output: [2,9]
// Example 3:
// Input: n = 10000
// Output: [1,9999]
// Example 4:
// Input: n = 69
// Output: [1,68]
// Example 5:
// Input: n = 1010
// Output: [11,999]

// Constraints:
//     2 <= n <= 10^4


/**
 * @param {number} n
 * @return {number[]}
 */
const getNoZeroIntegers = function(n) {
  function hasZero(a) {
    if (a % 10 === 0) return true
    if (a < 10) return false
    return hasZero((a / 10) >>> 0)
  }

  for (let i = 1; i < n; i++) {
    if (hasZero(i) || hasZero(n - i)) continue
    else return [i, n - i]
  }
}

;[
  2,        // [1, 1]
  11,       // [2, 9]
  10000,    // [1, 9999]
  69,       // [1, 68]
  1010,     // [11, 999]
].forEach((n) => {
  console.log(getNoZeroIntegers(n))
})

// Solution:
// 关键是如何判断一个数是否包含有零
// 从 i = 1 开始判断，看 i 和 n - i 是否都为非含零的数，是则返回，否则继续。

// Submission Result: Accepted