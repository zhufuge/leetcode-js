// 76. Minimum Window Substring
// Hard 25% locked:false

// Given a string S and a string T, find the minimum window in S which will
// contain all the characters in T in complexity O(n).

// For example,
// S = "ADOBECODEBANC"
// T = "ABC"

// Minimum window is "BANC".

// Note: If there is no such window in S that covers all characters in T, return
// the empty string "".

// If there are multiple such windows, you are guaranteed that there will always
// be only one unique minimum window in S.

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function(s, t) {
  const n = s.length, m = t.length
  const map = {}
  for(let c of t) map[c] = map[c] ? map[c] + 1 : 1
  let counter = m, begin = 0, end = 0, d = Infinity, head = 0
  while (end < n) {
    if (map[s[end++]]-- > 0) counter--
    while (counter === 0) {
      if (end - begin < d) d = end - (head = begin)
      if (map[s[begin++]]++ === 0) counter++
    }
  }

  return d === Infinity ? '' : s.substr(head, d)
}
//console.log(minWindow('bba', 'ab'))
console.log(minWindow('ADOBECODEBANC', 'BDE'))

const exceededTime = function(s, t) {
  const n = s.length, m = t.length
  if (n === 0 || m === 0) return ''

  const map = {}
  for (let c of t) map[c] = map[c] ? map[c] + 1 : 1
  console.log(map)
  let start = -1, width = n
  for (let i = 0; i <= n - m; i++) {
    if (map[s[i]]) {
      console.log(i)
      const match = Object.assign({}, map)
      let j = i, len = m
      for (; j < n && len > 0; j++) {
        if (match[s[j]] !== void 0 && match[s[j]] !== 0) {
          match[s[j]]--
          len--
        }
      }
      if (len === 0 && width >= j - i) {
        width = j - i
        start = i
      }
    }
  }

  return start === -1 ? '' : s.substr(start, width)
}
const noWorkVeryWell = function(s, t) {
  const n = s.length, m = t.length
  if (n === 0 || m === 0) return ''

  const map = {}, match = {}
  for (let c of t) map[c] = map[c] ? map[c] + 1 : 1
  for (let c of s) if (map[c]) match[c] = match[c] ? match[c] + 1 : 1

  if (Object.keys(map).length !== Object.keys(match).length) return ''

  let len = 0
  for (let k in match) {
    match[k] -= map[k]
    if (match[k] < 0) return ''
    len += match[k]
  }

  const nextMatch = (i, d) => {
    while (match[s[i]] === void 0) i += d ? 1 : - 1
    return i
  }

  let i = nextMatch(0, true), j = nextMatch(n - 1, false)
  for (; len > 0; len--) {
    let p = i, q = j
    while (p < q && p - i === j - q) {
      p = nextMatch(p + 1, true)
      q = nextMatch(q - 1, false)
    }
    if (match[s[i]] === 0 || (match[s[j]] !== 0 && p - i <= j - q)) {
      match[s[j]]--
      j = nextMatch(j - 1, false)
    } else {
      match[s[i]]--
      i = nextMatch(i + 1, true)
    }
  }

  return s.substring(i, j + 1)
}
