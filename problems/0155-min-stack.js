// 155. Min Stack
// Easy   29%


// Design a stack that supports push, pop, top, and retrieving the minimum
// element in constant time.

// push(x) -- Push element x onto stack.

// pop() -- Removes the element on top of the stack.

// top() -- Get the top element.

// getMin() -- Retrieve the minimum element in the stack.

// Example:

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.


/**
 * initialize your data structure here.
 */
const MinStack = function() {
  this.stack = []
  this.min = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.min.length === 0 ||  x <= this.min[this.min.length - 1]) this.min.push(x)
  this.stack.push(x)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const result = this.stack.pop()
  if (this.min[this.min.length - 1] === result) this.min.pop()
  return result
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min[this.min.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
console.log(minStack.getMin())
console.log(minStack.pop())
console.log(minStack.top())
console.log(minStack.getMin())

// Submission Result: Accepted
