// 33. Search in Rotated Sorted Array
// Medium 32% locked:false

// Suppose an array sorted in ascending order is rotated at some pivot unknown
// to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// You are given a target value to search. If found in the array return its
// index, otherwise return -1.

// You may assume no duplicate exists in the array.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  const iter = (i, j) => {
    if (i > j) return -1
    const mid = Math.trunc((i + j) / 2)
    if (target < nums[mid]) {
      const p = iter(i, mid - 1),
            q = nums[mid] > nums[j] ? iter(mid + 1, j) : -1
      return p !== -1 ? p : q
    } else if (target > nums[mid]) {
      const p = iter(mid + 1, j),
            q = nums[mid] < nums[i] ? iter(i, mid - 1) : -1
      return p !== -1 ? p : q
    } else return mid
  }

  return iter(0, nums.length - 1)
}


console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
