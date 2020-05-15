// 705. Design HashSet
// Easy   59%


// Design a HashSet without using any built-in hash table libraries.
// To be specific, your design should include these functions:
//     add(value): Insert a value into the HashSet.
//     contains(value) : Return whether the value exists in the HashSet or not.
//     remove(value): Remove a value in the HashSet. If the value does not exist
// in the HashSet, do nothing.
// Example:
// MyHashSet hashSet = new MyHashSet();
// hashSet.add(1);
// hashSet.add(2);
// hashSet.contains(1);    // returns true
// hashSet.contains(3);    // returns false (not found)
// hashSet.add(2);
// hashSet.contains(2);    // returns true
// hashSet.remove(2);
// hashSet.contains(2);    // returns false (already removed)
// Note:
//     All values will be in the range of [0, 1000000].
//     The number of operations will be in the range of [1, 10000].
//     Please do not use the built-in HashSet library.


/**
 * Initialize your data structure here.
 */
const MyHashSet = function() {
  this.set = []
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  this.set[key] = true
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  this.set[key] = false
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  return !!this.set[key]
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

;[
  [
    ['MyHashSet','add','add','contains','contains','add','contains','remove','contains'],
    [[],[1],[2],[1],[3],[2],[2],[2],[2]],
  ],
].forEach(([commands, data]) => {
  let myHashSet = null
  for (let i = 0; i < commands.length; i++) {
    switch(commands[i]) {
      case 'MyHashSet':
        myHashSet = new MyHashSet()
        break
      case 'add':
        myHashSet.add(data[i][0])
        break
      case 'contains':
        console.log(myHashSet.contains(data[i][0]))
        break
      case 'remove':
        myHashSet.remove(data[i][0])
        break
    }
  }
})

// Solution:
// 只能用数组来实现了
// 其实JS数组也是一种特殊的hash

// Submission Result: Accepted