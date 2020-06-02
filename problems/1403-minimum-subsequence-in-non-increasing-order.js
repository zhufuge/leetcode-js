// 1403. Minimum Subsequence in Non-Increasing Order
// Easy   71%


// Given the array nums, obtain a subsequence of the array whose sum of elements
// is strictly greater than the sum of the non included elements in such
// subsequence.
// If there are multiple solutions, return the subsequence with minimum size and
// if there still exist multiple solutions, return the subsequence with the
// maximum total sum of all its elements. A subsequence of an array can be
// obtained by erasing some (possibly zero) elements from the array.
// Note that the solution with the given constraints is guaranteed to be unique.
// Also return the answer sorted in non-increasing order.

// Example 1:
// Input: nums = [4,3,10,9,8]
// Output: [10,9]
// Explanation: The subsequences [10,9] and [10,8] are minimal such that the sum
// of their elements is strictly greater than the sum of elements not included,
// however, the subsequence [10,9] has the maximum total sum of its elements.
// Example 2:
// Input: nums = [4,4,7,6,7]
// Output: [7,7,6]
// Explanation: The subsequence [7,7] has the sum of its elements equal to 14
// which is not strictly greater than the sum of elements not included (14 = 4 +
// 4 + 6). Therefore, the subsequence [7,6,7] is the minimal satisfying the
// conditions. Note the subsequence has to returned in non-decreasing order.
// Example 3:
// Input: nums = [6]
// Output: [6]

// Constraints:
//     1 <= nums.length <= 500
//     1 <= nums[i] <= 100


/**
 * @param {number[]} nums
 * @return {number[]}
 */
const minSubsequence = function(nums) {
  nums.sort((a, b) => b - a)
  const sum = nums.reduce((pre, v) => pre + v, 0)
  let i = 0, subSum = 0
  while (subSum <= sum - subSum) subSum += nums[i++]
  return nums.slice(0, i)
}

;[
  [4,3,10,9,8],
  [4,4,7,6,7],
  [6],
].forEach((nums) => {
  console.log(minSubsequence(nums))
})

// Solution:
// 1）排序，这样可从最大值开始遍历
// 2）计算整个数组的总和 sum
// 3）计算前 i 项的序列总和 subSum ，并比较剩余子序列和（sum - subSum)比较，当
// subSum > sum-subSum 时，返回前 i 项即可。

// Submission Result: Accepted