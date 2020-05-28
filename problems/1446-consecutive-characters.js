// 1446. Consecutive Characters
// Easy   63%


// Given a string s, the power of the string is the maximum length of a non-empty
// substring that contains only one unique character.
// Return the power of the string.

// Example 1:
// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:
// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
// Example 3:
// Input: s = "triplepillooooow"
// Output: 5
// Example 4:
// Input: s = "hooraaaaaaaaaaay"
// Output: 11
// Example 5:
// Input: s = "tourist"
// Output: 1

// Constraints:
//     1 <= s.length <= 500
//     s contains only lowercase English letters.


/**
 * @param {string} s
 * @return {number}
 */
const maxPower = function(s) {
  let res = 1, count = 1
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) count++
    else count = 1
    res = Math.max(res, count)
  }
  return res
}

;[
  'leetcode', // 2
  'abbcccddddeeeeedcba', // 5
  'triplepillooooow', // 5
  'hooraaaaaaaaaaay', // 11
  'tourist', // 1
  'cc', // 2
].forEach((s) => {
  console.log(maxPower(s))
})

// Solution:
// count 计数，res 记录过程中最大的 count

// Submission Result: Accepted