// 100. Same Tree
// Easy   46%

// Given two abinary trees, write a function to check if they are equal or not.

// Two binary trees are considered equal if they are structurally identical and
// the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
  if (p === q) return true
  if (p == null || q == null || p.val !== q.val) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}


const TreeNode = require('../structs/TreeNode')
;[
  [[1, 2, 2, 3, 4, 3, 4], [1, 2, 2, 3, 4, 3, 4]], // true
].forEach(([p, q]) => {
  console.log(isSameTree(TreeNode.from(p), TreeNode.from(q)))
})

// Solution:
// 递归遍历两棵树的相同位置的节点（包括空子节点，即 null）
// 1. 如果两节点相同则返回 true，这种情况中只有一种可能，两节点同为 null,
//    因为两个 js 对象的内容相同，指针不同，比较起来值是不同的。
// 2. 如果两节点不同为 null, 只有一个为 null, 值必然不同。
// 3. 两个值均不为 null, 且均不相同，值也不同。

// Submission Result: Accepted
