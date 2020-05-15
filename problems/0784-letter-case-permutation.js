// 784. Letter Case Permutation
// Easy   62%


// Given a string S, we can transform every letter individually to be lowercase
// or uppercase to create another string.  Return a list of all possible strings
// we could create.
// Examples:
// Input: S = "a1b2"
// Output: ["a1b2", "a1B2", "A1b2", "A1B2"]
// Input: S = "3z4"
// Output: ["3z4", "3Z4"]
// Input: S = "12345"
// Output: ["12345"]
// Note:
//     S will be a string with length between 1 and 12.
//     S will consist only of letters or digits.


/**
 * @param {string} S
 * @return {string[]}
 */
const letterCasePermutation = function(S) {
  const res = [], n = S.length
  S = S.split('')
  function rec(i) {
    while ('0' <= S[i] && S[i] <= '9') i++
    if (i >= n) {
      res.push(S.join(''))
      return
    }
    S[i] = S[i].toLowerCase()
    rec(i + 1)
    S[i] = S[i].toUpperCase()
    rec(i + 1)
  }
  rec(0)
  return res
}

;[
  'a1b2',
  '3z4',
  '12345',
  'abc',
].forEach((S) => {
  console.log(letterCasePermutation(S))
})

// Solution:
// 使用递归的方法（DFS)
// 遇到一个字符，就先将其转换成小写/大写，然后遍历下一个字符

// 循环的方法
// 遇到一个字符，将 res 中的每个字符串分为两个，两个字符串只是当前字符不同。
// JS 中改变字符串中的某个字符不是很方便，作罢。

// Submission Result: Accepted