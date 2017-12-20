// 225. Implement Stack using Queues
// Easy   33%


// Implement the following operations of a stack using queues.

// push(x) -- Push element x onto stack.

// pop() -- Removes the element on top of the stack.

// top() -- Get the top element.

// empty() -- Return whether the stack is empty.

// Notes:
// You must use only standard operations of a queue -- which means only push to
// back, peek/pop from front, size, and is empty operations are valid.

// Depending on your language, queue may not be supported natively. You may
// simulate a queue by using a list or deque (double-ended queue), as long as you
// use only standard operations of a queue.

// You may assume that all operations are valid (for example, no pop or top
// operations will be called on an empty stack).

// Credits:Special thanks to @jianchao.li.fighter for adding this problem and all
// test cases.


/**
 * Initialize your data structure here.
 */
const MyStack = function() {
  this.queue = []
  this.size = 0
}

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue.push(x)
  this.size = this.queue.length
}

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  const tmp = []
  for (let i = this.size; i > 1; i--) {
    tmp.push(this.queue.shift())
  }

  const result = this.queue.shift()
  this.queue = tmp
  this.size = tmp.length

  return result
}

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  const tmp = []
  for (let i = this.size; i > 1; i--) {
    tmp.push(this.queue.shift())
  }

  const result = this.queue.shift()
  tmp.push(result)
  this.queue = tmp

  return result
}

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.size === 0
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */


// Solution:
// 栈和队列的 push 及 empty 函数的实现是相同的。
// 栈的 pop 和 top 函数的实现需要用一个新的暂时队列来完成。
// 将原队列的元素pop到暂时队列中，再去最后一个做回返回值。

// Submission Result: Accepted
