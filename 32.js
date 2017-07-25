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
    console.log(result, stack)
  }

  return result
}

//console.log(longestValidParentheses('()(()'))
//console.log(longestValidParentheses('(()'))
console.log(longestValidParentheses('())((())(()'))
