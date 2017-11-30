// 22. Generate Parentheses
// Medium   45%

// Given n pairs of parentheses, write a function to generate all combinations
// of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
  const result = []
  function iter(s, open, close) {
    if (close === 0) result.push(s)
    if (open < close) iter(s + ')', open, close - 1)
    if (open > 0) iter(s + '(', open - 1, close)
  }
  iter('', n, n)
  return result
}

;[
  0,
  1,
  2,
  3,
].forEach(n => {
  console.log(generateParenthesis(n))
})

// Solution:
// 从构造结果来看，在每个结果字符串中的前k个字符中，
// 其左括号的数量都大于或等于其右括号的数量。
// 因此构造过程中，只有左括号的数量超过右括号的数量时，才能添加右括号。

// 使用一个分叉的迭代函数。
// 参数为叠加的字符串和剩余的左右括号数量。
// 只有剩余的右括号大于剩余的左括号时，添加右括号。
// 否则只添加左括号。

// Submission Result: Accepted
