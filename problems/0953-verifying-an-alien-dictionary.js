// 953. Verifying an Alien Dictionary
// Easy   55%


// In an alien language, surprisingly they also use english lowercase letters,
// but possibly in a different order. The order of the alphabet is some
// permutation of lowercase letters.
// Given a sequence of words written in the alien language, and the order of the
// alphabet, return true if and only if the given words are sorted
// lexicographicaly in this alien language.

// Example 1:
// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is
// sorted.

// Example 2:
// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] >
// words[1], hence the sequence is unsorted.

// Example 3:
// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is
// shorter (in size.) According to lexicographical rules "apple" > "app", because
// 'l' > '&empty;', where '&empty;' is defined as the blank character which is
// less than any other character (More info).

// Constraints:
//     1 <= words.length <= 100
//     1 <= words[i].length <= 20
//     order.length == 26
//     All characters in words[i] and order are English lowercase letters.


/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = function(words, order) {
  const map = {}
  for (let i = 0; i < order.length; i++) map[order[i]] = i
  for (let i = 0; i < words.length - 1; i++) {
    const l = Math.max(words[i].length, words[i + 1].length)
    for (let j = 0; j < l; j++) {
      const a = map[words[i][j]] || -1
      const b = map[words[i + 1][j]] || -1
      if (a > b) return false
      if (a < b) break
    }
  }
  return true
}

;[
  [['hello','leetcode'], 'hlabcdefgijkmnopqrstuvwxyz'],   // true
  [["word","world","row"], 'worldabcefghijkmnpqstuvxyz'], // false
  [["apple","app"], 'abcdefghijklmnopqrstuvwxyz'],        // false
].forEach(([words, order]) => {
  console.log(isAlienSorted(words, order))
})

// Solution:
// 将字母表变为哈希表，字母为键，序号为值。
// 然后前一个字符串和后一个字符串比较，
// 从第一个字符开始比较，若两个字符相同，则比较下一个，
// 若不同，则比较其在哈希表的值，前一个小于后一个，比较下一对字符串，
// 否则返回 false

// Submission Result: Accepted