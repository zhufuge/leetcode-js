// 90. Subsets II
// Medium 36% locked:false

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
  const res = [[]]
  const iter = (r, i, m) => {
    console.log(r, i, m);
    if (r.length === m) res.push([...r])
    else {
      for (let j = i; j < n; j++) {
        if (j === i || nums[j] !== nums[j - 1]) {
          r.push(nums[j])
          iter(r, j + 1, m)
          r.pop()
        }
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    iter([], 0, i)
  }

  return res
}

console.log(subsetsWithDup([1, 2, 2]))
