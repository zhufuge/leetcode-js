// 53. Maximum Subarray
// Easy 39% locked:false

// Find the contiguous subarray within an array (containing at least one number)
// which has the largest sum.

// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.

// click to show more practice.
//   More practice:

// If you have figured out the O(n) solution, try coding another solution using
// the divide and conquer approach, which is more subtle.


/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  if (nums === void 0 || nums.length === 0) return 0

  const n = nums.length
  let max = nums[0], that = 0
  for (let i = 0; i < n; i++) {
    that += nums[i]
    if (that > max) max = that
    if (that < 0) that = 0
  }

  return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6)
console.log(maxSubArray([-1]), -1)
console.log(maxSubArray([1]), 1)
