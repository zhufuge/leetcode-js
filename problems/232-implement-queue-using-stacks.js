// 232. Implement Queue using Stacks
// Easy   37%


// Implement the following operations of a queue using stacks.

// push(x) -- Push element x to the back of queue.
//   pop() -- Removes the element from in front of queue.
//   peek() -- Get the front element.
//   empty() -- Return whether the queue is empty.

// Notes:

// You must use only standard operations of a stack -- which means only push to
// top, peek/pop from top, size, and is empty operations are valid.

//   Depending on your language, stack may not be supported natively. You may
//   simulate a stack by using a list or deque (double-ended queue), as long as
//   you use only standard operations of a stack.

//   You may assume that all operations are valid (for example, no pop or peek
//   operations will be called on an empty queue).

/**
 * Initialize your data structure here.
 */
const MyQueue = function() {
  this.stack = []
  this.size = 0
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack.push(x)
  this.size = this.stack.length
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.size === 0) return null
  const tmp = []
  for (let i = this.size; i > 0; i--) {
    tmp.push(this.stack.pop())
  }
  const result = tmp.pop()
  this.size = tmp.length
  for (let i = this.size; i > 0; i--) {
    this.stack.push(tmp.pop())
  }
  return result
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.size === 0) return null
  const tmp = []
  for (let i = this.size; i > 0; i--) {
    tmp.push(this.stack.pop())
  }
  const result = tmp[tmp.length - 1]
  for (let i = this.size; i > 0; i--) {
    this.stack.push(tmp.pop())
  }
  return result
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.size === 0
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


const q = new MyQueue()
;[
  ['push', [1]],                  // [1]
  ['empty', []],                  // false
  ['push', [2]],                  // [1, 2]
  ['peek', []],                   // 1
  ['pop', []],                    // 1
  ['peek', []],                   // 2
].forEach(args => {
  console.log(q[args[0]](...args[1]))
  console.log(q)
})

// Solution:
// 只能用栈来实现队列。
// 队列的 push, empty 都和栈一样。
// 队列的 pop 和 peek 需要特别实现。

// 先将栈的元素一个个弹到另一个临时栈中，取出（或者获得）临时栈的栈顶元素，作为
// 返回值，最后将临时栈的全部元素在弹回栈中。

// Submission Result: Accepted
