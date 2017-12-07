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
  const n = s.length
  let result = 0
  for (let i = 0, left = 0, right = 0; i < n; i++) {
    if (s[i] === '(') left++
    else right++

    if (left === right) result = Math.max(result, left + right)
    if (left < right) {
      right = 0
      left = 0
    }
  }

  for (let i = n - 1, left = 0, right = 0; i >= 0; i--) {
    if (s[i] === '(') left++
    else right++

    if (left === right) result = Math.max(result, left + right)
    if (left > right) {
      right = 0
      left = 0
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
// 方法一：
// 使用一个栈来记录左括号的位置，
// 每当有右括号时，
// 先将表示一个表示左括号或栈底的位置数字弹出栈，
// 再检查栈是否为空，
// - 若为空，说明该右括号已经隔断了最长匹配，并将该位置作为栈底，
//   下一个最长匹配需要从此处开始。
// 若不为空，则比较累积的最长匹配与当前匹配长度，更新最长匹配长度。

// 栈可能会不断增加，保存更多位置，因为这些位置还有可能会匹配到。

// 方法二：
// 该问题的主要难度在于处理多出来的左括号，
// 因为没出现一个左括号，在之后有可能会匹配，也可能不会匹配。

// 因此为了处理左括号问题，
// 可以从左边遍历一遍，再从右边遍历一遍，
// 这样左右括号会相互转换，而处理右括号是极其容易的，
// 因为只要多出一个有右括号，就一定会隔断后续的匹配。

// 该方法相比方法一，优化了空间复杂度。

// Submission Result: Accepted
