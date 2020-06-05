// 1370. Increasing Decreasing String
// Easy   75%


// Given a string s. You should re-order the string using the following
// algorithm:
//     Pick the smallest character from s and append it to the result.
//     Pick the smallest character from s which is greater than the last appended
// character to the result and append it.
//     Repeat step 2 until you cannot pick more characters.
//     Pick the largest character from s and append it to the result.
//     Pick the largest character from s which is smaller than the last appended
// character to the result and append it.
//     Repeat step 5 until you cannot pick more characters.
//     Repeat the steps from 1 to 6 until you pick all characters from s.
// In each step, If the smallest or the largest character appears more than once
// you can choose any occurrence and append it to the result.
// Return the result string after sorting s with this algorithm.

// Example 1:
// Input: s = "aaaabbbbcccc"
// Output: "abccbaabccba"
// Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
// After steps 4, 5 and 6 of the first iteration, result = "abccba"
// First iteration is done. Now s = "aabbcc" and we go back to step 1
// After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
// After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"
// Example 2:
// Input: s = "rat"
// Output: "art"
// Explanation: The word "rat" becomes "art" after re-ordering it with the
// mentioned algorithm.
// Example 3:
// Input: s = "leetcode"
// Output: "cdelotee"
// Example 4:
// Input: s = "ggggggg"
// Output: "ggggggg"
// Example 5:
// Input: s = "spo"
// Output: "ops"

// Constraints:
//     1 <= s.length <= 500
//     s contains only lower-case English letters.


/**
 * @param {string} s
 * @return {string}
 */
const sortString = function(s) {
  const map = Array(26).fill(0)
  for (let c of s) map[c.charCodeAt(0) - 97]++
  let res = ''
  while (res.length < s.length) {
    for (let j = 0; j < 27; j++) {
      if (map[j] > 0) {
        res += String.fromCharCode(97 + j)
        map[j]--
      }
    }
    for (let j = 26; j >= 0; j--) {
      if (map[j] > 0) {
        res += String.fromCharCode(97 + j)
        map[j]--
      }
    }
  }
  return res
}

;[
  'aaaabbbbcccc',
  'rat',
  'leetcode',
  'ggggggg',
  'spo',
].forEach((s) => {
  console.log(sortString(s))
})

// Solution:
// 将每个字符的个数保存到一个数组中，
// 该数组是根据字符值从小到大排列的。
// 从头遍历数组，并将有计数的字符添加到答案中。
// 再从尾遍历数组，并将有计数的字符添加到答案中。
// 重复该过程，直到所有字符都再答案中。

// Submission Result: Accepted