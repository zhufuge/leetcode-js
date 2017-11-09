// 242. Valid Anagram
// Easy   46%


// Given two strings s and t, write a function to determine if t is an anagram of
// s.

// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.

// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your
// solution to such case?


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  const hash = {}
  for (let c of s) hash[c] = (hash[c] || 0) + 1
  for (let c of t) {
    if (!hash[c]) return false
    hash[c]--
  }
  return true
}

;[
  ['anagram', 'nagaram'],       // true
  ['rat', 'car'],               // false
  ['ab', 'a'],                  // false
  ['aacc', 'ccac'],             // false
].forEach(args => {
  console.log(isAnagram(...args))
})

// Solution:
// 若字符串的长度不同，那一定 false
// 用哈希保存 s 字符串的那个出现字符及其次数。
// 对于 t 字符串中的每个字符，判断其是否在哈希中出现，且其哈希值是否大于0，
// 若不是则返回 false，如果全部通过则返回 true 。

// Submission Result: Accepted
