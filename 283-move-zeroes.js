// 283. Move Zeroes
// Easy   50%


// Given an array nums, write a function to move all 0's to the end of it while
// maintaining the relative order of the non-zero elements.

// For example, given nums  = [0, 1, 0, 3, 12], after calling your function, nums
// should be [1, 3, 12, 0, 0].

// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// Credits:Special thanks to @jianchao.li.fighter for adding this problem and
// creating all test cases.


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  for (let i = 1, n = nums.length; i < n; i++) {
    let j = i
    while (j > 0 && nums[j] && !nums[j - 1]) {
      [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]]
      j--
    }
  }
  console.log(nums)
}

;[
  [0, 1, 0, 3, 12],             // [1, 3, 12, 0, 0]
].forEach(nums => {
  moveZeroes(nums)
})

// Solution:
// 在遍历数组的过程中，遇到不为 0 的数时，检查其前一个数是否为 0，
// 如果是，则不断交换，直到其前一个数不为 0

// Submission Result: Accepted
