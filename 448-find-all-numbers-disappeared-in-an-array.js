// 448. Find All Numbers Disappeared in an Array
// Easy   51%


// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some
// elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the
// returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]


/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function(nums) {
  const n = nums.length
  for (let i = 0; i < n;) {
    const num = nums[i]
    if (num !== i + 1 && num !== nums[num - 1]) {
      [nums[i], nums[num - 1]] = [nums[num - 1], num]
    } else {
      i++
    }
  }

  const result = []
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) result.push(i + 1)
  }
  return result
}

;[
  [4,3,2,7,8,2,3,1],            // [5,6]
].forEach(nums => {
  console.log(findDisappearedNumbers(nums))
})

// Solution:
// 在原数组中交换元素。
// 如果该位置的值与位置号不同，则与该值的位置交换。
// 遍历该数组的元素，若位置的值与位置不同，则添加到结果中。

// Submission Result: Accepted
