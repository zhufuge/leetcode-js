// 1221. Split a String in Balanced Strings
// Easy   82%


// Balanced strings are those who have equal quantity of 'L' and 'R' characters.
// Given a balanced string s split it in the maximum amount of balanced strings.
// Return the maximum amount of splitted balanced strings.

// Example 1:
// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring
// contains same number of 'L' and 'R'.
// Example 2:
// Input: s = "RLLLLRRRLR"
// Output: 3
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains
// same number of 'L' and 'R'.
// Example 3:
// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".
// Example 4:
// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", since each substring
// contains an equal number of 'L' and 'R'

// Constraints:
//     1 <= s.length <= 1000
//     s[i] = 'L' or 'R'


/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function(s) {
  let l = r = res = 0
  for (let c of s) {
    if (c === 'L') l++
    else r++
    if (l === r) {
      res++
      l = r = 0
    }
  }
  return res
}

;[
  'RLRRLLRLRL',
  'RLLLLRRRLR',
  'LLLLRRRR',
  'RLRRRLLRLL'
].forEach((s) => {
  console.log(balancedStringSplit(s))
})

// Solution:
// 遍历字符串时，统计 'L' 和 'R' 的个数 l 和 r，
// 当数量相同时，拆分，并重置 l=r=0 。

// Submission Result: Accepted