// 349. Intersection of Two Arrays
// Easy   47%


// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

// Note:

// Each element in the result must be unique.
// The result can be in any order.


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
  const result = [], hash1 = {}, hash2 = {}
  for (let n of nums1) hash1[n] = true
  for (let n of nums2) hash2[n] = true
  for (let key in hash1) if (hash2[key]) result.push(parseInt(key))
  return result
}

;[
  [[1,2,2,1],[2,2]],            // [2]
].forEach(args => {
  console.log(intersection(...args))
})

// Solution:
// 两个哈希记录在两个数组中出现的数。
// 选择两个哈希中同时存在的。

// Submission Result: Accepted
