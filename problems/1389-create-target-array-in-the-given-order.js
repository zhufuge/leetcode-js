// 1389. Create Target Array in the Given Order
// Easy   83%


// Given two arrays of integers nums and index. Your task is to create target
// array under the following rules:
//     Initially target array is empty.
//     From left to right read nums[i] and index[i], insert at index index[i] the
// value nums[i] in target array.
//     Repeat the previous step until there are no elements to read in nums and
// index.
// Return the target array.
// It is guaranteed that the insertion operations will be valid.

// Example 1:
// Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
// Output: [0,4,1,3,2]
// Explanation:
// nums       index     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]
// Example 2:
// Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
// Output: [0,1,2,3,4]
// Explanation:
// nums       index     target
// 1            0        [1]
// 2            1        [1,2]
// 3            2        [1,2,3]
// 4            3        [1,2,3,4]
// 0            0        [0,1,2,3,4]
// Example 3:
// Input: nums = [1], index = [0]
// Output: [1]

// Constraints:
//     1 <= nums.length, index.length <= 100
//     nums.length == index.length
//     0 <= nums[i] <= 100
//     0 <= index[i] <= i


/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
const createTargetArray = function(nums, index) {
  const res = []
  for (let i = 0; i < nums.length; i++) {
    res.splice(index[i], 0, nums[i])
  }
  return res
}

;[
  [[0,1,2,3,4], [0,1,2,2,1]],
  [[1,2,3,4,0], [0,1,2,3,0]],
  [[1], [0]],
].forEach(([nums, index]) => {
  console.log(createTargetArray(nums, index))
})

// Solution:
// 使用 splice 函数

// Submission Result: Accepted