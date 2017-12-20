// 594. Longest Harmonious Subsequence
// Easy   41%


// We define a harmonious array is an array where the difference between its
// maximum value and its minimum value is exactly 1.

// Now, given an integer array, you need to find the length of its longest
// harmonious subsequence among all its possible subsequences.

// Example 1:

// Input: [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].

// Note:
// The length of the input array will not exceed 20,000.


/**
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = function(nums) {
  nums.sort((a, b) => a - b)
  let result = 0, prev = 0, curr = 0
  for (let i = 0, n = nums.length; i < n; i++) {
    const diff = i ? nums[i] - nums[i - 1] : 0
    prev = diff ? (diff === 1 ? curr : 0) : prev
    curr = diff ? 1 : curr + 1
    if (prev) result = Math.max(result, prev + curr)
  }
  return result
}

;[
  [1,3,2,2,5,2,3,7],            // 5
  [],                           // 0
  [1,1,1,1],                    // 0
].forEach(nums => {
  console.log(findLHS(nums))
})

// Solution:

// 思路：
// 1. 先排序
// 2. 遍历排序后的数组
// 3. 记录前一个数的个数，和当前数的个数
// 4. 如果当前数和前一个数相差 1，则记录，否则继续

// 实现：
// 关键在于 prev 的记录，只有当当前数与前一个数相差 1 时才设置为前一个数的个数，
// 否则记录为 0。
// 而当 prev 为 0 时，说明数字不满足要求。

// Submission Result: Accepted
