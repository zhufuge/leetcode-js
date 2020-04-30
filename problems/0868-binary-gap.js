// 868. Binary Gap
// Easy   60%


// Given a positive integer N, find and return the longest distance between two
// consecutive 1's in the binary representation of N.
// If there aren't two consecutive 1's, return 0.

// Example 1:
// Input: 22
// Output: 2
// Explanation:
// 22 in binary is 0b10110.
// In the binary representation of 22, there are three ones, and two consecutive
// pairs of 1's.
// The first consecutive pair of 1's have distance 2.
// The second consecutive pair of 1's have distance 1.
// The answer is the largest of these two distances, which is 2.
// Example 2:
// Input: 5
// Output: 2
// Explanation:
// 5 in binary is 0b101.
// Example 3:
// Input: 6
// Output: 1
// Explanation:
// 6 in binary is 0b110.
// Example 4:
// Input: 8
// Output: 0
// Explanation:
// 8 in binary is 0b1000.
// There aren't any consecutive pairs of 1's in the binary representation of 8,
// so we return 0.

// Note:
//     1 <= N <= 10^9


/**
 * @param {number} N
 * @return {number}
 */
const binaryGap = function(N) {
  let result = 0, count = -Infinity
  while (N > 0) {
    if (N % 2) {
      result = Math.max(result, count + 1)
      count = 0
    } else count++
    N = N >>> 1
  }
  return result
}

const better = function(N) {
  let result = 0
  for (let d = -32; N > 0; N = N >>> 1, d++) {
    if (N % 2) {
      result = Math.max(result, d)
      d = 0
    }
  }
  return result
}

;[
  22, // 2
  5,  // 2
  6,  // 1
  8,  // 0
  9,  // 3
].forEach((N) => {
  console.log(binaryGap(N))
  console.log(better(N))
})

// Solution:
// 用一个变量记录中间产生的最大距离（即结果），另一个变量记录计算过程中的距离 (count)。
// 先初始化 count 为无限小，表示还没有遇到 "1"，还不用计算距离。
// 遇到 1 时，更新 result，并初始化 count = 0。

// 更简洁的方法
// 将 d 初始化为 -32 (因为 N 的最大的值为 31 位的)，
// 优化过程。

// Submission Result: Accepted