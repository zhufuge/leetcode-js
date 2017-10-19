// 80. Remove Duplicates from Sorted Array II
// Medium 36% locked:false

// Follow up for "Remove Duplicates": What if duplicates are allowed at most
// twice?

// For example, Given sorted array nums = [1,1,1,2,2,3],

// Your function should return length = 5, with the first five elements of nums
// being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new
// length.

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  let next = true
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      next = true
    } else if (next) {
      next = false
    } else {
      nums.splice(i--, 1)
    }
  }

  console.log(nums);
  return nums.length
}

console.log(removeDuplicates([1, 1, 1, 1, 1, 1, 2, 2, 2, 3]))
