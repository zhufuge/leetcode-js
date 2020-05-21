// 509. Fibonacci Number
// Easy   67%


// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the
// Fibonacci sequence, such that each number is the sum of the two preceding
// ones, starting from 0 and 1. That is,
// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.
// Given N, calculate F(N).

// Example 1:
// Input: 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:
// Input: 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:
// Input: 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// Note:
// 0 &le; N &le; 30.


/**
 * @param {number} N
 * @return {number}
 */
const fib = function(N) {
  if (N === 0) return 0
  let p = 0, q = 1
  while (--N > 0) [p, q] = [q, p + q]
  return q
}

;[
  2,
  3,
  4,
].forEach((N) => {
  console.log(fib(N))
})

// Solution:
// 直接迭代计算即可。
// 递归的话会重复计算。

// Submission Result: Accepted