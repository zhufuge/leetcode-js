// 540. Single Element in a Sorted Array
// Medium

// Given a sorted array consisting of only integers where every element appears
// twice except for one element which appears once. Find this single element
// that appears only once.

// Example 1:

// Input: [1,1,2,3,3,4,4,8,8]
// Output: 2

// Example 2:

// Input: [3,3,7,7,10,11,11]
// Output: 10

// Note: Your solution should run in O(log n) time and O(1) space.

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function(nums) {
  for (let i = 0, n = nums.length; i < n; i++) {
    if (!(nums[i] === nums[i - 1] || nums[i] === nums[i + 1])) return nums[i]
  }
  return nums[0]
}

;[
  [1,1,2,3,3,4,4,8,8],          // 2
  [3,3,7,7,10,11,11],           // 10
  [0],                          // 0
  [1,1,2],                      // 2
].forEach(nums => {
  console.log(singleNonDuplicate(nums))
})

// Solution:
// 因为已经排好序，因此只需要从头开始遍历数组，
// 返回遇到第一个既不等于前一个数，也不等于后一个数的数。

// Submission Result: Accepted
