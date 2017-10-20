// 55. Jump Game
// Medium 29% locked:false

// Given an array of non-negative integers, you are initially positioned at the
// first index of the array.

// Each element in the array represents your maximum jump length at that
// position.

// Determine if you are able to reach the last index.

// For example: A = [2,3,1,1,4], return true.

// A = [3,2,1,0,4], return false.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
  if (nums === void 0 || nums.length === 0) return false
  const n = nums.length

  for (let i = 0; i + nums[i] < n - 1; i++) {
    if (nums[i] === 0) return false
    let next = 1, max = 0
    for (let j = nums[i]; j > 0; j--) {
      if (j + nums[i + j] > max) {
        max = j + nums[i + j]
        next = j
      }
    }
    i += next - 1
  }

  return true
}

console.log(canJump([2, 3, 1, 1, 4]), true)
console.log(canJump([3, 2, 1, 0, 4]), false)
