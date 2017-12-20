// 409. Longest Palindrome
// Easy   45%


// Given a string which consists of lowercase or uppercase letters, find the
// length of the longest palindromes that can be built with those letters.

// This is case sensitive, for example "Aa" is not considered a palindrome here.

// Note:
// Assume the length of given string will not exceed 1,010.

// Example:

// Input:
// "abccccdd"

// Output:
// 7

// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.


/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
  const n = s.length, hash = {}
  for (let i = 0; i < n; i++) hash[s[i]] = hash[s[i]] ? 0 : 1

  let count = 0
  for (let c in hash) count += hash[c] ? 1 : 0
  return n - (count ? count - 1 : 0)
}

;[
  'abccccdd',                   // 7
  'bb',                         // 2
].forEach(s => {
  console.log(longestPalindrome(s))
})

// Solution:
// 用哈希表来保存每个字符在字符串中出现的次数的奇偶性。
// 出现为偶数次的字符一定能用来组成回文字符。
// 而出现为奇数次的字符中，有一个不能出现在回文字符中（除了选中的作为中间的那一个）

// 计算奇数次的字符个数，如果为 0, 那说明字符串中的每个字符都选中，
// 否则只选择其中一个，其他删除各一个。


// Submission Result: Accepted
