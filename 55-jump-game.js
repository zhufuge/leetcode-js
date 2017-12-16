// 55. Jump Game
// Medium   29%

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
  let lastPos = nums.length - 1
  for (let i = lastPos; i >= 0; i--) {
    if (i + nums[i] >= lastPos) lastPos = i
  }
  return lastPos === 0
}

;[
  [2, 3, 1, 1, 4],              // true
  [3, 2, 1, 0, 4],              // false
].forEach(nums => {
  console.log(canJump(nums))
})

// Solution:
// 从后面开始向前遍历，
// 判断当前位置是否能跳到终点，若能则将终点调整为该位置。
// 否则判断前一个位置。

// 最后，若终点移到了开始位置，则说明从开始位置能跳到终点。

// 逆向思维。

// Submission Result: Accepted
