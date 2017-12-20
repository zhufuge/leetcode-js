// 414. Third Maximum Number
// Easy   27%


// Given a non-empty array of integers, return the third maximum number in this
// array. If it does not exist, return the maximum number. The time complexity
// must be in O(n).

// Example 1:

// Input: [3, 2, 1]

// Output: 1

// Explanation: The third maximum is 1.

// Example 2:

// Input: [1, 2]

// Output: 2

// Explanation: The third maximum does not exist, so the maximum (2) is returned
// instead.

// Example 3:

// Input: [2, 2, 3, 1]

// Output: 1

// Explanation: Note that the third maximum here means the third maximum distinct
// number.
// Both numbers with value 2 are both considered as second maximum.


/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function(nums) {
  let first = null, second = null, third = null
  for (let i = 0, n = nums.length; i < n; i++) {
    const num = nums[i]
    if (num === first || num === second || num === third) continue
    if (third === null || num > third) third = num
    if (second === null || num > second) [third, second] = [second, num]
    if (first === null || num > first) [second, first] = [first, num]
  }
  return third === null ? first : third
}

;[
  [3, 2, 1],                    // 1
  [1, 2],                       // 2
  [2, 2, 3, 1],                 // 1
].forEach(nums => {
  console.log(thirdMax(nums))
})

// Solution:
// 用三个变量保存前三个最大的数。
// 这三个变量像是一个优先队列一样，数字进来会把最小的数挤出去。


// Submission Result: Accepted
