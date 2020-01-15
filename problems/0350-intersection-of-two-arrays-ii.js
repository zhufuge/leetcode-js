// 350. Intersection of Two Arrays II
// Easy   44%


// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

// Note:

// Each element in the result should appear as many times as it shows in both
// arrays.
// The result can be in any order.

// Follow up:

// What if the given array is already sorted? How would you optimize your
// algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is
// better?
// What if elements of nums2 are stored on disk, and the memory is limited such
// that you cannot load all elements into the memory at once?


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
  const result = [], hash = {}
  for (let n of nums1) hash[n] = (hash[n] || 0) + 1
  for (let n of nums2) {
    if (hash[n]) {
      result.push(n)
      hash[n]--
    }
  }
  return result
}

;[
  [[1,2,2,1],[2,2]],            // [2,2]
].forEach(args => {
  console.log(intersect(...args))
})

// Solution:
// 一个哈希记录在第一个数组中出现的数及个数。
// 在第二个数组中的每个数，只要其出现在哈希中且其值不为0，则选择该数。


// Submission Result: Accepted
