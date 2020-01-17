// 1137. N-th Tribonacci Number
// Easy   57%


// The Tribonacci sequence Tn is defined as follows:
// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
// Given n, return the value of Tn.

// Example 1:
// Input: n = 4
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
// Example 2:
// Input: n = 25
// Output: 1389537

// Constraints:
//     0 <= n <= 37
//     The answer is guaranteed to fit within a 32-bit integer, ie. answer <=
// 2^31 - 1.


/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = function(n) {
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1
  let a = 0, b = 1, c = 1
  for (let i = 0; i <= n - 3; i++) {
    let d = a + b + c
    a = b
    b = c
    c = d
  }
  return c
}

;[
  4,  // 4
  25, // 1389537
].forEach((n) => {
  console.log(tribonacci(n))
})

// Solution:
// 使用递归的话，会导致同一个 Tn 被计算多次，不仅重复计算，而且增加了函数堆栈
// 使用 3 个变量来保存计算过程的结果就行了

// Submission Result: Accepted