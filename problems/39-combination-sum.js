// 39. Combination Sum
// Medium   39%

// Given a set of candidate numbers (C) (without duplicates) and a target number
// (T), find all unique combinations in C where the candidate numbers sums to T.

// The same repeated number may be chosen from C unlimited number of times.

// Note:

// All numbers (including target) will be positive integers.
//   The solution set must not contain duplicate combinations.

// For example, given candidate set [2, 3, 6, 7] and target 7,
// A solution set is:

// [
//   [7],
//   [2, 2, 3]
// ]


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
  candidates.sort((a, b) => b - a)
  const result = []
  function iter(i, target, array) {
    for (; i >= 0; i--) {
      const c = candidates[i]
      if (c > target) break
      if (c === target) result.push([...array, c])
      array.push(c)
      iter(i, target - c, array)
      array.pop()
    }
  }

  iter(candidates.length - 1, target, [])
  return result
}

;[
  [[2, 3, 6, 7], 7],            // [[7], [2,2,3]]
].forEach(args => {
  console.log(combinationSum(...args))
})

// Solution:
// 因为每个数都能重复使用，因此使用类似深度遍历。
// 为了方便遍历，先排序数组。

// Submission Result: Accepted
