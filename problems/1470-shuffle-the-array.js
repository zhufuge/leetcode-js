// 1470. Shuffle the Array
// Easy   90%


// Given the array nums consisting of 2n elements in the form
// [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Example 1:
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is
// [2,3,5,4,1,7].
// Example 2:
// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]
// Example 3:
// Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]

// Constraints:
//     1 <= n <= 500
//     nums.length == 2n
//     1 <= nums[i] <= 10^3


/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function(nums, n) {
  let q = []
  for (let i = 0; i < n; i++) {
    if (i * 2 < n) q.push(nums[i * 2], nums[i * 2 + 1])
    nums[i * 2] = q.shift()
    nums[i * 2 + 1] = nums[n + i]
  }
  return nums
}

;[
  [[2,5,1,3,4,7], 3],
  [[1,2,3,4,4,3,2,1], 4],
  [[1,1,2,2], 2],
].forEach(([nums, n]) => {
  console.log(shuffle(nums, n))
})

// Solution:
// 1. 构造一个新数组，在每个位置上放对应的数即可。
// 需要重新分配一个数组长度的内存

// 2. 在原数组上完成
// 这就需要考虑设置新的值后，原来的值会丢失的问题。

// 使用一个 queue 优先队列来记录被覆盖的数。
// 使用了 O(n/2) 的内存

// LEARN #1470 讨论中有真正的 O(1) 内存的方法，去学习一下吧

// Submission Result: Accepted