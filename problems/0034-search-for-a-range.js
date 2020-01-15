// 34. Search for a Range
// Medium   31%

// Given an array of integers sorted in ascending order, find the starting and
// ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// For example,
// Given [5, 7, 7, 8, 8, 10] and target value 8,
// return [3, 4].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {
  const n = nums.length, result = [-1, -1]
  let i = 0, j = n - 1
  while (i < j) {
    const mid = (i + j) >> 1
    if (nums[mid] < target) i = mid + 1
    else j = mid
  }
  if (nums[i] !== target) return result

  result[0] = i
  j = n - 1
  while (i < j) {
    const mid = ((i + j) >> 1) + 1
    if (nums[mid] > target) j = mid - 1
    else i = mid
  }
  result[1] = j
  return result
}

;[
  [[5, 7, 7, 8, 8, 10], 8],     // [3, 4]
  [[5, 7, 7, 8, 8, 10], 9],     // [-1, -1]
].forEach(args => {
  console.log(searchRange(...args))
})

// Solution:
// 使用两次二分查找法，分别找出左位置和右位置。

// 找最左位置：
// 每次检查中位数。
// 若小于则从其右边一位开始再找；
// 若大于或等于，则从该位及其左边的开始再找；
// 直到左右边界相等。
// 因为要找最左的目标数，找到等于时还不能结束，
// 左边可能还存在目标数，所以等于时还要继续找。
// 第一次找到目标数后，其右边界就必然一直都会是目标数
// 左边界会一直排除非目标数，当左右边界重合时，其位置就是最左的

// 找最右位置：
// 其左边界从前面找到的最左位置开始，因为前面的都没有必要再看了。
// 其余与找最左位置类似。

// Submission Result: Accepted
