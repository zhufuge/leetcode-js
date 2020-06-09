// 1281. Subtract the Product and Sum of Digits of an Integer
// Easy   85%


// Given an integer number n, return the difference between the product of its
// digits and the sum of its digits.

// Example 1:
// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15
// Example 2:
// Input: n = 4421
// Output: 21
// Explanation:
// Product of digits = 4 * 4 * 2 * 1 = 32
// Sum of digits = 4 + 4 + 2 + 1 = 11
// Result = 32 - 11 = 21

// Constraints:
//     1 <= n <= 10^5


/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function(n) {
  let p = 1, s = 0, d = 0
  while (n) {
    d = n % 10
    p *= d
    s += d
    n = Math.floor(n / 10)
  }
  return p - s
}

;[
  234, // 15
  4421, // 21
].forEach((n) => {
  console.log(subtractProductAndSum(n))
})

// Solution:
// 从数的末位开始算即可。

// Submission Result: Accepted