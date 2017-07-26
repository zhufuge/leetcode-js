// Given a collection of numbers that might contain duplicates, return all
// possible unique permutations.

// For example,
// [1,1,2] have the following unique permutations:

// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function(nums) {
  nums.sort((a, b) => a - b)
  const res = []
  const iter = (p, q) => {
    const m = p.length
    if (m === 0) res.push(q)
    for (let i = 0; i < m; i++) {
      iter(p.filter((v, ii) => ii !== i), [...q, p[i]])
      while (p[i] === p[i + 1] && i < m) i++
    }
  }

  iter(nums, [])
  return res
}

console.log(permuteUnique([1, 1, 2]))
