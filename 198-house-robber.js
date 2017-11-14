// 198. House Robber
// Easy   39%


// You are a professional robber planning to rob houses along a street. Each
// house has a certain amount of money stashed, the only constraint stopping you
// from robbing each of them is that adjacent houses have security system
// connected and it will automatically contact the police if two adjacent houses
// were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each
// house, determine the maximum amount of money you can rob tonight without
// alerting the police.

// Credits:Special thanks to @ifanchu for adding this problem and creating all
// test cases. Also thanks to @ts for adding additional test cases.


/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
  const n = nums.length
  for (let i = 2; i < n; i++) {
    nums[i] += Math.max(nums[i - 2], (nums[i - 3] || 0))
  }
  return n ? Math.max(nums[n - 1], (nums[n - 2] || 0)) : 0
}

;[
  [5,4,3,2,1,4,2,4],            // 16
  [1,7,9,4],                    // 11
  [],                           // 0
  [0],                          // 0
].forEach(nums => {
  console.log(rob(nums))
})

// Solution:
// 利用累积法。
// 每到一个房子i，就加上（i - 2) 和 (i - 3) 中累积的最大的那个作为当前最大收益。

// Submission Result: Accepted
