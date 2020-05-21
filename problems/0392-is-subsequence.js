// 392. Is Subsequence
// Easy   48%


// Given a string s and a string t, check if s is subsequence of t.
// A subsequence of a string is a new string which is formed from the original
// string by deleting some (can be none) of the characters without disturbing the
// relative positions of the remaining characters. (ie, "ace" is a subsequence of
// "abcde" while "aec" is not).
// Follow up:
// If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you
// want to check one by one to see if T has its subsequence. In this scenario,
// how would you change your code?
// Credits:
// Special thanks to @pbrother for adding this problem and creating all test
// cases.

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false

// Constraints:
//     0 <= s.length <= 100
//     0 <= t.length <= 10^4
//     Both strings consists only of lowercase characters.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) {
  let p = 0
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[p]) p++
  }
  return p === s.length
}

;[
  ['abc', 'ahbgdc'],
  ['axc', 'ahbgdc'],
  ['ace', 'abcde'],
  ['aec', 'abcde'],
].forEach(([s, t]) => {
  console.log(isSubsequence(s, t))
})

// Solution:
// 1. 遍历一遍 t
// 用 p 记录已遍历到的 s 中的字符，
// 当 t[i] == s[p] 时，p++，即在 t 中找到 s[p] 了，继续遍历 t 看看是否能找到 s[p+1]
// 最后判断是否 找到了 s 中所有的字符

// 2. 二分查找
// TODO: #392 看到有大佬使用了二分查找，时间复杂度更小

// Submission Result: Accepted