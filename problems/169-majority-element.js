// 169. Majority Element
// Easy   47%


// Given an array of size n, find the majority element. The majority element is
// the element that appears more than └ n/2 ┘ times.

// You may assume that the array is non-empty and the majority element always
// exist in the array.

// Credits:Special thanks to @ts for adding this problem and creating all test
// cases.


/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  const hash = {}, n = nums.length, majority = Math.floor(n / 2)
  for (let i = 0; i < n; i++) {
    const num = nums[i]
    hash[num] = (hash[num] || 0) + 1
    if (hash[num] > majority) return num
  }
  return nums[0]
}

;[
  [1],                          // 1
].forEach(nums => {
  console.log(majorityElement(nums))
})

// Solution:
// 为元素计数，一般使用哈希。

// Submission Result: Accepted
