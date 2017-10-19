// 4. Median of Two Sorted Arrays
// Hard 22% locked:false

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
  const m = nums1.length, n = nums2.length
  const findSortedArray = (a, n) =>
        Number.isInteger(n)
        ? (a[n - 1] + a[n]) / 2
        : a[Math.floor(n)]
  if (m === 0) return findSortedArray(nums2, n / 2)
  if (n === 0) return findSortedArray(nums1, m / 2)

  const mid = Math.floor((m + n) / 2)

  let curr, prev
  for (let i = 0, j = 0, k = 0; k <= mid; k++) {
    prev = curr
    if (i >= m) curr = nums2[j++]
    else if (j >= n) curr = nums1[i++]
    else if (nums1[i] > nums2[j]) curr = nums2[j++]
    else if (nums1[i] < nums2[j]) curr = nums1[i++]
    else {
      curr = (nums1[i + 1] > nums2[j + 1])
        ? nums2[j++]
        : nums1[i++]
    }
  }

  return (m + n) % 2 ? curr : (prev + curr) / 2
}

const test = function(x, y) {
  const s = x.concat(y)
  s.sort((a, b) => a - b)
  const mid = s.length / 2
  return Number.isInteger(mid)
    ? (s[mid - 1] + s[mid]) / 2
    : s[Math.floor(mid)]
}

// O(log(min(m, n)))
function median(A, B) {
  let m = A.length, n = B.length
  if (m > n) [A, B, m, n] = [B, A, n, m]
  if (n === 0) throw Error('Both are []')

  const half_len = Math.floor((m + n + 1) / 2)
  let imin = 0, imax = m
  while (imin <= imax) {
    const i = Math.floor((imin + imax) / 2)
    const j = half_len - i
    if (i < m && B[j - 1] > A[i]) {
      // i is too small, must increase it
      imin = i + 1
    } else if (i > 0 && A[i - 1] > B[j]) {
      // i is too big, must decrease it
      imax = i - 1
    } else {
      // i is perfect
      let max_of_left
      if (i === 0) max_of_left = B[j - 1]
      else if (j === 0) max_of_left = A[i - 1]
      else max_of_left = Math.max(A[i - 1], B[j - 1])

      if ((m + n) % 2 === 1) return max_of_left

      let min_of_right
      if (i === m) min_of_right = B[j]
      else if (j === n) min_of_right = A[i]
      else min_of_right = Math.min(A[i], B[j])

      return (max_of_left + min_of_right) / 2.0
    }
  }
}

const a = [1, 2],
      b = [3, 4]
console.log(test(a, b));
console.log(findMedianSortedArrays(a, b))
console.log(median(a, b));
