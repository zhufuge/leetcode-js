// 75. Sort Colors
// Medium   38%

// Given an array with n objects colored red, white or blue, sort them so that
// objects of the same color are adjacent, with the colors in the order red,
// white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white,
// and blue respectively.

// Note: You are not suppose to use the library's sort function for this
// problem.

// click to show follow up.

// Follow up: A rather straight forward solution is a two-pass algorithm using
// counting sort. First, iterate the array counting number of 0's, 1's, and 2's,
// then overwrite array with total number of 0's, then 1's and followed by 2's.

// Could you come up with an one-pass algorithm using only constant space?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
  const n = nums.length
  const swap = (a, b) => [nums[a], nums[b]] = [nums[b], nums[a]]
  for (let i = 0, redNum = 0, WhiteNum = 0; i < n; i++) {
    if (nums[i] === 0) {
      if (nums[redNum] === 1) WhiteNum--
      swap(redNum++, i)
    }
    if (nums[i] === 1) swap(redNum + WhiteNum++, i)
  }
}

;[
  [2,0,1,2,1,2,0],
].forEach(nums => {
  console.log(nums)
  sortColors(nums)
  console.log(nums)
})

// Solution:
// 使用两个变量，分别记录当前已排序的数组中的 0 的个数和 1 的个数。
// 遍历整个数组。
// 若当前位置的数字为 0 ，则检查已排序的数组中的 0 后是否为 1 ，
// 若为 1 ，则将 1 的个数减去一个，
// 因为，下一步是将 0 与已排序的数组的所有 0 后的数字交换，
// 这样，已排序中的数组中的 0 的个数会加一，而 1 的个数会减一，
// 如果不是 1 ，也交换，但不必将 1 的个数减一，而 2 的个数并不需要记录；
// 若当前位置的数字为 1（可能原来是0，与已排序的数组中的 1 交换了），
// 则将该数与已排序的数组中的所有 1 后的数字交换，并将 1 的个数加一。

// Submission Result: Accepted
