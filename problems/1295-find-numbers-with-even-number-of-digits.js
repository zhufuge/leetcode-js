// 1295. Find Numbers with Even Number of Digits
// Easy   84%


// Given an array nums of integers, return how many of them contain an even
// number of digits.

// Example 1:
// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation:
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).
// 2 contains 1 digit (odd number of digits).
// 6 contains 1 digit (odd number of digits).
// 7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.
// Example 2:
// Input: nums = [555,901,482,1771]
// Output: 1
// Explanation:
// Only 1771 contains an even number of digits.

// Constraints:
//     1 <= nums.length <= 500
//     1 <= nums[i] <= 10^5


/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function(nums) {
  // return nums.reduce((pre, n) => pre + (String(n).length % 2 ^ 1), 0)
  return nums.reduce((p, n) => p + (n === 100000 || (10000 > n && n > 999) || (100 > n && n > 9) ? 1 : 0), 0)
}

;[
  [12,345,2,6,7896],
  [555,901,482,1771],
  [100000],
].forEach((nums) => {
  console.log(findNumbers(nums))
})

// Solution:
// 转成字符串判断位数。

// 或 判断数值是否在以下范围内：
// 1）n == 100000
// 2) 9999 >= n >= 1000, 即 10000 > n > 999
// 3) 99 >= n >= 10， 即 100 > n > 9

// Submission Result: Accepted