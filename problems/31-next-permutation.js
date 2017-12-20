// 31. Next Permutation
// Medium   28%

// Implement next permutation, which rearranges numbers into the
// lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest
// possible order (ie, sorted in ascending order).

// The replacement must be in-place, do not allocate extra memory.

// Here are some examples. Inputs are in the left-hand column and its
//   corresponding outputs are in the right-hand column.

// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function(nums) {
  let i = nums.length - 1
  while (i > 0 && nums[i - 1] >= nums[i]) i--

  if (i > 0) {
    let p = i - 1, q = i
    while (nums[p] < nums[q + 1]) q++
    ;[nums[p], nums[q]] = [nums[q], nums[p]]
  }

  for (let j = nums.length - 1; i < j; i++, j--) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
}

;[
  [2, 3, 1],                    // [3, 1, 2]
  [1, 2, 3],                    // [1, 3, 2]
  [3, 2, 1],                    // [1, 2, 3]
  [1, 1, 5],                    // [1, 5, 1]
  [5, 1, 1],                    // [1, 1, 5]
  [3, 6, 5, 4],                 // [4, 3, 5, 6]
].forEach(nums => {
  nextPermutation(nums)
  console.log(nums)

})

// Solution:
// 从数组末尾开始找第一个小于其后一个数的数的位置。
// 之后这个位置的数与其后大于该数中的最小的一个数交换。
// 最后翻转该位置后的所有数。

// Submission Result: Accepted
