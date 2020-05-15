// 747. Largest Number At Least Twice of Others
// Easy   41%


// In a given integer array nums, there is always exactly one largest element.
// Find whether the largest element in the array is at least twice as much as
// every other number in the array.
// If it is, return the index of the largest element, otherwise return -1.
// Example 1:
// Input: nums = [3, 6, 1, 0]
// Output: 1
// Explanation: 6 is the largest integer, and for every other number in the array
// x,
// 6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.

// Example 2:
// Input: nums = [1, 2, 3, 4]
// Output: -1
// Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.

// Note:
//     nums will have a length in the range [1, 50].
//     Every nums[i] will be an integer in the range [0, 99].



/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = function(nums) {
  let res = -1, max = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      res = nums[i] >= max * 2 ? i : -1
      max = nums[i]
    } else {
      if (max < nums[i] * 2) res = -1
    }
  }
  return res
}

;[
  [0,0,0,1], // 3
  [3,6,1,0], // 1
  [1,2,3,4], // -1
  [6,3,1,0], // 0
  [0,1,3,6], // 3
].forEach((nums) => {
  console.log(dominantIndex(nums))
})

// Solution:

// 想法
// 遍历数组，记录最大值和第二大值，最后比较 最大值是否大于或等于第二大值的2倍。

// 想法2
// 只记录一个最大值 max
// 1. A[i] > max * 2，则设置 res，并替换 max
// 2. A[i] > max && A[i] < max * 2，则 res = -1，并替换 max
// 3. A[i] <= max && A[i] > max / 2，则 res = -1
// 4. A[i] < max / 2，跳过

// Submission Result: Accepted