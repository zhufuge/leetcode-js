// Given a collection of candidate numbers (C) and a target number (T), find all
// unique combinations in C where the candidate numbers sums to T.

// Each number in C may only be used once in the combination.

// Note:

// All numbers (including target) will be positive integers.
//   The solution set must not contain duplicate combinations.

// For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8,
// A solution set is:

// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b)

  const n = candidates.length
  const result = []

  const iter = (i, t, sum) => {
    while (i < n && candidates[i] <= t) {
      if (candidates[i] === t) result.push([...sum, t])
      iter(i + 1, t - candidates[i], [...sum, candidates[i]])
      while (i + 1 < n && candidates[i] === candidates[i + 1]) i++
      i++
    }
  }

  iter(0, target, [])
  return result
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
