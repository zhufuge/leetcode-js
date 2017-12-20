// 27. Remove Element
// Easy   39%


// Given an array and a value, remove all instances of that value in place and
// return the new length.

// Do not allocate extra space for another array, you must do this in place with
// constant memory.

// The order of elements can be changed. It doesn't matter what you leave beyond
// the new length.

// Example:
// Given input array nums = [3,2,2,3], val = 3

// Your function should return length = 2, with the first two elements of nums
// being 2.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  let i = 0, j = nums.length - 1
  while (i <= j) {
    if (nums[i] === val) {
      nums[i] = nums[j]
      j--
    } else {
      i++
    }
  }
  return j + 1
}

;[
  [[3, 2, 2, 3], 3],                 // [2, 2, 2, 3] 2
  [[1,2,3,4,5,3,5,2,3,6], 3],        // [1,2,6,4,5,2,5] 7
  [[1], 1],                          // [1] 0
].forEach(args => {
  console.log(removeElement(...args))
})

// Solution:
// 找到需要删除的数，就用最后的数来代替它（放到它的位置上）。
// i用于遍历，j用于最后的可用交换数。

// Submission Result: Accepted
