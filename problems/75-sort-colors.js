// 75. Sort Colors
// Medium 38% locked:false

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
  if (nums.length === 0) return

  const color = {0: 0, 1: 0, 2: 0}
  for (let v of nums) color[v]++

  for (let i = 0; i < n; i++) {
    if (i < color[0]) nums[i] = 0
    else if (i < color[0] + color[1]) nums[i] = 1
    else nums[i] = 2
  }
}

const color = [2,0,1,2,1,2,0]
console.log(color)
sortColors(color)
console.log(color)

const onePass = function(nums) {
  const n = nums.length
  if (nums.length === 0) return

  const swap = (i, j) => [nums[i], nums[j]] = [nums[j], nums[i]]
  let r = 0, w = 0
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      if (nums[r] === 1) w--
      swap(r++, i)
    }
    if (nums[i] === 1) swap((r + w++), i)
  }
}

const color2 = [2,0,1,2,1,2,0]
console.log(color2)
onePass(color2)
console.log(color2)
