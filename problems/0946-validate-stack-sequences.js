// 946. Validate Stack Sequences
// Medium   61%


// Given two sequences pushed and popped with distinct values, return true if and
// only if this could have been the result of a sequence of push and pop
// operations on an initially empty stack.

// Example 1:
// Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// Output: true
// Explanation: We might do the following sequence:
// push(1), push(2), push(3), push(4), pop() -> 4,
// push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
// Example 2:
// Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
// Output: false
// Explanation: 1 cannot be popped before 2.

// Note:
//     0 <= pushed.length == popped.length <= 1000
//     0 <= pushed[i], popped[i] < 1000
//     pushed is a permutation of popped.
//     pushed and popped have distinct values.


/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function(pushed, popped) {
  const stack = []
  let i = 0
  for (let x of pushed) {
    stack.push(x)
    while (stack.length && stack[stack.length - 1] === popped[i]) {
      stack.pop()
      i++
    }
  }
  return stack.length === 0
}

;[
  [[1,2,3,4,5], [4,5,3,2,1]], // true
  [[1,2,3,4,5], [4,3,5,1,2]], // false
  [[1,2,3,4,5], [4,3,5,2,1]], // true
].forEach(([pushed, popped]) => {
  console.log(validateStackSequences(pushed, popped))
})

// Solution:
// 用一个栈 stack 来模拟一遍操作。
// 每次将 pushed 中的数入栈后，都检查一遍栈顶的数是否与 popped[i] 相等，相等则出栈，再重复
// 检查，直到不相等，再进将 pushed 的下一个数入栈。

// Submission Result: Accepted