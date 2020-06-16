// 1160. Find Words That Can Be Formed by Characters
// Easy   67%


// You are given an array of strings words and a string chars.
// A string is good if it can be formed by characters from chars (each character
// can only be used once).
// Return the sum of lengths of all good strings in words.

// Example 1:
// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation:
// The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:
// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation:
// The strings that can be formed are "hello" and "world" so the answer is 5 + 5
// = 10.

// Note:
//     1 <= words.length <= 1000
//     1 <= words[i].length, chars.length <= 100
//     All strings contain lowercase English letters only.


/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = function(words, chars) {
  const hash = {}
  for (let c of chars) hash[c] = (hash[c] || 0) + 1
  let res = 0
  for (let word of words) {
    const h = Object.assign({}, hash)
    let canBeFormed = true
    for (let c of word) {
      if (h[c] === undefined || --h[c] < 0) {
        canBeFormed = false
        break
      }
    }
    if (canBeFormed) res += word.length
  }
  return res
}

;[
  [['cat','bt','hat','tree'], 'atach'],
  [['hello','world','leetcode'], 'welldonehoneyr'],
].forEach(([words, chars]) => {
  console.log(countCharacters(words, chars))
})

// Solution:
// 使用 hashMap 来保存 chars 中每个字符出现的次数。
// 遍历每个 word 使用 hashMap 统计其每个字符出现的次数，并与 chars 的比较，
// 当所有字符都在 chars 中出现，并且数量不超出范围时，添加长度到 res 中。

// 改进：复制 chars 的 hashMap，并在遍历 word 时使用。

// Submission Result: Accepted