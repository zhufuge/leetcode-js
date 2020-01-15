// 367. Valid Perfect Square
// Easy   38%


// Given a positive integer num, write a function which returns True if num is a
// perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

// Example 1:

// Input: 16
// Returns: True

// Example 2:

// Input: 14
// Returns: False

// Credits:Special thanks to @elmirap for adding this problem and creating all
// test cases.


/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function(num) {
  let t = num
  while (Math.abs(t - num / t) > 1) t = (t + num / t) / 2
  return Math.pow(t >> 0, 2) === num
}

;[
  16,                           // true
  14,                           // false
].forEach(num => {
  console.log(isPerfectSquare(num))
})

// Solution:
// 既然不能用内置函数，那就自己实现一个。
// 使用牛顿迭代法来求平方根值，当迭代值与前一个的差小于 1 时截至。
// 再取该的整数部分的平方，看是否等于 num。

// 为什么到第一次小于 1 就截至了呢？
// 因为这时整数部分已经确定了，而我们只需要整数部分。

// Submission Result: Accepted
