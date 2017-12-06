// 32. Longest Valid Parentheses
// Hard   23%

// Given a string containing just the characters '(' and ')', find the length of
// the longest valid (well-formed) parentheses substring.

// For "(()", the longest valid parentheses substring is "()", which has length
// = 2.

// Another example is ")()())", where the longest valid parentheses substring is
// "()()", which has length = 4.

/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function(s) {
  const stack = [-1]
  let result = 0
  for (let i = 0, n = s.length; i < n; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else {
      stack.pop()
      if (stack.length === 0) {
        stack.push(i)
      } else {
        result = Math.max(result, i - stack[stack.length - 1])
      }
    }
  }

  return result
}

;[
  '(()',                        // 2
  ')()())',                     // 4
  '()(()',                      // 2
  '())((())(()',                // 4
  '()(())',                     // 6
].forEach(s => {
  console.log(longestValidParentheses(s))
})

// Solution:
// 使用一个栈来记录左括号的位置，
// 每当有右括号时，
// 先将表示一个表示左括号或栈底的位置数字弹出栈，
// 再检查栈是否为空，
// - 若为空，说明该右括号已经隔断了最长匹配，并将该位置作为栈底，
//   下一个最长匹配需要从此处开始。
// 若不为空，则比较累积的最长匹配与当前匹配长度，更新最长匹配长度。

// 栈可能会不断增加，保存更多位置，因为这些位置还有可能会匹配到。

// Submission Result: Accepted
