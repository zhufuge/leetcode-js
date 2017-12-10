// 40. Combination Sum II
// Medium   34%

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
  candidates.sort((a, b) => b - a)
  const result = []
  function iter(i, target, array) {
    for (; i >= 0; i--) {
      const c = candidates[i]
      if (c > target) break
      if (c === target) result.push([...array, c])
      array.push(c)
      iter(i - 1, target - c, array)
      array.pop()
      while (i >= 0 && c === candidates[i - 1]) i--
    }
  }

  iter(candidates.length - 1, target, [])
  return result
}

;[
  [[10, 1, 2, 7, 6, 1, 5], 8],
].forEach(args => {
  console.log(combinationSum2(...args))
})

// Solution:
// 有重复数字，但每个出现在数组中的数字只能使用一次。
// 使用类似深度遍历的方法。
// 不过每次回溯到原来的地方时，都跳过重复数字（数组已排序）。

// Submission Result: Accepted
