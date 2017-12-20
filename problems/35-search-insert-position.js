// 35. Search Insert Position
// Easy   39%

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
  let i = 0, j = nums.length - 1
  while (i <= j) {
    const mid = (i + j) >> 1
    if (target < nums[mid]) j = mid - 1
    else if (target > nums[mid]) i = mid + 1
    else return mid
  }
  return (i + j + 1) >> 1
}

;[
  [[1,3,5,6], 5],               // 2
  [[1,3,5,6], 2],               // 1
  [[1,3,5,6], 7],               // 4
  [[1,3,5,6], 0],               // 0
].forEach(args => {
  console.log(searchInsert(...args))
})

// Solution:
// 二分查找法
// 若找到相同的数，则插入该位置（如题意)
// 若未找到，则插入最后查找到的位置上。

// 关键在于编码的细节上。

// Submission Result: Accepted
