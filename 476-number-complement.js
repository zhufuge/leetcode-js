// 476. Number Complement
// Easy   60%


// Given a positive integer, output its complement number. The complement
// strategy is to flip the bits of its binary representation.

// Note:

// The given integer is guaranteed to fit within the range of a 32-bit signed
// integer.
// You could assume no leading zero bit in the integer’s binary representation.

// Example 1:

// Input: 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and
// its complement is 010. So you need to output 2.

// Example 2:

// Input: 1
// Output: 0
// Explanation: The binary representation of 1 is 1 (no leading zero bits), and
// its complement is 0. So you need to output 0.


/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function(num) {
  let result = num ? 0 : 1, i = 0
  while (num > 0) {
    result += (num % 2 ^ 1) << (i++)
    num = num >> 1
  }
  return result
}

;[
  5,                            // 2
  1,                            // 0
  2,                            // 1
].forEach(num => {
  console.log(findComplement(num))
})

// Solution:
// num % 2 ^ 1 ：取得num的二进制的最后一位的bit的取反。
// 用 i 记录是在第几位，用 << 左移运算来将其移到合适的位置，并加到原来的数上。

// Submission Result: Accepted
