// 1021. Remove Outermost Parentheses
// Easy   76%


// A valid parentheses string is either empty (""), "(" + A + ")", or A + B,
// where A and B are valid parentheses strings, and + represents string
// concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid
// parentheses strings.
// A valid parentheses string S is primitive if it is nonempty, and there does
// not exist a way to split it into S = A+B, with A and B nonempty valid
// parentheses strings.
// Given a valid parentheses string S, consider its primitive decomposition: S =
// P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.
// Return S after removing the outermost parentheses of every primitive string in
// the primitive decomposition of S.

// Example 1:
// Input: "(()())(())"
// Output: "()()()"
// Explanation:
// The input string is "(()())(())", with primitive decomposition "(()())" +
// "(())".
// After removing outer parentheses of each part, this is "()()" + "()" =
// "()()()".
// Example 2:
// Input: "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation:
// The input string is "(()())(())(()(()))", with primitive decomposition
// "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" +
// "()(())" = "()()()()(())".
// Example 3:
// Input: "()()"
// Output: ""
// Explanation:
// The input string is "()()", with primitive decomposition "()" + "()".
// After removing outer parentheses of each part, this is "" + "" = "".

// Note:
//     S.length <= 10000
//     S[i] is "(" or ")"
//     S is a valid parentheses string



/**
 * @param {string} S
 * @return {string}
 */
const removeOuterParentheses = function(S) {
  let result = ''
  let count = 0
  for (let c of S) {
    if (c === '(' && count > 0) result += '('
    if (c === ')' && count > 1) result += ')'
    count += c === '(' ? 1 : -1
  }
  return result
}

;[
  '(()())(())',             // '()()()'
  '(()())(())(()(()))',     // '()()()()(())'
  '()()',                   // ''
  '((()))',                 // '(())'
].forEach((S) => {
  console.log(removeOuterParentheses(S))
})

// Solution:
// 使用堆栈的思想
// count 表示栈的高度
// 遍历字符串
// 遇到 '(' 入栈，count + 1
// 遇到 ')' 出栈，count - 1
// 因为要去掉最外层括号，所以只有（在栈操作前）
// 当 count > 0 才将 '(' 加入 result
// 当 count > 1 才将 ')' 加入 result

// Submission Result: Accept
