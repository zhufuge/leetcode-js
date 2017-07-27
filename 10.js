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
  const n = s.length, m = p.length
  let j = 0
  for (let i = 0; i < n; i++) {
    if (p[j + 1] !== '*') {
      if (p[j] === '.' || p[j] === s[i]) j++
      else return false
    } else {
      if (p[j] === '.') {
        if (p[j + 2] === s[i]) (j += 2) && i--
      } else if (p[j] !== s[i]) {
        (j += 2) && i--
      }
    }
  }

  j += p[j + 1] === '*' ? 2 : 0
  return j === m
}

// console.log(isMatch('aa', 'a'), false)
// console.log(isMatch('aa', 'aa'), true)
// console.log(isMatch('aaa', 'aa'), false)
// console.log(isMatch('aa', 'a*'), true)
// console.log(isMatch('aa', '.*'), true)
// console.log(isMatch('ab', '.*'), true)
// console.log(isMatch('ad', 'c*a*b*d'), true)
// console.log(isMatch('aaa', 'a*a'), true)

const dpSolution = function(s, p) {
  if (s === null || p === null) return false

  const n = s.length, m = p.length
  const dp = []
  for (let i = 0; i < n + 1; i++) {
    dp[i] = new Array(m + 1).fill(false)
  }

  dp[0][0] = true
  for (let i = 0; i < m; i++) {
    if (p[i] === '*' && dp[0][i - 1]) {
      dp[0][i + 1] = true
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (p[j] === '.') dp[i + 1][j + 1] = dp[i][j]
      if (p[j] === s[i]) dp[i + 1][j + 1] = dp[i][j]
      if (p[j] === '*') {
        if (p[j - 1] != s[i] && p[j - 1] != '.') {
          dp[i + 1][j + 1] = dp[i + 1][j - 1];
        } else {
          dp[i + 1][j + 1] = dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1]
        }
      }
    }
  }
  return dp[n][m]
}

// console.log(dpSolution('aa', 'a'), false)
// console.log(dpSolution('aa', 'aa'), true)
// console.log(dpSolution('aaa', 'aa'), false)
// console.log(dpSolution('aa', 'a*'), true)
// console.log(dpSolution('aa', '.*'), true)
// console.log(dpSolution('ab', '.*'), true)
console.log(dpSolution('ad', 'c*a*b*d'), true)
// console.log(dpSolution('aaa', 'a*a'), true)
