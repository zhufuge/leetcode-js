// 674. Longest Continuous Increasing Subsequence
// Easy 42% locked:false


// Given an unsorted array of integers, find the length of longest continuous
// increasing subsequence.

// Example 1:

// Input: [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5], its
// length is 3.
// Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous
// one where 5 and 7 are separated by 4.

// Example 2:

// Input: [2,2,2,2,2]
// Output: 1
// Explanation: The longest continuous increasing subsequence is [2], its length
// is 1.

// Note:
// Length of the array will not exceed 10,000.


/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = function(nums) {
  const length = nums.length
  let result = 0, continuous = 0
  for (let i = 0; i < length; i++) {
    continuous = nums[i] > (nums[i - 1] || 0) ? continuous + 1 : 1
    if (continuous > result) result = continuous
  }

  return result
}

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]))
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]))
console.log(findLengthOfLCIS([1, 3, 5, 4, 2, 3, 4, 5]))
console.log(findLengthOfLCIS([]))
console.log(findLengthOfLCIS([0]))
console.log(findLengthOfLCIS([-6]))
console.log(findLengthOfLCIS([1, 2, 5, 8, 0]))

// Solution:
// 寻找最长的连续增量的长度
// 记录两个变量，一个是最长长度，第二个是目前连续增量的长度，分别初始化为 0 。
// 遍历一遍数组，每当下一位大于上一位，则增加当前长度，否则将初始化为 1 。

// Submission Result: Accepted
