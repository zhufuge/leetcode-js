// 1304. Find N Unique Integers Sum up to Zero
// Easy   76%


// Given an integer n, return any array containing n unique integers such that
// they add up to 0.

// Example 1:
// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
// Example 2:
// Input: n = 3
// Output: [-1,0,1]
// Example 3:
// Input: n = 1
// Output: [0]

// Constraints:
//     1 <= n <= 1000


/**
 * @param {number} n
 * @return {number[]}
 */
const sumZero = function(n) {
  let res = n % 2 ? [0] : []
  for (let i = 1; i < n; i++) res.push(-i * 2, i * 2)
  return res
}

;[
  5,
  3,
  1,
  4
].forEach((n) => {
  console.log(sumZero(n))
})

// Solution:
// n 为偶数时，生成 n/2 对正负数，如（1，-1）
// n 为奇数时，再偶数基础上加个 0

// Submission Result: Accepted