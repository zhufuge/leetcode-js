// 45. Jump Game II
// Hard   26%

// Given an array of non-negative integers, you are initially positioned at the
// first index of the array.

// Each element in the array represents your maximum jump length at that
// position.

// Your goal is to reach the last index in the minimum number of jumps.

// For example:
// Given array A = [2,3,1,1,4]

// The minimum number of jumps to reach the last index is 2. (Jump 1 result from
// index 0 to 1, then 3 steps to the last index.)

// Note:
// You can assume that you can always reach the last index.

/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function(nums) {
  let result = 0, via = 0, max = 0
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, i + nums[i])
    if (via === i) {
      result++
      via = max
    }
  }

  return result
}

;[
  [3,2,1],                      // 1
  [2,3,1,1,4],                  // 2
  [1,3,2,3,0,1,2,1,1],          // 4
  [1,1,1,1],                    // 3
  [10,9,8,7,6,5,4,3,2,1,1,0],   // 2
].forEach(nums => {
  console.log(jump(nums))
})

// Solution:
// 使用贪心算法。
// 每次都选择一个最远的进行试跳，若过程中还遇到更远的，先保存。
// 因为被试跳的位置总是先会被遍历，因此，在跳到更远的位置前，都会进行更新。

// Submission Result: Accepted
