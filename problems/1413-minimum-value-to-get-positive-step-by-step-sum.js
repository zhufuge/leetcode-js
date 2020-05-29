// 1413. Minimum Value to Get Positive Step by Step Sum
// Easy   65%


// Given an array of integers nums, you start with an initial positive value
// startValue.
// In each iteration, you calculate the step by step sum of startValue plus
// elements in nums (from left to right).
// Return the minimum positive value of startValue such that the step by step sum
// is never less than 1.

// Example 1:
// Input: nums = [-3,2,-3,4,2]
// Output: 5
// Explanation: If you choose startValue = 4, in the third iteration your step by
// step sum is less than 1.
//                 step by step sum
//                 startValue = 4 | startValue = 5 | nums
//                   (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
//                   (1 +2 ) = 3  | (2 +2 ) = 4    |   2
//                   (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
//                   (0 +4 ) = 4  | (1 +4 ) = 5    |   4
//                   (4 +2 ) = 6  | (5 +2 ) = 7    |   2
// Example 2:
// Input: nums = [1,2]
// Output: 1
// Explanation: Minimum start value should be positive.
// Example 3:
// Input: nums = [1,-2,-3]
// Output: 5

// Constraints:
//     1 <= nums.length <= 100
//     -100 <= nums[i] <= 100


/**
 * @param {number[]} nums
 * @return {number}
 */
const minStartValue = function(nums) {
  let res = sum = 1
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (sum <= 0) {
      res += -sum + 1
      sum = 1
    }
  }
  return res
}

;[
  [-3,2,-3,4,2], // 5
  [1,2], // 1
  [1,-2,-3], // 5
  [-2,-3], // 6
].forEach((nums) => {
  console.log(minStartValue(nums))
})

// Solution:
// 初始值为 res=1，当前总和为 sum=1
// 遍历数组，计算当前总和
// 当 sum <= 0 时，改变初始值，使 sum = 1

// Submission Result: Accepted