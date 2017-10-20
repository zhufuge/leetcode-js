// 45. Jump Game II
// Hard 26% locked:false

// Given an array of non-negative integers, you are initially positioned at the
// first index of the array.

// Each element in the array represents your maximum jump length at that
// position.

// Your goal is to reach the last index in the minimum number of jumps.

// For example:
// Given array A = [2,3,1,1,4]

// The minimum number of jumps to reach the last index is 2. (Jump 1 step from
// index 0 to 1, then 3 steps to the last index.)

// Note:
// You can assume that you can always reach the last index.

/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function(nums) {
  if (nums === void 0 || nums.length <= 1) return 0

  const n = nums.length
  let step = 1
  for (let i = 0; i + nums[i] < n - 1; i++) {
    if (nums[i] !== 1) {
      let next = i + 1, max = 0
      for (let j = 1; j <= nums[i]; j++) {
        if (nums[i + j] + j > max) {
          next = i + j
          max = nums[i + j] + j
        }
      }
      i = next - 1
    }
    step++
  }

  return step
}
console.log(jump([3,2,1]), 1)
console.log(jump([2, 3, 1, 1, 4]))
console.log(jump([1, 3, 2, 3, 0, 1, 2, 1, 1]))
console.log(jump([5,6,4,4,6,9,4,4,7,4,4,8,2,6,8,1,5,9,6,5,2,7,9,7,9,6,9,4,1,6,8,8,4,4,2,0,3,8,5]))
console.log(jump([1,1,1,1]))
console.log(jump([10,9,8,7,6,5,4,3,2,1,1,0]), 2)
