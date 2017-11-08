// 303. Range Sum Query - Immutable
// Easy   30%


// Given an integer array nums, find the sum of the elements between indices i
// and j (i ≤ j), inclusive.

// Example:

// Given nums = [-2, 0, 3, -5, 2, -1]

// sumRange(0, 2) -> 1
// sumRange(2, 5) -> -1
// sumRange(0, 5) -> -3

// Note:

// You may assume that the array does not change.
// There are many calls to sumRange function.


/**
 * @param {number[]} nums
 */
const NumArray = function(nums) {
  for (let i = 1, n = nums.length; i < n; i++) {
    nums[i] += nums[i - 1]
  }
  this.nums = nums
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return i ? this.nums[j] - this.nums[i - 1] : this.nums[j]
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */


const obj = new NumArray([-2, 0, 3, -5, 2, -1])
;[
  [0, 2],                       // 1
  [2, 5],                       // -1
  [0, 5],                       // -3
].forEach(args => {
  console.log(obj.sumRange(...args))
})

// Solution:

// 计算多次某个数组的某子序列和时，可以只保存当前数的累积。
// 求 i->j 的和时，只需要计算 0->j 的累积 减去 0->i 的累积。

// Submission Result: Accepted
