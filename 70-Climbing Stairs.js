// 70. Climbing Stairs
// Easy 40% locked:false

// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can
// you climb to the top?

// Note: Given n will be a positive integer.

// easy recursion but ...
// const climbStairs = function(n) {
//   if (n === 1) return 1
//   if (n === 2) return 2
//   return climbStairs(n - 1) + climbStairs(n - 2)
// }


/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  let curr = 1, prev = 0
  for (let i = 1; i <= n; i++) [curr, prev] = [prev + curr, curr]
  return curr
}

console.log(climbStairs(7))
