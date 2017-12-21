// 70. Climbing Stairs
// Easy   40%

// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can
// you climb to the top?

// Note: Given n will be a positive integer.

// Example 1:
// Input: 2
// Output:  2
// Explanation:  There are two ways to climb to the top.

// 1. 1 step + 1 step
// 2. 2 steps


// Example 2:
// Input: 3
// Output:  3
// Explanation:  There are three ways to climb to the top.

// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  let curr = 1, prev = 0
  for (let i = 1; i <= n; i++) [curr, prev] = [prev + curr, curr]
  return curr
}

;[
  2,                            // 2
  3,                            // 3
  7,                            // 21
].forEach(n => {
  console.log(climbStairs(n))
})

// Solution:
// 从第二个台阶开始，每个台阶都可以从下一个台阶或下下个台阶上来，
// 因此，上到该台阶的走法是到下一个台阶的走法加上下下个的。

// 保存两个变量，进行动态规划。

// Submission Result: Accepted
