// 387. First Unique Character in a String
// Easy   46%


// Given a string, find the first non-repeating character in it and return it's
// index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.

// Note: You may assume the string contain only lowercase letters.


/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
  const n = s.length, hash = {}
  for (let i = 0; i < n; i++) hash[s[i]] = (hash[s[i]] || 0) + 1
  for (let i = 0; i < n; i++) {
    if (hash[s[i]] === 1) return i
  }
  return -1
}

;[
  'leetcode',                   // 0
  'loveleetcode',               // 2
].forEach(s => {
  console.log(firstUniqChar(s))
})

// Solution:
// 第一次遍历，用哈希表保存 s 字符串中的字符及其个数。
// 第二次遍历，遇到的字符的数量为 1 时，返回该字符的下标。

// Submission Result: Accepted
