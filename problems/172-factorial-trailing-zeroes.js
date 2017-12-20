// 172. Factorial Trailing Zeroes
// Easy   36%


// Given an integer n, return the number of trailing zeroes in n!.

// Note: Your solution should be in logarithmic time complexity.

// Credits:Special thanks to @ts for adding this problem and creating all test
// cases.


/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = function(n) {
  let result = 0
  for (let i = Math.trunc(Math.log(n) / Math.log(5)); i > 0; i--) {
    result += Math.trunc(n / Math.pow(5, i))
  }
  return result
}

;[
  0,                            // 0
  5,                            // 1
  10,                           // 2
  24,                           // 4
  25,                           // 6
  126,                          // 31
].forEach(n => {
  console.log(trailingZeroes(n))
})

// Solution:
// 每当有一个0，说明有一个乘数为 10 （或者其他乘数相乘得到10的倍数，如 2x5）
// 每个5的倍数的数都能与一个偶数相乘的到一个10的倍数。
// 在n的范围内，偶数的数量远大于5的倍数。因此计算是5的倍数的个数。
// 但是还有些数可以分解为多个5，比如 25，125等，这些数与合适的偶数相乘会产生更多的0，
// 如25x4=100，125x8=1000，因此这些数需要额外计算。
// 25需要算2个，125需要算3个。而这正好是对其取以5为底的对数的值。log5(25)=2,log5(125)=3。

// Submission Result: Accepted
