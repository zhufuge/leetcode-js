// 88. Merge Sorted Array
// Easy 32% locked:false

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as
// one sorted array.

// Note: You may assume that nums1 has enough space (size that is greater or
// equal to m + n) to hold additional elements from nums2. The number of
// elements initialized in nums1 and nums2 are m and n respectively.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  if (n === 0) return
  if (m === 0) {
    nums2.forEach((v, i) => nums1[i] = v)
    return
  }

  for (let i = 0, j = 0; i < m || j < n;) {
    if (i >= m) nums1[m + j] = nums2[j++]
    else if (j < n && nums1[i + j] >= nums2[j]) {
      for (let k = m + j; k > i + j; k--) nums1[k] = nums1[k - 1]
      nums1[i + j] = nums2[j++]
    } else i++
    console.log(i, j, nums1, nums2);
  }
}

const a = [1, 2, 2, 0, 0, 0],
      b = [4, 5, 6]
merge(a, 3, b, b.length)
console.log(a)
