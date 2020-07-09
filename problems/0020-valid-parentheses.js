// 20. Valid Parentheses
// Easy   33%

// Given a string containing just the characters '(', ')', '{', '}', '[' and
// ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid
// but "(]" and "([)]" are not.

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const stack = []
  for (let v of s) {
		if (v === '(') stack.push(')')
		else if (v === '{') stack.push('}')
		else if (v === '[') stack.push(']')
		else if (stack.length === 0 || stack.pop() !== v) return false
  }

  return stack.length === 0
}

;[
  '(',                          // false
  '()',                         // true
  '([)]',                       // false
  '(]',                         // false
  '()[]{}',                     // true
].forEach((s) => {
  console.log(isValid(s))
})

// Solution:
// 这类匹配问题一般使用栈来解决。

// 遇到一个左符号，将右符号弹入栈顶，
// 遇到一个右符号，则从栈顶弹出一个符号，比较两个符号是否相同，
// 相同则继续
// 否则返回结果 false。
// 最后检查栈是否为空，是则返回 true, 否则 false。

// Submission Result: Accepted
