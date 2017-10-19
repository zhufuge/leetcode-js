// 35. Search Insert Position
// Easy 39% locked:false

// Given a sorted array and a target value, return the index if the target is
// found. If not, return the index where it would be if it were inserted in
// order.

// You may assume no duplicates in the array.

// Here are few examples.
// [1,3,5,6], 5 → 2
// [1,3,5,6], 2 → 1
// [1,3,5,6], 7 → 4
// [1,3,5,6], 0 → 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  let i = 0, j = nums.length - 1, mid
  while (i <= j) {
    mid = Math.trunc((i + j) / 2)
    if (target < nums[mid]) j = mid - 1
    else if (target > nums[mid]) i = mid + 1
    else return mid
  }
  return Math.trunc((i + j + 1) / 2)
}

console.log(searchInsert([1, 3, 5, 6], 7))
