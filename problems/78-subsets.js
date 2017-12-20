// 78. Subsets
// Medium 41% locked:false

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
  if (n === 0) return [[]]

  const res = []
  const combine = (m, p, i) => {
    if (p.length === m) res.push(p.map(v => nums[v]))
    else {
      for (; i < n; i++) {
        p.push(i)
        combine(m, p, i + 1)
        p.pop()
      }
    }
  }
  for (let i = 0; i <= n; i++) {
    combine(i, [], 0)
  }

  return res
}

console.log(subsets([2, 3, 4, 5]))
