// 202. Happy Number
// Easy   40%


// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any
// positive integer, replace the number by the sum of the squares of its digits,
// and repeat the process until the number equals 1 (where it will stay), or it
// loops endlessly in a cycle which does not include 1. Those numbers for which
// this process ends in 1 are happy numbers.

// Example: 19 is a happy number

// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

// Credits:Special thanks to @mithmatt and @ts for adding this problem and
// creating all test cases.


/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
  const hash = {}

  while (hash[n] == null) {
    hash[n] = true

    let sum = 0
    while (n > 0) {
      sum += Math.pow(n % 10, 2)
      n = Math.trunc(n / 10)
    }
    if (sum === 1) return true

    n = sum
  }

  return false
}

;[
  19,                           // true
  7,                            // true
  2,                            // false
].forEach(n => {
  console.log(isHappy(n))
})


// Solution:
// 用哈希保存出现过的数字，若再次出现则会循环，返回 false
// 否则继续计算，直达算出 1 。

// Submission Result: Accepted
