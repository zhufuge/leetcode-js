// 746. Min Cost Climbing Stairs
// Easy   49%

// On a staircase, the i-th step has some non-negative cost cost[i] assigned (0
// indexed).

// Once you pay the cost, you can either climb one or two steps. You need to
// find minimum cost to reach the top of the floor, and you can either start
// from the step with index 0, or the step with index 1.

// Example 1:

// Input: cost = [10, 15, 20]
// Output: 15
// Explanation: Cheapest is start on cost[1], pay that cost and go to the top.

// Example 2:

// Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// Output: 6
// Explanation: Cheapest is start on cost[0], and only step on 1s, skipping
// cost[3].

// Note:
//  1. cost will have a length in the range [2, 1000].
//  2. Every cost[i] will be an integer in the range [0, 999].

/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function(cost) {
  let low = 0, high = 0
  for (let i = cost.length - 1; i >= 0; i--) {
    const then = cost[i] + Math.min(low, high)
    high = low
    low = then
  }
  return Math.min(low, high)
}

;[
  [10, 15, 20],                         // 15
  [1, 100, 1, 1, 1, 100, 1, 1, 100, 1], // 6
].forEach(cost => {
  console.log(minCostClimbingStairs(cost))
})

// Solution:
// 使用动态规划。
// 记录长度为n的数组，每个项都是当前所需付费和前两个项中较小的一项的和。

// 本页实现是对动态规划的优化，
// 只需保留两个变量即可，而不需整个数组。

// Submission Result: Accepted
