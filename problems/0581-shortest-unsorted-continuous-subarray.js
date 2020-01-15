// 581. Shortest Unsorted Continuous Subarray
// Easy   29%


// Given an integer array, you need to find one continuous subarray that if you
// only sort this subarray in ascending order, then the whole array will be
// sorted in ascending order, too.

// You need to find the shortest such subarray and output its length.

// Example 1:

// Input: [2, 6, 4, 8, 10, 9, 15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the
// whole array sorted in ascending order.

// Note:

// Then length of the input array is in range [1, 10,000].
// The input array may contain duplicates, so ascending order here means <=.


/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = function(nums) {
  const n = nums.length
  let head = 10000, tail = 10000
  for (let i = 1; i < n; i++) {
    if (nums[i - 1] > nums[i]) {
      let j = i, max = nums[i - 1]
      while (nums[--j] > nums[i]) max = Math.max(max, nums[j])
      head = Math.min(head, j)
      tail = i
      ;[nums[j + 1], nums[i]] = [nums[i], max]
    }
  }
  return tail - head
}

;[
  [2, 6, 4, 8, 10, 9, 15],      // 5
  [1,2,3,4],                    // 0
  [2,3,3,2,4],                  // 3
  [1,3,2,2,2],                  // 4
  [2,1,1,1,1],                  // 5
  [1,3,5,2,4],                  // 4
].forEach(nums => {
  console.log(findUnsortedSubarray(nums))
})

// Solution:

// 1. 遍历一遍，遇到 [i - 1] > [i]，就替换，并记录
// 失败，反例:例子3

// 2. 遍历一遍，但过程中遇到 [i - 1] > [i]时，
// 使用类似插入排序的方法寻找其应该插入的位置 j + 1
// 在寻找过程中，还记录一个最大值 max
// 并在最后，将 [j+1] 替换为 [i]，[i] 替换为 max

// 这样，在迭代过程中，乱序被整理成了虚拟的顺序，即
// 一个子序列的开头为该子序列的最小值，而结尾为该子序列的最大值。

// Submission Result: Accepted
