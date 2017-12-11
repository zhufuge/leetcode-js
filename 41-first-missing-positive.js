// 41. First Missing Positive
// Hard   25%

// Given an unsorted integer array, find the first missing positive integer.

// For example,
// Given [1,2,0] return 3,
// and [3,4,-1,1] return 2.

// Your algorithm should run in O(n) time and uses constant space.


/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function(nums) {
  const n = nums.length

  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      const t = nums[i] - 1
      ;[nums[i], nums[t]] = [nums[t], nums[i]]
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) return i + 1
  }

  return n + 1
}

;[
  [1,2,0],                      // 3
  [3,4,-1,1],                   // 2
  [2, 5, 4, -1, 2, 1, 6, 3],    // 7
].forEach(nums => {
  console.log(firstMissingPositive(nums))
})

// Solution:
// 不断交换元素的位置。
// 若某个数应在的位置没有被相同的数先占领，则将该数放置在该在的位置。
// 否则先跳过该数所在的位置，看下一个位置的数。

// Submission Result: Accepted
