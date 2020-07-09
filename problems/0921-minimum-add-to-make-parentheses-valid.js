// 921. Minimum Add to Make Parentheses Valid
// Medium   73%


// Given a string S of '(' and ')' parentheses, we add the minimum number of
// parentheses ( '(' or ')', and in any positions ) so that the resulting
// parentheses string is valid.
// Formally, a parentheses string is valid if and only if:
//     It is the empty string, or
//     It can be written as AB (A concatenated with B), where A and B are valid
// strings, or
//     It can be written as (A), where A is a valid string.
// Given a parentheses string, return the minimum number of parentheses we must
// add to make the resulting string valid.

// Example 1:
// Input: "())"
// Output: 1
// Example 2:
// Input: "((("
// Output: 3
// Example 3:
// Input: "()"
// Output: 0
// Example 4:
// Input: "()))(("
// Output: 4

// Note:
//     S.length <= 1000
//     S only consists of '(' and ')' characters.



/**
 * @param {string} S
 * @return {number}
 */
const minAddToMakeValid = function(S) {
  const stack = []
  for (let c of S) {
    if (c === '(') stack.push(c)
    else if (stack[stack.length - 1] === '(') stack.pop()
    else stack.push(c)
  }
  return stack.length
}

const better = function(S) {
  let left = 0, right = 0
  for (let c of S) {
    if (c === '(') left++
    else if (left > 0) left--
    else right++
  }
  return left + right
}

;[
  '())',  // 1
  '(((',  // 3
  '()',   // 0
  '()))((', // 4
].forEach((S) => {
  console.log(minAddToMakeValid(S))
  console.log(better(S))
})

// Solution:
// 1. 使用栈
// 遍历字符串，遇到 ( 时入栈，
// 遇到 ) 时，且当栈顶为 ( 时出栈，否则入栈。
// 最后返回栈的高度。即 栈中没有匹配的 （ 和 ）的数量和

// 2. 不使用栈，使用两个变量来模拟栈
// 因为只需记录全部未匹配的右括号和剩余的左括号。

// Submission Result: Accepted