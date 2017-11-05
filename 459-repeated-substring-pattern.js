// 459. Repeated Substring Pattern
// Easy   38%

// Given a non-empty string check if it can be constructed by taking a substring
// of it and appending multiple copies of the substring together. You may assume
// the given string consists of lowercase English letters only and its length
// will not exceed 10000.

// Example 1:

// Input: "abab"

// Output: True

// Explanation: It's the substring "ab" twice.

// Example 2:

// Input: "aba"

// Output: False

// Example 3:

// Input: "abcabcabcabc"

// Output: True

// Explanation: It's the substring "abc" four times. (And the substring "abcabc"
// twice.)


/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function(s) {
  const n = s.length
  for (let i = 2; i <= n; i++) {
    if (!(n % i)) {
      let p = -1, q = n / i - 1
      while (q < n && s[++p] === s[++q]);
      if (q >= n) return true
    }
  }
  return false

  // // more easy solution
  // return (s + s).slice(1, s.length * 2 - 1).includes(s)
}

;[
  'abab',                       // true
  'aba',                        // false
  'abcabcabcabc',               // true
  'abac',                       // false
  'ababab',                     // true
].forEach(s => {
  console.log(repeatedSubstringPattern(s))
})

// Solution:

// 因为要重复两次及以上，所以从重复的次数开始入手。
// 从重复 2 次开始检查，不断递增，直到重复 n 次。
// 如果重复次数不能整除字符串长度，则跳过。
// 在能整除的次数中，从 p = [0, n / i]，检查
// s[p]是否与 s[p + n / i]相同，如果全部都同，说明是重复子字符串组成。


// Submission Result: Accepted
