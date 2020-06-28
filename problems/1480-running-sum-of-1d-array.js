// 1480. Running Sum of 1d Array
// Easy   95%


// Given an array nums. We define a running sum of an array as runningSum[i] =
// sum(nums[0]&hellip;nums[i]).
// Return the running sum of nums.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1,
// 1+1+1+1+1].
// Example 3:
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// Constraints:
//     1 <= nums.length <= 1000
//     -10^6 <= nums[i] <= 10^6


/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1]
  }
  return nums
}

;[
  [1,2,3,4],
  [1,1,1,1,1],
  [3,1,2,10,1]
].forEach((nums) => {
  console.log(runningSum(nums))
})

// Solution:
// 遍历数组，让 nums[i] = nums[i] + nums[i - 1] 即可。

// Submission Result: Accepted