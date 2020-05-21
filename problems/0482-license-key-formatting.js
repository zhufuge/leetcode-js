// 482. License Key Formatting
// Easy   43%


// You are given a license key represented as a string S which consists only
// alphanumeric character and dashes. The string is separated into N+1 groups by
// N dashes.
// Given a number K, we would want to reformat the strings such that each group
// contains exactly K characters, except for the first group which could be
// shorter than K, but still must contain at least one character. Furthermore,
// there must be a dash inserted between two groups and all lowercase letters
// should be converted to uppercase.
// Given a non-empty string S and a number K, format the string according to the
// rules described above.
// Example 1:
// Input: S = "5F3Z-2e-9-w", K = 4
// Output: "5F3Z-2E9W"
// Explanation: The string S has been split into two parts, each part has 4
// characters.
// Note that the two extra dashes are not needed and can be removed.
// Example 2:
// Input: S = "2-5g-3-J", K = 2
// Output: "2-5G-3J"
// Explanation: The string S has been split into three parts, each part has 2
// characters except the first part as it could be shorter as mentioned above.
// Note:
// The length of string S will not exceed 12,000, and K is a positive integer.
// String S consists only of alphanumerical characters (a-z and/or A-Z and/or
// 0-9) and dashes(-).
// String S is non-empty.


/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
const licenseKeyFormatting = function(S, K) {
  let res = ''
  for (let i = S.length - 1, count = 0; i >= 0; i--) {
    if (S[i] !== '-') {
      if (count === 0 && res !== '') res = '-' + res
      res = S[i].toUpperCase() + res
      count = (count + 1) % K
    }
  }
  return res
}

;[
  ['5F3Z-2e-9-w', 4],
  ['2-5g-3-J', 2],
  ['1de0w-2nM-3MED', 3],
  ["--a-a-a-a--", 2],
].forEach(([S, K]) => {
  console.log(licenseKeyFormatting(S, K))
})

// Solution:
// !!注意多个连续 - 符号的情况，别添加多余的 - 符号。

// 使用 count 来记录当前一组的长度（不用也行，可以通过 res 计算）
// 从后向前遍历，忽略 - 符号，每遍历一个字符，都转成大写，并添加到 res 头部。
// 当 count == K 时，添加一个 - 符号到 res 头部，注意首尾处。

// Submission Result: Accepted