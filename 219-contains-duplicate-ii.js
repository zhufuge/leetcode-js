// 219. Contains Duplicate II
// Easy   32%


// Given an array of integers and an integer k, find out whether there are two
// distinct indices i and j in the array such that nums[i] = nums[j] and the
// absolute difference between i and j is at most k.


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function(nums, k) {
  const n = nums.length, hash = {}
  for (let i = 0; i < n; i++) {
    const num = nums[i]
    if (hash[num] != null && i - hash[num] <= k) return true
    hash[num] = i
  }
  return false
}

;[
  [[1,2,3,4,1,4,2,5,3], 0],     // false
  [[1,2,3,4,1,4,2,5,3], 1],     // false
  [[1,2,3,4,1,4,2,5,3], 2],     // true
  [[-1,-1], 1],                 // true
].forEach(args => {
  console.log(containsNearbyDuplicate(...args))
})

// Solution:
// 用一个哈希保存一个字符最后一次出现的位置，
// 每次遇到这个字符是先和哈希用的该字符比较位置，若小于或等于 k，则返回 true。
// 否则返回 false。

// Submission Result: Accepted
