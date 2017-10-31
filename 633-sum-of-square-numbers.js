// 633. Sum of Square Numbers
// Easy   32%


// Given a non-negative integer c, your task is to decide whether there're two
// integers a and b such that a^2 + b^2 = c.

// Example 1:

// Input: 5
// Output: True
// Explanation: 1 * 1 + 2 * 2 = 5

// Example 2:

// Input: 3
// Output: False


/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = function(c) {
  const s = Math.floor(Math.sqrt(c / 2))
  for (let i = 0; i <= s; i++) {
    if (Number.isInteger(Math.sqrt(c - i * i))) return true
  }
  return false
}

;[
  5,                            // true
  3,                            // false
  2,                            // true
  32,                           // true
].forEach(c => {
  console.log(judgeSquareSum(c))
})

// Solution:
// 已知：非负整数 c, 满足 a^2 + b^2 = c，
// 求：整数 a，b 是否存在

// 因为 a^2 <= c
// 所以 0 <= a <= sqrt(c) (b 同理)

// 若假设 a <= b,
// 则 a^2 <= (c / 2)
// 则 0 <= a <= sqrt(c / 2)

// 迭代 a 从 0 到 sqrt(c / 2)，计算 b = sqrt(c - a^2)，
// 如果 b 为整数，则返回 true

// Submission Result: Accepted
