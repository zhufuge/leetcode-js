// 190. Reverse Bits
// Easy   29%


// Reverse bits of a given 32 bits unsigned integer.

// For example, given input 43261596 (represented in binary as
// 00000010100101000001111010011100), return 964176192 (represented in binary as
// 00111001011110000010100101000000).

// Follow up:
// If this function is called many times, how would you optimize it?

// Related problem: Reverse Integer

// Credits:Special thanks to @ts for adding this problem and creating all test
// cases.


/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function(n) {
  let result = 0
  for (let i = 0; i < 32; i++) {
    result = result * 2 + n % 2
    n = n >>> 1
  }
  return result
}

;[
  43261596,                     // 964176192
  1,                            // 2147483648
  4294967295,                   // 4294967295
].forEach(n => {
  console.log(reverseBits(n))
})

// Solution:
// 构造一个新的数字。
// 像两个栈传递数据一样。

// Submission Result: Accepted
