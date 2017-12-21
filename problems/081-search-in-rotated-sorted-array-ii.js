// 81. Search in Rotated Sorted Array II
// Medium 32% locked:false

// Follow up for "Search in Rotated Sorted Array":
// What if duplicates are allowed?

// Would this affect the run-time complexity? How and why?

// Suppose an array sorted in ascending order is rotated at some pivot unknown
// to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// Write a function to determine if a given target is in the array.

// The array may contain duplicates.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
const search = function(nums, target) {
  const n = nums.length
  if (n === 0) return false

  const binary = (i, j) => {
    if (i > j) return false
    const mid = (i + j) >> 1
    if (target < nums[mid]) {
      return binary(i, mid - 1) ||
        ((nums[mid] >= nums[j]) ? binary(mid + 1, j) : false)
    } else if (target > nums[mid]) {
      return binary(mid + 1, j) ||
        ((nums[mid] <= nums[i]) ? binary(i, mid - 1) : false)
    } else return true
  }

  return binary(0, n - 1)
}

console.log(search([4, 4, 4, 5, 1, 1, 1, 2, 2, 2, 2], 3))
