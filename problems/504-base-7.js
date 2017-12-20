// 504. Base 7
// Easy   44%


// Given an integer, return its base 7 string representation.

// Example 1:

// Input: 100
// Output: "202"

// Example 2:

// Input: -7
// Output: "-10"

// Note:
// The input will be in range of [-1e7, 1e7].


/**
 * @param {number} num
 * @return {string}
 */
const convertToBase7 = function(num) {
  let result = '', p = Math.abs(num)
  while (p) {
    result = (p % 7) + result
    p = Math.trunc(p / 7)
  }
  return num ? (num < 0 ? '-' : '') + result : '0'
}

;[
  100,                          // '202'
  -7,                           // '-10'
].forEach(num => {
  console.log(convertToBase7(num))
})

// Solution:
// 取余运算和除法运算。

// Submission Result: Accepted
