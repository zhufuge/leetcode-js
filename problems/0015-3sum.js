// 15. 3Sum
// Medium  21%

// Given an array S of n integers, are there elements a, b, c in S such that a +
// b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note: The solution set must not contain duplicate triplets.

// For example, given array S = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum0 = function(nums) {
  const n = nums.length, result = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < n - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let lo = i + 1, hi = n - 1
      while (lo < hi) {
        const sum = nums[i] + nums[lo] + nums[hi]
        if (sum < 0) lo++
        else if (sum > 0) hi--
        else {
          result.push([nums[i], nums[lo], nums[hi]])
          while (++lo < hi && nums[lo] === nums[lo - 1]);
          while (lo < --hi && nums[hi] === nums[hi + 1]);
        }
      }
    }
  }
  return result
}

;[
  [0, 0, 0],
  [-2,0,0,2,2,0],
  [3,0,-2,-1,1,2],
  [-1,0,1,2,-1,-4],
].forEach(nums => {
  console.log(threeSum0(nums))
})

// Solution:

// 解法1
// 3个数之和为0，以正负类型来看可分为4种情况：
// 1. 全为0；
// 2. 一个0一个正数一个负数；
// 3. 一个正数两个负数；
// 4. 两个正数一个负数。

// 将数组中的数分为3个组，零组，正数组，负数组
// 1) 零组有三个及其以上，则将[0,0,0]添加到结果中。
// 2) 对于正（负）数组中的每个数，扫描负（正）数组中的数，使用 [1.Two Sum] 中的解法
// （即使用哈希表），找出匹配的两个数，并添加到结果中。

// 简单的编码中，无法排除重复的组合。
// 若要排除重复的组合必然会增加程序的复杂性。

// 解法2
// 排序
// 对每个数，从数组两侧开始向中间遍历，
// 计算三个数之和
// 若小了，说明小的数太小了，左边前进一位，
// 若大了，说明大的数太大了，右边前进一位，
// 否则将三个数添加到结果中，并寻找下一个组合。
// 为了避免重复，每次找到适合的数后，左右都要前进到与原来数不同的位置上。

// Submission Result: Accepted
