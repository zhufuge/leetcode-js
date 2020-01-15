// 268. Missing Number
// Easy   44%


// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find
// the one that is missing from the array.

// For example,
// Given nums = [0, 1, 3] return 2.

// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it
// using only constant extra space complexity?

// Credits:Special thanks to @jianchao.li.fighter for adding this problem and
// creating all test cases.


/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  const n = nums.length
  for (let i = 0; i < n;) {
    const num = nums[i]
    if (num < i) {
      [nums[i], nums[num]] = [nums[num], num]
    } else {
      i++
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i) return i
  }
  return n
}

;[
  [0,1,3],                      // 2
].forEach(nums => {
  console.log(missingNumber(nums))
})

// Solution:
// 若位置i的元素小于i时，为该元素找到其应该位于的位置。

// Submission Result: Accepted
