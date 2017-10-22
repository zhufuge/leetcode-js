// 1. Two Sum
// Easy 35% locked:false

// Given an array of integers, return indices of the two numbers such that they
// add up to a specific target.

// You may assume that each input would have exactly one solution, and you may
// not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const hash = {}
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (hash[nums[i]] !== undefined) return [hash[nums[i]], i]
    hash[target - nums[i]] = i
  }
  return [-1, -1]
}


// Solution:
// 使用哈希表，以每位数的互补数为键名，该数的位置为值。
// 如果一个数对应等于一个键名，说明找到了互补数。
// （哈希的应用）
// 时间复杂度 O(n)
// 空间复杂度 O(n)



// Submission Result: Accepted
