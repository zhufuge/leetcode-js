// 231. Power of Two
// Easy   40%


// Given an integer, write a function to determine if it is a power of two.

// Credits:Special thanks to @jianchao.li.fighter for adding this problem and
// creating all test cases.


/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function(n) {
  return Number.isInteger(Math.log2(n))
}

;[
  2,                            // true
  4,                            // true
  6,                            // false
  8,                            // true
  0,                            // false
  -2,                           // false
  2048,                         // true
].forEach(n => {
  console.log(isPowerOfTwo(n))
})


// Solution:
// 对n取以2为底的对数，若结果为整数则为真，否则为假。

// Submission Result: Accepted
