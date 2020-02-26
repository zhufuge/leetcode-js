// 1078. Occurrences After Bigram
// Easy   64%


// Given words first and second, consider occurrences in some text of the form
// "first second third", where second comes immediately after first, and third
// comes immediately after second.
// For each such occurrence, add "third" to the answer, and return the answer.

// Example 1:
// Input: text = "alice is a good girl she is a good student", first = "a",
// second = "good"
// Output: ["girl","student"]
// Example 2:
// Input: text = "we will we will rock you", first = "we", second = "will"
// Output: ["we","rock"]

// Note:
//     1 <= text.length <= 1000
//     text consists of space separated words, where each word consists of
// lowercase English letters.
//     1 <= first.length, second.length <= 10
//     first and second consist of lowercase English letters.


/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
const findOcurrences = function(text, first, second) {
  const result = []
  const words = text.split(' ')
  for (let i = 0; i < words.length - 2; i++) {
    if (words[i] === first && words[i + 1] === second) {
      result.push(words[i + 2])
    }
  }
  return result
}

;[
  ['alice is a good girl she is a good student', 'a', 'good'],
  ['we will we will rock you', 'we', 'will'],
].forEach(([text, first, second]) => {
  console.log(findOcurrences(text, first, second))
})

// Solution:
// 使用 split 函数按空格拆分 text，
// 再遍历匹配一遍，稍微注意边界问题即可。

// Submission Result: Accepted