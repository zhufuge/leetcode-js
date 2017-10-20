// 68. Text Justification
// Hard 19% locked:false

//  Given an array of words and a length L, format the text such that each line
//  has exactly L characters and is fully (left and right) justified.

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

//     A line other than the last line might contain only one word. What should
//     you do in this case? In this case, that line should be left-justified.

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = function(words, maxWidth) {
  if (words === null || words === void 0) return words
  if (maxWidth === 0) return words

  const res = []
  let group = [], width = 0
  for (let word of words) {
    if (width + word.length + group.length> maxWidth) {
      console.log(group);
      let n = group.length, spaces = maxWidth - width
      if (n === 1) res.push(group[0] + ' '.repeat(spaces))
      else {
        let s = ''
        for (let w of group) {
          const space = Math.trunc((spaces - 1) / (--n)) + 1
          s += w + (spaces > 0 ? ' '.repeat(Math.min(spaces, space)) : '')
          spaces -= space
        }
        res.push(s)
      }

      group = [word]
      width = word.length
    } else {
      group.push(word)
      width += word.length
    }
  }

  let s = '', spaces = maxWidth - group.length - width
  for (let w of group) s += w + (spaces >= 0 ? ' ' : '')
  s += ' '.repeat(spaces > 0 ? spaces : 0)
  res.push(s)

  return res
}

//console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16))
console.log(fullJustify(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1))
// console.log(fullJustify(["What","must","be","shall","be."], 12))
// console.log(fullJustify(["a"], 2))
