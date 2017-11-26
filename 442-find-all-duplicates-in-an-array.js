// 442. Find All Duplicates in an Array
// Medium   56%


// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements
// appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]


/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function(nums) {
  const n = nums.length
  for (let i = 0; i < n;) {
    const num = nums[i]
    if (nums[num - 1] !== num) {
      [nums[i], nums[num - 1]] = [nums[num - 1], num]
    } else i++
  }
  return nums.filter((v, i) => v !== i + 1)
}

;[
  [4,3,2,7,8,2,3,1],            // [2,3]
].forEach(nums => {
  console.log(findDuplicates(nums))
})

// Solution:
// 将每个数送回正确的位置，如果该位置没有被相同的数字占领的话。
// 再遍历归位后的数组，若数与位置不符，则时重复的。

// Submission Result: Accepted
