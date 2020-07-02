// 713. Subarray Product Less Than K
// Medium   39%


// Your are given an array of positive integers nums.
// Count and print the number of (contiguous) subarrays where the product of all
// the elements in the subarray is less than k.
// Example 1:
// Input: nums = [10, 5, 2, 6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are: [10], [5],
// [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
// Note that [10, 5, 2] is not included as the product of 100 is not strictly
// less than k.
// Note:
// 0 < nums.length <= 50000.
// 0 < nums[i] < 1000.
// 0 <= k < 10^6.


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numSubarrayProductLessThanK = function(nums, k) {
  if (k === 0) return 0
  let res = 0
  const queue = []
  let p = 1
  for (let n of nums) {
    p *= n
    queue.push(n)
    while (p >= k && queue.length > 0) {
      const q = queue.shift()
      p /= q
    }
    res += queue.length
  }
  return res
}

;[
  [[10,5,2,6], 100], // 8
  [[10,5,100,2,6], 100], // 6
  [[1,2,3], 0], // 0
  [[1,1,1], 1], // 0
].forEach(([nums, k]) => {
  console.log(numSubarrayProductLessThanK(nums, k))
})

// Solution:
// 使用一个队列 queue 保存子数组
// 用变量 p 记录当前子数组的乘积

// 遍历数组，每次都将当前数添加到 queue 中，若乘积大于或等于 k，则将 queue 中的第一个数移出
// 直至 p 小于 k，再将当前 queue 的长度添加到 res 中（包含最后一个数的子数组的数量）

// TODO #713 尝试不使用 queue

// Submission Result: Accepted