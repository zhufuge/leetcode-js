// 628. Maximum Product of Three Numbers
// Easy   45%


// Given an integer array, find three numbers whose product is maximum and output
// the maximum product.

// Example 1:

// Input: [1,2,3]
// Output: 6

// Example 2:

// Input: [1,2,3,4]
// Output: 24

// Note:

// The length of the given array will be in range [3,104] and all elements are in
// the range [-1000, 1000].
// Multiplication of any three numbers in the input won't exceed the range of
// 32-bit signed integer.


/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = function(nums) {
  const n = nums.length
  nums.sort((a, b) => a - b)
  return Math.max(
    nums[n - 3] * nums[n - 2] * nums[n - 1],
    nums[0] * nums[1] * nums[n - 1]
  )
}

;[
  [1,2,3],                      // 6
  [1,2,3,4],                    // 24
].forEach(nums => {
  console.log(maximumProduct(nums))
})

// Solution:
// 根据数组中的元素类型，分情况讨论：
// 1. 全为正数且可以包括0，则选择 3 个最大的数相乘。
// 2. 全为负数且可以包括0，同样选择 3 个最大的数相乘。
// 3. 正/负/0都有，选择以下两种情况中较大的一种：
//    1) 3 个最大的数相乘
//    2) 一个最大的数，和两个最小的负数相乘

// 数组排序。
// 上面 3 种情况可以合并为一种（即情况3）。

// Submission Result: Accepted
