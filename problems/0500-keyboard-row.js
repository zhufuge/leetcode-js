// 500. Keyboard Row
// Easy   59%


// Given a List of words, return the words that can be typed using letters of
// alphabet on only one row's of American keyboard like the image below.

// Example 1:

// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]

// Note:

// You may use one character in the keyboard more than once.
// You may assume the input string will only contain letters of alphabet.


/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function(words) {
  const keyboard = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'], hash = {}
  for (let i = 0; i < 3; i++) {
    for (let l of keyboard[i]) {
      hash[l] = i
    }
  }

  const result = []
  for (let i = 0, n = words.length; i < n; i++) {
    const upper = words[i].toUpperCase(),
          len = upper.length,
          rowNum = hash[upper[0]]
    let j = 0
    while (j < len && hash[upper[j]] === rowNum) j++
    if (j >= len) result.push(words[i])
  }

  return result
}

;[
  ["Hello", "Alaska", "Dad", "Peace"], // ["Alaska", "Dad"]
].forEach(words => {
  console.log(findWords(words))
})


// Solution:
// 先用一个哈希表来缓存每个大写字母所在的行数，
// 再把每个单词的全部字母变成大写，
// 最后看每个字母是不是在同一行。


// Submission Result: Accepted
