// 77. Combinations
// Medium   40%

// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

// For example,
// If n = 4 and k = 2, a solution is:

// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]


/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function(n, k) {
  const res = []
  const iter = (comb, i) => {
    if (comb.length === k) res.push([...comb])
    else {
      for (; i <= n; i++) {
        comb.push(i)
        iter(comb, i + 1)
        comb.pop()
      }
    }
  }
  iter([], 1)
  return res
}

;[
  [2, 1],
  [4, 2],
  [5, 3],
].forEach(args => {
  console.log(combine(...args))
})

// Solution:
// 求组合数，即求出从数字 1~n 中任取 k 个不同的数的全部组合。
// 使用 DFS 来解决。
// 每个组合中的数都按从小到大的顺序进行选择。
// 每个位置上的数字不断按从小到大的顺序进行更换。
// 这样可以防止出现重复的组合。
// DFS 确保遍历到每一个组合。

// Submission Result: Accepted
