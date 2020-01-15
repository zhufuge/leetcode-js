// 78. Subsets
// Medium   41%

// Given a set of distinct integers, nums, return all possible subsets.

// Note: The solution set must not contain duplicate subsets.

// For example,
// If nums = [1,2,3], a solution is:

// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
  const n = nums.length
  const res = []

  const combine = (array, m, i) => {
    if (array.length === m) res.push(array.map(v => nums[v]))
    else {
      for (; i < n; i++) {
        array.push(i)
        combine(array, m, i + 1)
        array.pop()
      }
    }
  }
  for (let i = 0; i <= n; i++) {
    combine([], i, 0)
  }

  return res
}

;[
  [],
  [2, 3, 4, 5],
  [1, 2, 3],
].forEach(nums => {
  console.log(subsets(nums))
})

// Solution:
// 求一个数组的所有子集（包括空集和本身）。
// 使用 77-combinations 中的组合函数。
// 分别找出长度为 0 到数组长度的所有组合。

// Submission Result: Accepted
