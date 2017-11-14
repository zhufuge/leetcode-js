// 136. Single Number
// Easy 54% locked:false

// Given an array of integers, every element appears twice except for one. Find
// that single one.

// Note: Your algorithm should have a linear runtime complexity. Could you
// implement it without using extra memory?

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  let result = 0
  for (let num of nums) result ^= num
  return result
}

;[
  [1,1,2,3,3],                  // 2
].forEach(nums => {
  console.log(singleNumber(nums))
})

// Solution:
// 利用以下异或运算原理：
// a ^ a = 0
// a ^ 0 = a
// 以及异或运算的交换律：
// a ^ b ^ a = a ^ a ^ b = 0 ^ b = b

// Submission Result: Accepted
