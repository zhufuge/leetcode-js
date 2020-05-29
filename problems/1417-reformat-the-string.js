// 1417. Reformat The String
// Easy   56%


// Given alphanumeric string s. (Alphanumeric string is a string consisting of
// lowercase English letters and digits).
// You have to find a permutation of the string where no letter is followed by
// another letter and no digit is followed by another digit. That is, no two
// adjacent characters have the same type.
// Return the reformatted string or return an empty string if it is impossible to
// reformat the string.

// Example 1:
// Input: s = "a0b1c2"
// Output: "0a1b2c"
// Explanation: No two adjacent characters have the same type in "0a1b2c".
// "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.
// Example 2:
// Input: s = "leetcode"
// Output: ""
// Explanation: "leetcode" has only characters so we cannot separate them by
// digits.
// Example 3:
// Input: s = "1229857369"
// Output: ""
// Explanation: "1229857369" has only digits so we cannot separate them by
// characters.
// Example 4:
// Input: s = "covid2019"
// Output: "c2o0v1i9d"
// Example 5:
// Input: s = "ab123"
// Output: "1a2b3"

// Constraints:
//     1 <= s.length <= 500
//     s consists of only lowercase English letters and/or digits.


/**
 * @param {string} s
 * @return {string}
 */
const reformat = function(s) {
  const nums = [], digits = []
  for (let c of s) {
    if (Number.isInteger(c - 0)) nums.push(c)
    else digits.push(c)
  }
  const n = nums.length, m = digits.length
  if (Math.abs(n - m) > 1) return ''
  let res = ''
  if (n < m) {
    for (let i = 0; i < n; i++) {
      res += digits[i] + nums[i]
    }
    res += digits[m - 1]
  } else {
    for (let i = 0; i < m; i++) {
      res += nums[i] + digits[i]
    }
    if (n !== m) res += nums[n - 1]
  }
  return res
}

;[
  'a0b1c2', // '0a1b2c'
  'leetcode', // ''
  '1229857369', // ''
  'covid2019', // 'c2o0v1i9d'
  'ab123', // '1a2b3'
  'da0b1c2e', // ''
].forEach((s) => {
  console.log(reformat(s))
})

// Solution:
// 使用两个数组分别记录 s 字符串中的数字和字母
// 若两数组的长度之差大于 1，则不能组成新字符串
// 交替遍历两个数组组成新字符串，（长度大的先遍历，若相等则数字先）

// Submission Result: Accepted