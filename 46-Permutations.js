// 46. Permutations
// Medium 44% locked:false

// Given a collection of distinct numbers, return all possible permutations.

// For example,
// [1,2,3] have the following permutations:

// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  const n = nums.length

  const res = []
  const iter = (p, q) => {
    const m = p.length
    if (m === 0) res.push(q)
    for (let i = 0; i < m; i++) {
      iter(p.filter((v, ii) => ii !== i), [...q, p[i]])
    }
  }

  iter(nums, [])
  return res
}

console.log(permute([1, 2, 3]))
