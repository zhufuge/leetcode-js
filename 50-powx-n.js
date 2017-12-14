// 50. Pow(x, n)
// Medium   26%

// Implement pow(x, n).

// Example 1:

// Input: 2.00000, 10
// Output: 1024.00000

// Example 2:

// Input: 2.10000, 3
// Output: 9.26100


/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function(x, n) {
  if (n === 0) return 1
  if (n < 0) {
    x = 1 / x
    n = -n
  }
  return n % 2 ? myPow(x * x, Math.trunc(n / 2)) * x : myPow(x * x, n / 2)
}

;[
  [2.00000, 10],
  [2.10000, 3],
  [34.00515, -3],
].forEach(args => {
  console.log(myPow(...args), Math.pow(...args))
})

// Solution:
// 使用递归求解。
// 不过要注意一下几点：
// 1. 幂数为奇数时，该如何递归；
// 2. 幂数为负数时，该如何递归；
// 3. 终止情况。
// 4. 是否考虑幂数为分数的情况。

// Submission Result: Accepted
