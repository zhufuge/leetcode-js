// 115. Distinct Subsequences
// Hard   31%

// Given a string S and a string T, count the number of distinct subsequences of
// S which equals T.

// A subsequence of a string is a new string which is formed from the original
// string by deleting some (can be none) of the characters without disturbing
// the relative positions of the remaining characters. (ie, "ACE" is a
// subsequence of "ABCDE" while "AEC" is not).

// Here is an example:
// S = "rabbbit", T = "rabbit"
// Return 3.

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinct = function(s, t) {
  const n = s.length, m = t.length

  const dp = Array(m + 1)
  dp[0] = Array(n + 1).fill(1)

  for (let i = 0; i < m; i++) {
    dp[i + 1] = Array(n + 1).fill(0)
    for (let j = i; j < n; j++) {
      if (s[j] === t[i]) {
        dp[i + 1][j + 1] = dp[i][j] + dp[i + 1][j]
      } else {
        dp[i + 1][j + 1] = dp[i + 1][j]
      }
    }
  }

  return dp[m][n]
}

;[
  ['rabbbit', 'rabbit'],
].forEach(args => {
  console.log(numDistinct(...args))
})

// Solution:
// 使用动态规划表, 如下。
//     r a b b b i t
//  ----------------
//  |1 1 1 1 1 1 1 1
// r|0 1 1 1 1 1 1 1
// a|0 0 1 1 1 1 1 1
// b|0 0 0 1 2 3 3 3
// b|0 0 0 0 1 3 3 3
// i|0 0 0 0 0 0 3 3
// t|0 0 0 0 0 0 0 3

// 构造一个 (m+1)*(n+1) 的动态规划表。
// 当没有匹配字符时，当前可生成的子序列和前一步一样，所以只是复制前一个的值 dp[i + 1][j]。
// 当匹配时，则需要看该字符在 s 和 t 的位置 j 和 i，之前的所能匹配的个数，即 dp[i][j]，
// 并加上之前匹配的值，即 dp[i + 1][j]。

// Submission Result: Accepted
