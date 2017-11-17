// 5. Longest Palindromic Substring
// Medium  25%

// Given a string s, find the longest palindromic substring in s. You may assume
// that the maximum length of s is 1000.

// Example:
// Input: "babad"
// Output: "bab"

// Note: "aba" is also a valid answer.

// Example:
// Input: "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
  s = '#' + s.split('').join('#') + '#'

  const n = s.length
  let start = 0, end = 0
  for (let i = 0; i < n; i++) {
    let j = 0
    while (i - j >= 0 && i + j < n && s[i - j] === s[i + j]) j++
    if (2 * (--j) > end - start) {
      start = i - j
      end = i + j
    }
  }

  return s.slice(start, end).split('#').join('')
}

;[
  'babad',                      // 'bab'
  'cbbd',                       // 'cbbd'
  'ccc',                        // 'ccc'
].forEach(s => {
  console.log(longestPalindrome(s))
})

// Solution:
// 两个字符之间插入一个标记（如 #），整个字符串两边也分别添加。
// 这样字符串中就不会出现两个连续且相同的字符，处理起来更方便。
// 这个思想很新颖。

// 每遍历到一个字符，就计算其左右的最大对称长度。保留当前最长的左右字符下标。

// Submission Result: Accepted
