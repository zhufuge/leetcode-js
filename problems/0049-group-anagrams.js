// 49. Group Anagrams
// Medium   35%

// Given an array of strings, group anagrams together.

// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Return:

// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// Note: All inputs will be in lower-case.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  if (strs === null || strs.length === 0) return []

  const hash = {}
  for (let s of strs) {
    const key = Array(26).fill(0)
    for (let c of s) key[c.charCodeAt() - 97]++

    if (hash[key] === void 0) hash[key] = []
    hash[key].push(s)
  }

  const result = []
  for (let key in hash) result.push(hash[key])
  return result
}


;[
  ['eat', 'tea', 'tan', 'ate', 'nat', 'bat', 'boo','bob'],
].forEach(strs => {
  console.log(groupAnagrams(strs))
})

// Solution:
// 使用哈希表来保存每个组应该含有的字符串。
// 分组时，查看每个字符串中的含有的字符及其次数，以此分辨字符串应在哪个组。

// 查看字符串中含有的字符及其次数的方法
// 1. 排序字符后，组成的字符串
// 2. 使用固定长度数组（26，表示26个字母），每个位置的值表示一个字符出现的次数。


// Submission Result: Accepted
