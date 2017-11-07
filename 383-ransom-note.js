// 383. Ransom Note
// Easy   47%


// Given an arbitrary ransom note string and another string containing letters
// from all the magazines, write a function that will return true if the ransom
// note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
  const hash = {}
  for (let c of magazine) hash[c] = (hash[c] || 0) + 1
  for (let c of ransomNote) {
    if (!hash[c]) return false
    hash[c]--
  }
  return true
}

;[
  ['a', 'b'],                   // false
  ['aa', 'ab'],                 // false
  ['aa', 'aab'],                // true
].forEach(args => {
  console.log(canConstruct(...args))
})


// Solution:
// 第一次遍历，用哈希表保存 s 字符串中的字符及其个数。
// 第二次遍历，遇到字符不存在或其数量为 0 时，返回 false。
// 都存在且够用，则返回 true。


// Submission Result: Accepted
