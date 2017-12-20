// 4. Median of Two Sorted Arrays
// Hard 22%

// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity
// should be O(log (m+n)).

// Example 1:

// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0

// Example 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length, n = nums2.length
  if (m > n) [nums1, nums2, m, n] = [nums2, nums1, n, m]

  const half_len = (m + n + 1) >> 1
  let imin = 0, imax = m
  while (imin <= imax) {
    const i = (imin + imax) >> 1, j = half_len - i

    if (i < m && nums2[j - 1] > nums1[i]) imin = i + 1
    else if (i > 0 && nums1[i - 1] > nums2[j]) imax = i - 1
    else {
      let max_of_left
      if (i === 0) max_of_left = nums2[j - 1]
      else if (j === 0) max_of_left = nums1[i - 1]
      else max_of_left = Math.max(nums1[i - 1], nums2[j - 1])

      if ((m + n) % 2) return max_of_left

      let min_of_right
      if (i === m) min_of_right = nums2[j]
      else if (j === n) min_of_right = nums1[i]
      else min_of_right = Math.min(nums1[i], nums2[j])

      return (max_of_left + min_of_right) / 2
    }
  }
}

;[
  [[1, 2], [3]],                // 2
  [[1, 2], [3, 4]],             // 2.5
].forEach(args => {
  console.log(findMedianSortedArrays(...args))
})


// Submission Result: Accepted
