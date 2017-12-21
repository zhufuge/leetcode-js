// 53. Maximum Subarray
// Easy   39%

// Find the contiguous subarray within an array (containing at least one number)
// which has the largest sum.

// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.

// click to show more practice.
//   More practice:

// If you have figured out the O(n) solution, try coding another solution using
// the divide and conquer approach, which is more subtle.


/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  if (nums == null || nums.length === 0) return 0

  let maxSum = nums[0], that = 0
  for (let i = 0, n = nums.length; i < n; i++) {
    that += nums[i]
    if (that > maxSum) maxSum = that
    if (that < 0) that = 0
  }

  return maxSum
}

;[
  [-2, 1, -3, 4, -1, 2, 1, -5, 4], // 6
  [-1],                            // -1
  [1],                             // 1
].forEach(nums => {
  console.log(maxSubArray(nums))
})

// Solution:
// 使用了动态规划，
// 一直加，每次记录过程中的最大值，
// 当加的过程小于0时，就将值初始化为0，从0开始加。

// 这是对穷举的优化。

// 该问题在《数据结构与算法分析————C语言描述》中有比较详细的分析。
// 书中给出了4种方法。这里的实现使用了第四种方法。
// 但刚好只有这个方法在书中没有详细分析。

// 第一种方法是直接穷举计算。
const solution1 = function(nums) {
  let maxSum = 0, n = nums.length
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // 计算从i到j的总和
      let thisSum = 0
      for (let k = i; k <= j; k++) thisSum += nums[k]
      if (thisSum > maxSum) maxSum = thisSum
    }
  }
  return maxSum
}
// 找出所有的子序列，并计算它们的和，记录最大的一个。

// 第二种方法也是穷举法，但是优化了每个子序列的重复计算。
const solution2 = function(nums) {
  let maxSum = 0, n = nums.length
  for (let i = 0; i < n; i++) {
    let thisSum = 0
    for (let j = i; j < n; j++) {
      // 前面的数的和不需要重复计算
      thisSum += nums[j]
      if (thisSum > maxSum) maxSum = thisSum
    }
  }
  return maxSum
}

// 第三种方法是分治法。
const solution3 = function(nums) {
  function divideAndConquer(i, j) {
    if (i === j) return nums[i]

    const mid = (i + j) >> 1
    let leftMax = 0, rightMax = 0
    for (let k = mid, sum = 0; k >= i; k--) {
      sum += nums[k]
      if (sum > leftMax) leftMax = sum
    }
    for (let k = mid + 1, sum = 0; k <= j; k++) {
      sum += nums[k]
      if (sum > rightMax) rightMax = sum
    }

    return Math.max(
      divideAndConquer(i, mid),
      divideAndConquer(mid + 1, j),
      leftMax + rightMax
    )
  }
  return divideAndConquer(0, nums.length - 1)
}

// 第四种方法是对第二种方法的优化。
// 优化了每次初始化 thisSum，
// 但 thisSum 小于 0 时，初始化其为 0，并只需要从下一个数开始累加。

// Submission Result: Accepted
