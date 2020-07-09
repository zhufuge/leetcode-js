// 912. Sort an Array
// Medium   63%


// Given an array of integers nums, sort the array in ascending order.

// Example 1:
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Example 2:
// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]

// Constraints:
//     1 <= nums.length <= 50000
//     -50000 <= nums[i] <= 50000


/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function(nums) {
  function qsort(lo, hi) {
    if (lo >= hi) return
    const k = nums[hi]
    let i = lo, j = hi
    while (i < j) {
      while (i < j && nums[i] <= k) i++
      nums[j] = nums[i]
      while (i < j && nums[j] >= k) j--
      nums[i] = nums[j]
    }
    nums[i] = k
    qsort(lo, i - 1)
    qsort(i + 1, hi)
  }
  qsort(0, nums.length - 1)
  return nums
}

;[
  // [5,2,3,1],
  // [5,1,1,2,0,0],
  [-4,0,7,4,9,-5,-1,0,-7,-1],
].forEach((nums) => {
  console.log(sortArray(nums))
})

// Solution:
// 快排

// Submission Result: Accepted