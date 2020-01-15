// 69. Sqrt(x)
// Easy   28%

// Implement int sqrt(int x).

// Compute and return the square root of x.

// x is guaranteed to be a non-negative integer.

// Example 1:

// Input: 4
// Output: 2

// Example 2:

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we want to return
// an integer, the decimal part will be truncated.

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  let r = x
  while (r * r > x) r = ((r + x / r) / 2) | 0
  return r
}

;[
  4,                            // 2
  8,                            // 2
  100,                          // 10
].forEach(x => {
  console.log(mySqrt(x));
})

// Solution:
// 牛顿迭代法的特殊情况（精度为1）

// Submission Result: Accepted
