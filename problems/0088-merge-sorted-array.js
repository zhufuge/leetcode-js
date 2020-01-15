// 88. Merge Sorted Array
// Easy   32%

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
  let p = m - 1, q = n - 1, k = n + m - 1
  while (q >= 0) {
    if (p < 0 || nums1[p] <= nums2[q]) {
      nums1[k--] = nums2[q--]
    } else {
      nums1[k--] = nums1[p--]
    }
  }
}

;[
  [
    [1, 2, 2, 0, 0, 0], 3,
    [4, 5, 6], 3,
  ],
  [
    [3, 4, 9, 11, 0, 0, 0, 0, 0], 4,
    [1, 5, 8, 10, 16], 5,
  ],
].forEach(args => {
  merge(...args)
  console.log(args[0])
})

// Solution:
// 方法一：
// 使用插入法，从头开始，找到合适的位置进行插入，后移其后数字。

// 方法二：
// 从后向前填，从两个数组末尾选择较大的数，并填入第一个数组的末尾。

// Submission Result: Accepted
