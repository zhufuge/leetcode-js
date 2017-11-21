// 10. Regular Expression Matching
// Hard   24%

// Implement regular expression matching with support for '.' and '*'.

// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.

// The matching should cover the entire input string (not partial).

// The function prototype should be:
// bool isMatch(const char *s, const char *p)

// Some examples:
// isMatch("aa","a") ? false
// isMatch("aa","aa") ? true
// isMatch("aaa","aa") ? false
// isMatch("aa", "a*") ? true
// isMatch("aa", ".*") ? true
// isMatch("ab", ".*") ? true
// isMatch("aab", "c*a*b") ? true

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function(s, p) {
  if (s === null || p === null) return false

  const n = s.length, m = p.length
  const dp = []
  for (let i = 0; i < n + 1; i++) {
    dp[i] = Array(m + 1).fill(false)
  }

  dp[0][0] = true
  for (let i = 0; i < m; i++) {
    dp[0][i + 1] = p[i] === '*' && dp[0][i - 1]
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (p[j] === '.' || p[j] === s[i]) dp[i + 1][j + 1] = dp[i][j]
      if (p[j] === '*') {
        if (p[j - 1] === s[i] || p[j - 1] === '.') {
          dp[i + 1][j + 1] = dp[i + 1][j - 1] || dp[i + 1][j] || dp[i][j + 1]
        } else {
          dp[i + 1][j + 1] = dp[i + 1][j - 1]
        }
      }
    }
  }
  return dp[n][m]
}

;[
  ['aa', 'a'],                  // false
  ['aa', 'aa'],                 // true
  ['aaa', 'aa'],                // false
  ['aa', 'a*'],                 // true
  ['aa', '.*'],                 // true
  ['ab', '.*'],                 // true
  ['ad', 'c*a*b*d'],            // true
  ['aaa', 'a*a'],               // true
  ['cdabc', 'c*d.*'],           // true
].forEach(args => {
  console.log(isMatch(...args))
})

// Solution:
// 用一个表来进行动态规划。
// 表项值为 true，说明该位置是匹配的。
// 行数为字符串长度加一，列数为正则字符串长度加一。

// 如何进行动态规划呢？
// 以 s='cdabc'，p='c*d.*' 为例
//     0 1 2 3 4 5
//       c * d . *
// 0   v x v x x x
// 1 c x v v x x x
// 2 d x x x v x v
// 3 a x x x x v v
// 4 b x x x x x v
// 5 c x x x x x v
// （v 表示正常匹配，x 表示不匹配）

// 1. 初始化最左上角为v。即 dp[0][0] = v

// 2. 初始化第一行，若p[i]='*'，则检查左2位的字符是否为v，若也为v，则其为v。
// 因为 '*' 匹配0个或多个其前一个字符。
// 当不匹配（即匹配0个）时，若左2位字符匹配了，则其也匹配了。
// 例如 dp[0][2] = dp[0][0], dp[0][5] = dp[0][3]

// 3. 开始匹配字符串。
// 只要有一个字符不匹配，则整个字符串都不可能匹配。
// 所以在dp表中，每个方格的值都会依赖左边和上边的方格的值。
// 填表有以下规则：
//   1) 若正则字符为'.'（匹配所有单个字符），则只需要前面都匹配，则其也匹配。
//          例如 '.' 匹配 'a'，dp[3][4] = dp[2][3]
//   2) 若正则字符等于需匹配字符，同 规则 1)。
//          例如 'c' 匹配 'c'，dp[1][1] = dp[0][0]
//   3) 若正则字符为'*'，观察需匹配字符是否匹配上一个字符。
//        若匹配上一个字符，则匹配。
//          例如 'c' 匹配 'c'，dp[1][2] = dp[0][2]
//              '.' 匹配 'b'，dp[4][5] = dp[3][5]
//              '.' 匹配 'c'，dp[5][5] = dp[4][5]
//        若不匹配，则视为匹配0个，将匹配权力交给下一个正则字符。

// 4. 最后若最右下角的方格为v，则整个字符串匹配。否则不匹配。

// Submission Result: Accepted
