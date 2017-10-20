// 5. Longest Palindromic Substring
// Medium 25% locked:false

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
  const n = s.length
  if (n === 0) return ''

  let result = ''
  for (let i = 0; i < n; i++) {
    let p = s[i]
    for (let j = 1; s[i + j] === s[i - j] && j <= i && i + j <= n; j++) {
      p = s[i - j] + p + s[i - j]
    }

    if (s[i] === s[i + 1]) {
      let q = s[i] + s[i]
      for (let j = 1; s[i + j + 1] === s[i - j] && j <= i && i + j <= n; j++) {
        q = s[i - j] + q + s[i - j]
      }
      p = (q.length > p.length) ? q : p
    }
    result = (p.length > result.length) ? p : result
  }

  return result
}

// console.log(longestPalindrome('babad'))
// console.log(longestPalindrome('cbbd'))
// console.log(longestPalindrome('ccc'))

const manacher = function(s) {
  s = '#' + s.split('').join('#') + '#'
  const n = s.length, p = []
  let mx = 0, id = 0
  for (let i = 1; i <= n; i++) {
    if(mx > i) {
      p[i] = p[2 * id - i] < (mx - i)
        ? p[2 * id - i]
        : (mx - i)
    } else {
      p[i] = 1
    }

    while (s[i - p[i]] === s[i + p[i]]) p[i]++

    if(i + p[i] > mx) {
      mx = i + p[i]
      id = i
    }
  }

  const [side, mid] = p.reduce(
    (max, v, i) => (v > max[0]) ? [v, i] : max,
    [0, 0]
  )

  return s.substring(mid - side, mid + side).split('#').join('')
}

console.log(manacher('babad'));
