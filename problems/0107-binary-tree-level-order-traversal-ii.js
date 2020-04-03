// 107. Binary Tree Level Order Traversal II
// Easy   40%

// Given a binary tree, return the bottom-up level order traversal of its nodes'
// values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7

// return its bottom-up level order traversal as:

// [
//   [15,7],
//   [9,20],
//   [3]
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
const levelOrderBottom = function(root) {
  const res = []
  function iter(root, level) {
    if (root != null) {
      if (level >= res.length) res.unshift([])
      res[res.length - level - 1].push(root.val)
      iter(root.left, level + 1)
      iter(root.right, level + 1)
    }
  }
  iter(root, 0)
  return res
}

const TreeNode = require('../structs/TreeNode')
;[
  [3,9,20,null,null,15,7], // [ [ 15, 7 ], [ 9, 20 ], [ 3 ] ]
].forEach(array => {
  console.log(levelOrderBottom(TreeNode.from(array)))
})

// Solution:
// 带一个层级参数，进行递归遍历。
// 根据层级参数和数组的长度来构造数组，
// 当层数大于或等于数组长度时，在数组头部插入一个代表新的层的数组。

// Submission Result: Accepted
