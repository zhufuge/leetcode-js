// 1009. Complement of Base 10 Integer
// Easy   60%


// Every non-negative integer N has a binary representation.  For example, 5 can
// be represented as "101" in binary, 11 as "1011" in binary, and so on.  Note
// that except for N = 0, there are no leading zeroes in any binary
// representation.
// The complement of a binary representation is the number in binary you get when
// changing every 1 to a 0 and 0 to a 1.  For example, the complement of "101" in
// binary is "010" in binary.
// For a given number N in base-10, return the complement of it's binary
// representation as a base-10 integer.

// Example 1:
// Input: 5
// Output: 2
// Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2
// in base-10.
// Example 2:
// Input: 7
// Output: 0
// Explanation: 7 is "111" in binary, with complement "000" in binary, which is 0
// in base-10.
// Example 3:
// Input: 10
// Output: 5
// Explanation: 10 is "1010" in binary, with complement "0101" in binary, which
// is 5 in base-10.

// Note:
//     0 <= N < 10^9
//     This question is the same as 476:
// https://leetcode.com/problems/number-complement/


/**
 * @param {number} N
 * @return {number}
 */
const bitwiseComplement = function(N) {
  let X = 1
  while (N > X) X = X * 2 + 1
  return X - N
}

;[
  0,      // 1
  5,      // 2
  7,      // 0
  10,     // 5
  8,      // 7
].forEach((N) => {
  console.log(bitwiseComplement(N))
})

// Solution:
// 1. 直接
// 使用过 N % 2 和 N >>> 1 可从左到右依次获得 N 的二进制数
// 再利用 ^ 异或运算符来完成 01 转换
// 最后利用 result += (0|1) * 2**i 来完成倒序二进制的值计算

// 2. 互补
// input + output = 111...11
// 111...11的位数与input相同

// Submission Result: Accepted