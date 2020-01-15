// 561. Array Partition I
// Easy   66%


// Given an array of 2n integers, your task is to group these integers into n
// pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of
// min(ai, bi) for all i from 1 to n as large as possible.

// Example 1:

// Input: [1,4,3,2]

// Output: 4
// Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3,
// 4).

// Note:

// n is a positive integer, which is in the range of [1, 10000].
// All the integers in the array will be in the range of [-10000, 10000].


/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function(nums) {
  const n = nums.length
  nums.sort((a, b) => a - b)
  let result = 0
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) result += nums[i]
  }
  return result
}

;[
  [1,4,3,2],                    // 4
].forEach(nums => {
  console.log(arrayPairSum(nums))
})

// Solution:
// 要分成两个元素一组，且选择组中较小的那个元素，并将每组选择的元素相加。
// 还要保证在所有分组的可能性选择最大的那个。

// 如何确保总和最大呢？
// 首先数组里最大的数是不可能选的，因为这个数无论在那个组中都不会被选到。
// 但是选择第二大的数是有可能的，只要它和最大的数在一个组。
// 然后在剩余的元素中继续让最大的两个数在一组，这样总能选到第二大的数。
// 这样就能确保总和是最大的。

// 先将数组按递升顺序排序。
// 如果只有两个元素，则是第一个元素，
// 如果有四个元素，则只能选第一和第三，
// 以此类推，选择奇数位元素。

// Submission Result: Accepted
