// 58. Length of Last Word
// Easy   31%

// Given a string s consists of upper/lower-case alphabets and empty space
// characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space
// characters only.

// For example,
// Given s = "Hello World",
// return 5.

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  let result = 0
  for (let i = s.length - 1; i >= 0; i--){
    if (s[i] !== ' ') result++
    else if (result !== 0) return result
  }
  return result
}

;[
  '',                           // 0
  'a',                          // 1
  'abas',                       // 4
  'adf af',                     // 2
  'a as asdf adfas',            // 5
  'a  ',                        // 1
  'abc ab ',                    // 2
  ' assf asdf   asf   ',        // 3
].forEach(s => {
  console.log(lengthOfLastWord(s))
})

// Solution:
// 从后向前读，
// 若不为空格，则加一，
// 若为空格，且结果不为0，则返回结果，
// 否则继续。（去掉后缀空格）

// Submission Result: Accepted
