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
    const top = stack[stack.length - 1]
    if (v === ')') {
      if (top === '(') stack.pop()
      else return false
    } else if (v === ']') {
      if (top === '[') stack.pop()
      else return false
    } else if (v === '}') {
      if (top === '{') stack.pop()
      else return false
    } else {
      stack.push(v)
    }
  }

  return stack.length === 0
}

const short = function(s) {
  const stack = []
	for (let v of s) {
		if (v === '(') stack.push(')')
		else if (v === '{') stack.push('}')
		else if (v === '[') stack.push(']')
		else if (stack.length === 0 || stack.pop() !== v) return false
	}
	return stack.length === 0
}

console.log(isValid('('))
