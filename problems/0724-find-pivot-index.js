// 724. Find Pivot Index
// Easy   42%


// Given an array of integers nums, write a method that returns the "pivot" index
// of this array.

// We define the pivot index as the index where the sum of the numbers to the
// left of the index is equal to the sum of the numbers to the right of the
// index.

// If no such index exists, we should return -1. If there are multiple pivot
// indexes, you should return the left-most pivot index.

// Example 1:

// Input:
// nums = [1, 7, 3, 6, 5, 6]
// Output: 3
// Explanation:
// The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the
// sum of numbers to the right of index 3.
// Also, 3 is the first index where this occurs.

// Example 2:

// Input:
// nums = [1, 2, 3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.

// Note:

// The length of nums will be in the range [0, 10000].
// Each element nums[i] will be an integer in the range [-1000, 1000].


/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function(nums) {
  const n = nums.length
  let left = 0, right = 0
  for (let i = 0; i < n; i++) right += nums[i]
  for (let i = 0; i < n; i++) {
    right -= nums[i]
    if (left === right) return i
    left += nums[i]
  }
  return -1
}

;[
  [1,7,3,6,5,6],                // 3
  [1,2,3],                      // -1
].forEach(nums => {
  console.log(pivotIndex(nums))
})

// Solution:
// left 和 right 变量分别保存左右的和。
// 从第一个元素开始遍历。
// left 初始化为0，right初始化为整个数组的和。
// 每遍历一个元素，先从right中减去该元素，再判断right和left是否相等，再将该元素
// 加到left中，为下一次比较做准备。


// Submission Result: Accepted
