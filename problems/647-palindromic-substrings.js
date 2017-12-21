// 647. Palindromic Substrings
// Medium   60%

// Given a string, your task is to count how many palindromic substrings in this
// string.

// The substrings with different start indexes or end indexes are counted as
// different substrings even they consist of same characters.

// Example 1:

// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

// Example 2:

// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// Note:

// The input string length won't exceed 1000.

/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function(s) {
  s = '#' + s.split('').join('#') + '#'
  let result = 0
  for (let i = 0, n = s.length; i < n; i++) {
    let j = 0
    while (i + j < n && i >= j && s[i + j] === s[i - j]) j++
    result += Math.trunc(j / 2)
  }
  return result
}

;[
  'abc',                        // 3
  'aaa',                        // 6
  'aaaaa',                      // 15
].forEach(s => {
  console.log(countSubstrings(s))
})

// Solution:
// 处理回文字符串时，在字符串两边以及每个字符间插入间隔符号（如#）
// 会比较好处理。
// 因为有的字符串是以中间空字符对称的，而有的是以中间非空字符对称的。

// 每到一个字符，都计算以其为中心最大的对称半径长度。
// 因为插入了间隔符号，且间隔符号的数量占长度的一半，因此需要折半。

// Submission Result: Accepted
