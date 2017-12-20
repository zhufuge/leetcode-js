// 68. Text Justification
// Hard   19%

// Given an array of words and a length L, format the text such that each line
// has exactly L characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words
// as you can in each line. Pad extra spaces ' ' when necessary so that each
// line has exactly L characters.

// Extra spaces between words should be distributed as evenly as possible. If
// the number of spaces on a line do not divide evenly between words, the empty
// slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left justified and no extra space is
// inserted between words.

// For example,
// words: ["This", "is", "an", "example", "of", "text", "justification."]
// L: 16.

// Return the formatted lines as:

// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]

// Note: Each word is guaranteed not to exceed L in length.

// click to show corner cases.
// Corner Cases:

// A line other than the last line might contain only one word. What should
// you do in this case? In this case, that line should be left-justified.

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = function(words, maxWidth) {
  const result = [], n = words.length
  for (let i = 0, j = 0; i < n; i += j, j = 0) {
    let width = 0
    while (i + j < n && width + words[i + j].length + j <= maxWidth) {
      width += words[i + j].length
      j++
    }
    let string = '', spaces = maxWidth - width
    for (let k = 0; k < j - 1; k++) {
      string += words[i + k]
      if (i + j >= n) {
        string += ' '
        spaces -= 1
      } else {
        const repeat = spaces > 0 ? Math.ceil(spaces / (j - k - 1)) : 0
        spaces -= repeat
        string += ' '.repeat(repeat)
      }
    }
    string += words[i + j - 1] + ' '.repeat(spaces)
    result.push(string)
  }

  return result
}

;[
  [["This", "is", "an", "example", "of", "text", "justification."], 16],
  [['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1],
  [["What","must","be","shall","be."], 12],
  [["a"], 2],
].forEach(([words, maxWidth]) => {
  console.log(fullJustify(words, maxWidth))
})

// Solution:
// 每个单词间必须有空格隔开，最小为1，
// 每次加一个字符串的长度，这些加起来的长度加上最小空格数小于或等于 maxWidth。
// 当数量最大时，将这些单词构造出句子。
// 此时，单词将的间隔的计算为
// 剩下空格数除以剩下单词数，并向上取整。
// 若为最后一行，则单词间只加一个空格，并将剩下的所有空格加到末尾。

// Submission Result: Accepted
