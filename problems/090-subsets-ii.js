// 90. Subsets II
// Medium   36%

// Given a collection of integers that might contain duplicates, nums, return
// all possible subsets.

// Note: The solution set must not contain duplicate subsets.

// For example,
// If nums = [1,2,2], a solution is:

// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  const res = []
  const iter = (array, m, i) => {
    if (array.length === m) res.push([...array])
    else {
      for (let j = i; j < n; j++) {
        if (j === i || nums[j] !== nums[j - 1]) {
          array.push(nums[j])
          iter(array, m, j + 1)
          array.pop()
        }
      }
    }
  }

  for (let i = 0; i <= n; i++) {
    iter([], i, 0)
  }

  return res
}

;[
  [1, 2, 2],
  [0, 2, 1, 2],
].forEach(nums => {
  console.log(subsetsWithDup(nums))
})

// Solution:
// 先排序，使得相同的数字排在一起，以便能在选择的时候跳过相同的数字。
// 同样像 78-subsets.js 类似的方法，即使用 DFS。
// 区别是同一个位置上的数只替换不同的数。

// Submission Result: Accepted
