// 1071. Greatest Common Divisor of Strings
// Easy   54%


// For strings S and T, we say "T divides S" if and only if S = T + ... + T  (T
// concatenated with itself 1 or more times)
// Return the largest string X such that X divides str1 and X divides str2.

// Example 1:
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:
// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:
// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

// Note:
//     1 <= str1.length <= 1000
//     1 <= str2.length <= 1000
//     str1[i] and str2[i] are English uppercase letters.


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function(str1, str2) {
  if (str1 == str2) return str1
  if (str1.length == str2.length) return ''
  if (str1.length < str2.length) return gcdOfStrings(str2, str1)
  if (str1.substring(0, str2.length) != str2) return ''
  return gcdOfStrings(str2, str1.substring(str2.length, str1.length))
}

;[
  ['ABCABC', 'ABC'],            // 'ABC'
  ['ABABAB', 'ABAB'],           // 'AB'
  ['LEET', 'CODE'],             // ''
  ['AAAAAAAA', 'AAAA'],         // 'AAAA'
  ['TTTTT', 'TTTTTTTTT'],       // 'T'
].forEach(([str1, str2]) => {
  console.log(gcdOfStrings(str1, str2))
})

// Solution:
// 类似求最大公约数
// 因为是字符串，所以可以使用更相减损术
// 长字符串减短字符串，再将剩余字符串与短字符串进行相减，直到两个字符串相等为止

// Submission Result: Accepted