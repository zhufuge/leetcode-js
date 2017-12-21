// 44. Wildcard Matching
// Hard 20% locked:false

// Implement wildcard pattern matching with support for '?' and '*'.

// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).

// The matching should cover the entire input string (not partial).

// The function prototype should be:
// bool isMatch(const char *s, const char *p)

// Some examples:
// isMatch("aa","a") ? false
// isMatch("aa","aa") ? true
// isMatch("aaa","aa") ? false
// isMatch("aa", "*") ? true
// isMatch("aa", "a*") ? true
// isMatch("ab", "?*") ? true
// isMatch("aab", "c*a*b") ? false


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function(s, p) {
  const n = s.length, m = p.length
  let i = 0, j = 0, match = 0, starIdx = -1
  while (i < n){
    if (j < m  && (p[j] === '?' || s[i] === p[j])) {
      i++
      j++
    } else if (j < m && p[j] === '*') {
      starIdx = j
      match = i
      j++
    } else if (starIdx !== -1){
      j = starIdx + 1
      match++
      i = match
    } else return false
  }

  while (j < m && p[j] === '*') j++

  return j === m
}

console.log(isMatch('aa', 'a'), false)
console.log(isMatch('aa', 'aa'), true)
console.log(isMatch('aaa', 'aa'), false)
console.log(isMatch('aa', '*'), true)
console.log(isMatch('aa', 'a*'), true)
console.log(isMatch('ab', '?*'), true)
console.log(isMatch('ad', 'c*a*b*d'), false)
console.log(isMatch('aaa', 'a*a'), true)
