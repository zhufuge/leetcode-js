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
    if (i + 1 >= m) {
      curr = nums2[++j]
    } else if (j + 1 >= n) {
      curr = nums1[++i]
    } else if (nums1[i] > nums2[j]) {
      curr = nums2[j++]
    } else if (nums1[i] < nums2[j]){
      curr = nums1[i++]
    } else {
      curr = (nums1[i + 1] > nums2[j + 1])
        ? nums2[j++]
        : nums1[i++]
    }
    console.log(k, i, j, prev, curr);
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

const a = [1, 2],
      b = [3, 4]
console.log(test(a, b));
console.log(findMedianSortedArrays(a, b));
