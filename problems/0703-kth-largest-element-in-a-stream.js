// 703. Kth Largest Element in a Stream
// Easy   48%


// Design a class to find the kth largest element in a stream. Note that it is
// the kth largest element in the sorted order, not the kth distinct element.
// Your KthLargest class will have a constructor which accepts an integer k and
// an integer array nums, which contains initial elements from the stream. For
// each call to the method KthLargest.add, return the element representing the
// kth largest element in the stream.
// Example:
// int k = 3;
// int[] arr = [4,5,8,2];
// KthLargest kthLargest = new KthLargest(3, arr);
// kthLargest.add(3);   // returns 4
// kthLargest.add(5);   // returns 5
// kthLargest.add(10);  // returns 5
// kthLargest.add(9);   // returns 8
// kthLargest.add(4);   // returns 8
// Note:
// You may assume that nums' length &ge; k-1 and k &ge; 1.


/**
 * @param {number} k
 * @param {number[]} nums
 */
const KthLargest = function(k, nums) {
  this.nums = nums.sort((a, b) => b - a).slice(0, k)
  this.min = k - 1
  this.len = k
  console.log(this.nums)
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  if (this.nums.length < this.len) this.nums.push(val)
  else if (val > this.nums[this.min]) {
    this.nums[this.min] = val
  }
  for (let i = 0; i < this.nums.length; i++) {
    if (this.nums[i] < this.nums[this.min]) this.min = i
  }
  return this.nums[this.min]
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

;[
  // [
  //   ['KthLargest','add','add','add','add','add'],
  //   [[3,[4,5,8,2]],[3],[5],[10],[9],[4]],
  // ],
  // [
  //   ["KthLargest","add","add","add","add","add"],
  //   [[1,[]],[-3],[-2],[-4],[0],[4]],
  // ],
  [
    ["KthLargest","add","add","add","add","add"],
    [[3,[4,5,8,2]],[3],[5],[10],[9],[4]],
  ],
].forEach(([commands, data]) => {
  let kthLargest = null
  for (let i = 0; i < commands.length; i++) {
    switch (commands[i]) {
      case 'KthLargest':
        kthLargest = new KthLargest(data[i][0], data[i][1])
        break
      case 'add':
        console.log(kthLargest.add(data[i][0]))
    }
  }
})

// Solution:
// 思路1
// 排序原数组，每添加一个数，就使用插入排序时的插入方法插入数字，然后取出第 k 个数

// 思路2
// 先排序原数组，然后截取最大的 k 个数，并保存数组中最小值的下标，
// 每添加一个数，都与最小值比较
// - 小于或等于时直接返回最小值
// - 大于时，将该数替换最小值，并重新寻找数组中的最小值返回
// ! 注意，原数组的长度小于 k 时，每添加一个数，都添加到数组中，并寻找返回最小值。

// TODO: #703 使用堆来解决

// Submission Result: Accepted