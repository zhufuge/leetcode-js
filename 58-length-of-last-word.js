// 58. Length of Last Word
// Easy 31% locked:false

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
  if (s === void 0) return 0

  const n = s.length
  let res = 0
  for (let i = n - 1; i >= 0; i--){
    if (s[i] === ' ') {
      if (res !== 0) return res
    } else res++
  }

  return res
}

console.log(lengthOfLastWord(''))
console.log(lengthOfLastWord('a'))
console.log(lengthOfLastWord('abas'))
console.log(lengthOfLastWord('adf af'))
console.log(lengthOfLastWord('a as asdf adfas'))
console.log(lengthOfLastWord('a  '))
console.log(lengthOfLastWord('abc ab '))
console.log(lengthOfLastWord(' assf asdf   asf   '))
