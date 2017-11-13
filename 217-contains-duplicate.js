// 217. Contains Duplicate
// Easy   46%


// Given an array of integers, find if the array contains any duplicates. Your
// function should return true if any value appears at least twice in the array,
// and it should return false if every element is distinct.


/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  const n = nums.length, hash = {}
  for (let i = 0; i < n; i++) {
    if (hash[nums[i]]) return true
    hash[nums[i]] = true
  }
  return false
}

;[
  [1,2,3,4,5,6,1],              // true
].forEach(nums => {
  console.log(containsDuplicate(nums))
})

// Solution:
// 用一个哈希来保存出现的字符，
// 若再次出现，则返回 true，否则 false 。

// Submission Result: Accepted
