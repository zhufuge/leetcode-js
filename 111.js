// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the
// root node down to the nearest leaf node.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = function(root) {
  if (root === null) return 0
  const left = minDepth(root.left),
        right = minDepth(root.right)
  if (left === 0) return right + 1
  if (right === 0) return left + 1
  return  1 + Math.min(left, right)
}
