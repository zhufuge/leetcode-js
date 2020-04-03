// 103. Binary Tree Zigzag Level Order Traversal
// Medium 35% locked:false

// Given a binary tree, return the zigzag level order traversal of its nodes'
// values. (ie, from left to right, then right to left for the next level and
// alternate between).

// For example:
// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7

// return its zigzag level order traversal as:

// [
//   [3],
//   [20,9],
//   [15,7]
// ]


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */


/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = function(root) {
  const res = []
  function iter(root, level) {
    if (root) {
      if (!res[level]) res[level] = []

      if (level % 2) res[level].unshift(root.val)
      else res[level].push(root.val)

      iter(root.left, level + 1)
      iter(root.right, level + 1)
    }
  }

  iter(root, 0)
  return res
}

const TreeNode = require('../structs/TreeNode')
;[
  [3,9,20,null,null,15,7], // [ [ 3 ], [ 20, 9 ], [ 15, 7 ] ]
].forEach(array => {
  console.log(zigzagLevelOrder(TreeNode.from(array)))
})

// Solution:
// 递归遍历，遍历过程中，带上层级参数 level ，根据 level 来插入对应数组。
// 插入的时候，根据 level 的奇偶性来判断插入头或尾。

// Submission Result: Accepted
