// 205. Isomorphic Strings
// Easy   34%


// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while
// preserving the order of characters. No two characters may map to the same
// character but a character may map to itself.

// For example,
// Given "egg", "add", return true.

// Given "foo", "bar", return false.

// Given "paper", "title", return true.

// Note:
// You may assume both s and t have the same length.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
  const hash = {}
  for (let i = 0, n = s.length; i < n; i++) {
    if (hash[s[i]] == null && hash['-' + t[i]] == null) {
      hash[s[i]] = t[i]
      hash['-' + t[i]] = s[i]
    }
    if (hash[s[i]] !== t[i] || hash['-' + t[i]] !== s[i]) return false
  }
  return true
}

;[
  ['egg', 'add'],               // true
  ['foo', 'bar'],               // false
  ['paper', 'title'],           // true
  ['egga', 'adda'],             // false
  ['aa', 'ab'],                 // false
  ['ab', 'aa'],                 // false
  ['a', 'a'],                   // true
].forEach(args => {
  console.log(isIsomorphic(...args))
})

// Solution:
// 利用哈希保存一个双射表。
// 因为只使用一个表来保存，因此一个直接以键值对出现，另一个的键名需要改变一下。

// Submission Result: Accepted
