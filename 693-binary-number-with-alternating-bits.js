// 693. Binary Number with Alternating Bits
// Easy 53% locked:false

// Given a positive integer, check whether it has alternating bits: namely, if
// two adjacent bits will always have different values.

// Example 1:

// Input: 5
// Output: True
// Explanation:
// The binary representation of 5 is: 101

// Example 2:

// Input: 7
// Output: False
// Explanation:
// The binary representation of 7 is: 111.

// Example 3:

// Input: 11
// Output: False
// Explanation:
// The binary representation of 11 is: 1011.

// Example 4:

// Input: 10
// Output: True
// Explanation:
// The binary representation of 10 is: 1010.


/**
 * @param {number} n
 * @return {boolean}
 */
const hasAlternatingBits = function(n) {
  while (n) {
    const prev = n & 1
    n = n >> 1
    if ((n & 1) === prev) return false
  }

  return true
}

console.log(hasAlternatingBits(4))
console.log(hasAlternatingBits(5))
console.log(hasAlternatingBits(7))
console.log(hasAlternatingBits(11))
console.log(hasAlternatingBits(10))

// Solution:
// 关键在于获得每一位上的比特，并与前或者后的比特比较
// & 1 运算可以获得末位的比特值。
// >> 算术右移（也可以是 >>> 逻辑右移，输入为正数），右移后，比较末位时候与之前的相同
// 题目，思路，代码都很简单。
// 时间复杂度 O(log(n))
// 空间复杂度 O(1)

// Submission Result: Accepted
