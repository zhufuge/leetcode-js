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
  const n = nums.length
  if (n <= 1) return 0

  const jumpFrom = (i, step) => {
    if (i + nums[i] >= n - 1) return step
    if (nums[i] === 0) return -1
    const steps = []
    for (let j = 1; j <= nums[i]; j++) {
      const t = jumpFrom(i + j, 1)
      if (t !== -1) steps.push(t)
    }
    if (steps.length === 0) return -1
    return step + steps.reduce((m, v) => Math.min(m, v))
  }

  return jumpFrom(0, 1)
}

//console.log(jump([2, 3, 1, 1, 4]))
console.log(jump([1, 3, 2, 3, 0, 1, 2, 1, 1]))
