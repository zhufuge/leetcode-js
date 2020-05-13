// 819. Most Common Word
// Easy   44%

// Given a paragraph and a list of banned words, return the most frequent word
// that is not in the list of banned words.  It is guaranteed there is at least
// one word that isn't banned, and that the answer is unique.
// Words in the list of banned words are given in lowercase, and free of
// punctuation.  Words in the paragraph are not case sensitive.  The answer is in
// lowercase.

// Example:
// Input:
// paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
// banned = ["hit"]
// Output: "ball"
// Explanation:
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent
// non-banned word in the paragraph.
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"),
// and that "hit" isn't the answer even though it occurs more because it is
// banned.

// Note:
//     1 <= paragraph.length <= 1000.
//     0 <= banned.length <= 100.
//     1 <= banned[i].length <= 10.
//     The answer is unique, and written in lowercase (even if its occurrences in
// paragraph may have uppercase symbols, and even if it is a proper noun.)
//     paragraph only consists of letters, spaces, or the punctuation symbols
// !?',;.
//     There are no hyphens or hyphenated words.
//     Words only consist of letters, never apostrophes or other punctuation
// symbols.

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = function (paragraph, banned) {
  const words = paragraph.replace(/\!|\?|\'|\,|\;|\./g, ' ').split(/\s+/)
  const hash = {}
  let res = ''
  for (let w of words) {
    const l = w.toLowerCase()
    if (!banned.includes(l)) {
      hash[l] = (hash[l] || 0) + 1
      if (hash[l] > (hash[res] || 0)) res = l
    }
  }
  return res
}

;[
  ['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit']],
  ['a, a, a, a, b,b,b,c, c', ['a']],
].forEach(([paragraph, banned]) => {
  console.log(mostCommonWord(paragraph, banned))
})

// Solption:
// 先将标点符号转换成空格，再以空格将段落分成一个个单词
// 使用一个 HashMap 记录除了禁止的每个单词的个数
// 返回次数最大的一个

// Submission Result: Accepted
