// 706. Design HashMap
// Easy   59%


// Design a HashMap without using any built-in hash table libraries.
// To be specific, your design should include these functions:
//     put(key, value) : Insert a (key, value) pair into the HashMap. If the
// value already exists in the HashMap, update the value.
//     get(key): Returns the value to which the specified key is mapped, or -1 if
// this map contains no mapping for the key.
//     remove(key) : Remove the mapping for the value key if this map contains
// the mapping for the key.
// Example:
// MyHashMap hashMap = new MyHashMap();
// hashMap.put(1, 1);
// hashMap.put(2, 2);
// hashMap.get(1);            // returns 1
// hashMap.get(3);            // returns -1 (not found)
// hashMap.put(2, 1);          // update the existing value
// hashMap.get(2);            // returns 1
// hashMap.remove(2);          // remove the mapping for 2
// hashMap.get(2);            // returns -1 (not found)
// Note:
//     All keys and values will be in the range of [0, 1000000].
//     The number of operations will be in the range of [1, 10000].
//     Please do not use the built-in HashMap library.


/**
 * Initialize your data structure here.
 */
const MyHashMap = function() {
  this.map = []
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  this.map[key] = value
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  return this.map[key] === undefined ? -1 : this.map[key]
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  this.map[key] = -1
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

;[
  // [
  //   ['MyHashMap','put','put','get','get','put','get', 'remove', 'get'],
  //   [[],[1,1],[2,2],[1],[3],[2,1],[2],[2],[2]],
  // ],
  [
    ["MyHashMap","remove","put","put","put","put","put","put","get","put","put"],
    [[],[2],[3,11],[4,13],[15,6],[6,15],[8,8],[11,0],[11],[1,10],[12,14]],
  ]
].forEach(([commands, data]) => {
  let myHashMap = null
  for (let i = 0; i < commands.length; i++) {
    switch(commands[i]) {
      case 'MyHashMap':
        myHashMap = new MyHashMap()
        break
      case 'put':
        myHashMap.put(...data[i])
        break
      case 'get':
        console.log(myHashMap.get(data[i][0]))
        break
      case 'remove':
        myHashMap.remove(data[i][0])
        break
    }
  }
})

// Solution:
// 用数组模拟。
// 但是空间复杂度极大
// JS 的对象又是 hash 实现的。

// Submission Result: Accepted