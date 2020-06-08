// 1309. Decrypt String from Alphabet to Integer Mapping
// Easy   77%


// Given a string s formed by digits ('0' - '9') and '#' . We want to map s to
// English lowercase characters as follows:
//     Characters ('a' to 'i') are represented by ('1' to '9') respectively.
//     Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.
// It's guaranteed that a unique mapping will always exist.

// Example 1:
// Input: s = "10#11#12"
// Output: "jkab"
// Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
// Example 2:
// Input: s = "1326#"
// Output: "acz"
// Example 3:
// Input: s = "25#"
// Output: "y"
// Example 4:
// Input: s = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
// Output: "abcdefghijklmnopqrstuvwxyz"

// Constraints:
//     1 <= s.length <= 1000
//     s[i] only contains digits letters ('0'-'9') and '#' letter.
//     s will be valid string such that mapping is always possible.


/**
 * @param {string} s
 * @return {string}
 */
const freqAlphabets = function(s) {
  let res = '', n = s.length
  for (let i = 0; i < n; i++) {
    if (s[i + 2] === '#') {
      res += String.fromCharCode(96 + parseInt(s.substr(i, 2)))
      i += 2
    } else {
      res += String.fromCharCode(96 + parseInt(s[i]))
    }
  }
  return res
}

const back = function(s) {
  let res = '', i = s.length - 1
  while (i >= 0) {
    let c = ''
    if (s[i] === '#') {
      c = s.substr(i - 2, 2)
      i -= 2
    } else {
      c = s[i]
    }
    i--
    res = String.fromCharCode(96 + parseInt(c)) + res
  }
  return res
}

;[
  '10#11#12',
  '1326#',
  '25#',
  '12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#',
].forEach((s) => {
  console.log(freqAlphabets(s))
  console.log(back(s))
})

// Solution:
// 1.
// 从前向后遍历，通过 s[i + 2] 判断是读两位还是读一位。

// 2.
// 或从后向前遍历，遇到井号就向后多读两位，

// Submission Result: Accepted