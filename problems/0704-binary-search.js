// 704. Binary Search
// Easy   51%


// Given a sorted (in ascending order) integer array nums of n elements and a
// target value, write a function to search target in nums. If target exists,
// then return its index, otherwise return -1.
// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Note:
//     You may assume that all elements in nums are unique.
//     n will be in the range [1, 10000].
//     The value of each element in nums will be in the range [-9999, 9999].


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    const mid = (left + right) >>> 1
    if (nums[mid] > target) right = mid - 1
    else if (nums[mid] < target) left = mid + 1
    else return mid
  }
  return -1
}

;[
  [[-1,0,3,5,9,12], 9], // 4
  [[-1,0,3,5,9,12], 2], // -1
  [[1,2,3,4,5,6,7], 1], // 0
  [[1,2,3,4,5,6,7], 7], // 6
  [[1,2,3,4,5,6,7,8], 7], // 6
].forEach(([nums, target]) => {
  console.log(search(nums, target))
})

// Solution:
// 设置要遍历的数组的左右边界，left / right
// 每次比较中位数 nums[(left+right)/2] 与 target的大小
// 1. 大于，说明数也许在左半边，设置右边界为 mid - 1
// 2. 小于，说明数也许在右半边，设置左边界为 mid + 1


// Submission Result: Accepted