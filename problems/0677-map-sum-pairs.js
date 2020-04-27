// 677. Map Sum Pairs
// Medium   52%


// Implement a MapSum class with insert, and sum methods.

// For the method insert, you'll be given a pair of (string, integer). The string
// represents the key and the integer represents the value. If the key already
// existed, then the original key-value pair will be overridden to the new one.

// For the method sum, you'll be given a string representing the prefix, and you
// need to return the sum of all the pairs' value whose key starts with the
// prefix.

// Example 1:

// Input: insert("apple", 3), Output: Null
// Input: sum("ap"), Output: 3
// Input: insert("app", 2), Output: Null
// Input: sum("ap"), Output: 5


/**
 * Initialize your data structure here.
 */
const MapSum = function() {
  this.map = {}
}

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  this.map[key] = val
}

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  let result = 0
  for (let key in this.map) {
    if (key.indexOf(prefix) === 0) result += this.map[key]
  }
  return result
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */


// Solution:
// 一个哈希表和一个子字符串查找函数解决。

// TODO: #677 官方解法中有性能更高的算法，以后在研究;p

// Submission Result: Accepted
