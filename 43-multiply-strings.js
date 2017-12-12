// 43. Multiply Strings
// Medium   27%

// Given two non-negative integers num1 and num2 represented as strings, return
// the product of num1 and num2.

// Note:

// 1. The length of both num1 and num2 is < 110.
// 2. Both num1 and num2 contains only digits 0-9.
// 3. Both num1 and num2 does not contain any leading zero.
// 4. You must not use any built-in BigInteger library or convert the inputs to
// integer directly.


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function(num1, num2) {
  const n = num1.length, m = num2.length
  const result = Array(n + m).fill(0)
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      const product = num1[i] * num2[j] + result[i + j + 1]
      result[i + j + 1] = product % 10
      result[i + j] += Math.trunc(product / 10)
    }
  }
  while (result[0] === 0 && result.length > 1) result.shift()
  return result.join('')
}

;[
  ['13', '17'],                 // 221
  ['98', '98'],                 // 8904
  ['0', '0'],                   // 0
  ['123', '456'],               // 56088
].forEach(args => {
  console.log(multiply(...args))
})

// Solution:
// 先分配足够的空间来保存每一位数。
// 两个数的长度分别为 n 和 m，则其乘积的最长长度为 n+m。
// 因此分配 n+m 个空间就足够了。

// 运算的方式类似于竖式计算。
// 每次将乘积的个位保留在对应位置，进位保存在其前一个位置。
// 每次算两个一位数乘积时，都加上其对应位置原来保留的数。

// Submission Result: Accepted
