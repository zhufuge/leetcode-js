// 111. Minimum Depth of Binary Tree
// Easy   33%

// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the
// root node down to the nearest leaf node.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = function(root) {
  if (root == null) return 0
  const left = minDepth(root.left)
  const right = minDepth(root.right)
  if (left === 0) return right + 1
  if (right === 0) return left + 1
  return  1 + Math.min(left, right)
}

const TreeNode = require('../structs/TreeNode')
;[
  [1, 2],                       // 2
  [3,9,20,null,null,15,7],      // 2
  [1,2,2,3,3,null,null,4,4],    // 2
].forEach(array => {
  console.log(minDepth(TreeNode.from(array)))
})

// Solution:
// 将左右子树中最小的高度加一返回。
// 注意空节点（null）不能当作最小高度，因此一边为 0 时，返回另一边加一。

// Submission Result: Accepted
