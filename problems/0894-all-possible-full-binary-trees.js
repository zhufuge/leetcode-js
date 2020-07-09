// 894. All Possible Full Binary Trees
// Medium   74%


// A full binary tree is a binary tree where each node has exactly 0 or 2
// children.
// Return a list of all possible full binary trees with N nodes.  Each element of
// the answer is the root node of one possible tree.
// Each node of each tree in the answer must have node.val = 0.
// You may return the final list of trees in any order.

// Example 1:
// Input: 7
// Output:
// [
//  [0,0,0,null,null,0,0,null,null,0,0],
//  [0,0,0,null,null,0,0,0,0],
//  [0,0,0,0,0,0,0],
//  [0,0,0,0,0,null,null,null,null,0,0],
//  [0,0,0,0,0,null,null,0,0]
// ]
// Explanation:

// Note:
//     1 <= N <= 20


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const TreeNode = require('../structs/TreeNode')

/**
 * @param {number} N
 * @return {TreeNode[]}
 */
const allPossibleFBT = function(N) {
  if (N % 2 === 0) return []
  const cache = new Map()
  for (let i = 1; i <= N; i += 2) {
    if (i === 1) cache.set(i, [new TreeNode(0)])
    else {
      const arr = []
      for (let j = 1; j < i; j += 2) {
        const leftList = cache.get(j)
        const rightList = cache.get(i - j - 1)
        for (let left of leftList) {
          for (let right of rightList) {
            arr.push(new TreeNode(0, left, right))
          }
        }
      }
      cache.set(i, arr)
    }
  }
  return cache.get(N)
}

const recursive = function(N) {
  const res = []
  if (N % 2 === 0) return res
  if (N === 1) return [new TreeNode(0)]

  for (let i = 1; i < N; i += 2) {
    const leftList = allPossibleFBT(i)
    const rightList = allPossibleFBT(N - i - 1)
    for (let left of leftList) {
      for (let right of rightList) {
        res.push(new TreeNode(0, left, right))
      }
    }
  }

  return res
}

;[
  7,
  2,
].forEach((N) => {
  console.log(allPossibleFBT(N))
})

// Solution:
// 1. 使用递归的方法
// 令 N = L + 1 + R，且满足
// 当 N = 1 时，L = R = 0
// 当 N != 1 时， L > 0 && R > 0
// 且 L 和 R 也满足与 N 同样的模式
// 因此，N、L、R 都只能为奇数
// 因此 N 为偶数时返回空数组
// 当 N = 1 时返回 一个节点
// 然后递归生成 L 和 R 的数组
// 用每个 L 和 R 拼接成新的数组

// 2. 在方法1 的基础，使用缓存，不使用递归，避免重复计算。

// Submission Result: Accepted