// 665. Non-decreasing Array
// Easy 21% locked:false


// Given an array with n integers, your task is to check if it could become
// non-decreasing by modifying at most 1 element.

// We define an array is non-decreasing if array[i] <= array[i + 1] holds for
// every i (1 <= i < n).

// Example 1:

// Input: [4,2,3]
// Output: True
// Explanation: You could modify the first 4 to 1 to get a non-decreasing array.

// Example 2:

// Input: [4,2,1]
// Output: False
// Explanation: You can't get a non-decreasing array by modify at most one
// element.

// Note:
// The n belongs to [1, 10,000].


/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = function(nums) {
  for (let end = nums.length - 1, i = 0, first = true; i < end; i++) {
    if (nums[i] > nums[i + 1]) {
      if (!first) return false
      if ((nums[i - 1] || -Infinity) > nums[i + 1] &&
          nums[i] > (nums[i + 2] || Infinity)) return false
      first = false
    }
  }
  return true
}

;[
  [],                           // true
  [-1],                         // true
  [4, 2, 3],                    // true
  [4, 2, 1],                    // false
  [2, 3, 4, 3, 4],              // true
  [2, 3, 4, 2, 3],              // false
  [2, 3, 3, 2, 4],              // true
].forEach((nums) => {
  console.log(checkPossibility(nums))
})

// Solution:

// 迭代一次。
// 变量 first 保证最多只改变一次。
// 若过程中，没有减小，则检查通过。
// 否则，第一次遇到减小的值时，判断是否能将改成合适的值（只关心能不能改成，而不
// 关心改成什么值），能则继续，否则返回 false。

// 关键在于判断能否改成合适的值
// 只有以下两种情况能改成：
// 1. nums[i-1] <= nums[i+1]
//    这种情况 nums[i] 只要改成满足 nums[i-1] <= nums[i] <= nums[i+1] 即可
// 2. nums[i] <= nums[i+2]
//    这种情况 nums[i+1] 只要改成满足 nums[i] <= nums[i+1] <= nums[i+2] 即可

// Submission Result: Accepted
