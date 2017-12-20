// 189. Rotate Array
// Easy   24%


// Rotate an array of n elements to the right by k steps.

// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to
// [5,6,7,1,2,3,4].

// Note:
// Try to come up as many solutions as you can, there are at least 3 different
// ways to solve this problem.

// [show hint]

// Hint:
// Could you do it in-place with O(1) extra space?

// Related problem: Reverse Words in a String II

// Credits:Special thanks to @Freezen for adding this problem and creating all
// test cases.


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
  // js-array-features
  // k = k % nums.length
  // for (let i = 0; i < k; i++) nums.unshift(nums.pop())

  const n = nums.length
  k = k % n
  for (let j = 0; j < k; j++) {
    const num = nums[n - 1]
    for (let i = n - 1; i > 0; i--) {
      nums[i] = nums[i - 1]
    }
    nums[0] = num
  }
}

;[
  [[1], 0],                     // [1]
  [[1,2,3,4], 3],               // [2,3,4,1]
  [[1,2,3,4,5,6,7], 3],         // [5,6,7,1,2,3,4]
  [[1,2,3,4,5,6,7,8,9,0], 3]    // [8,9,0,1,2,3,4,5,6,7]
].forEach(args => {
  console.log(rotate(...args))
})

// Solution:
// 迭代k次，每次将最后一位移到最前面。
// 或者作为一个队列，弹出最后一个，并弹入最前面。

// Submission Result: Accepted
