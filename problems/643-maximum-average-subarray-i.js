// 643. Maximum Average Subarray I
// Easy   37%


// Given an array consisting of n integers, find the contiguous subarray of given
// length k that has the maximum average value. And you need to output the
// maximum average value.

// Example 1:

// Input: [1,12,-5,-6,50,3], k = 4
// Output: 12.75
// Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75

// Note:

// 1 <= k <= n <= 30,000.
// Elements of the given array will be in the range [-10,000, 10,000].


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function(nums, k) {
  let result = -Infinity
  for (let i = 0, sum = 0, n = nums.length; i < n; i++) {
    sum += i < k ? nums[i] : nums[i] - nums[i - k]
    if (i >= k - 1) result = Math.max(result, sum)
  }
  return result / k
}

;[
  [[1,12,-5,-6,50,3], 4],            // 12.75
  [[1,2], 1],                        // 2
  [[-1], 1],                         // -1
].forEach((args) => {
  console.log(findMaxAverage(...args))
})

// Solution:
// 想象拥有一个长度为 k 的队列，随着队列不断沿着数组向前，新的元素不断进入队列的
// 头部，而队列尾部的元素不断退出。队列满了之后，前进一位，与记录中的队列总和比
// 较，更新记录。
// 记录过程只记录总和，没必要算平均数，总和越大平均越大（k 确定）。

// 编程经验：每次使用 Math.max(.min) 时，都应该注意两个参数的初始值。


// Submission Result: Accepted
