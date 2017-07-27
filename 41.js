// Given an unsorted integer array, find the first missing positive integer.

// For example,
// Given [1,2,0] return 3,
// and [3,4,-1,1] return 2.

// Your algorithm should run in O(n) time and uses constant space.


/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function(nums) {
  const n = nums.length

  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      const t = nums[i] - 1
      ;[nums[i], nums[t]] = [nums[t], nums[i]]
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) return i + 1
  }

  return n + 1
}

console.log(firstMissingPositive([2, 5, 4, -1, 2, 1, 6, 3]))
