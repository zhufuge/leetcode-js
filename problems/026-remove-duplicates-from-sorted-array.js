// 26. Remove Duplicates from Sorted Array
// Easy   35%

// Given a sorted array, remove the duplicates in place such that each element
// appear only once and return the new length.

// Do not allocate extra space for another array, you must do this in place with
// constant memory.

// For example,
// Given input array nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums
// being 1 and 2 respectively. It doesn't matter what you leave beyond the new
// length.

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  const n = nums.length
  if (n === 0) return 0

  let i = 0
  for (let j = 1; j < n; j++) {
    if (nums[j] !== nums[i]) {
      i++
      nums[i] = nums[j]
    }
  }

  return i + 1
}

;[
  [1, 2, 2, 3, 3, 3, 4],        // 4
].forEach(nums => {
  console.log(removeDuplicates(nums))
})

// Solution:
// 保存两个下标
// j用于遍历整个数组
// i用于交换后，前k个不同数的下标。

// Submission Result: Accepted
