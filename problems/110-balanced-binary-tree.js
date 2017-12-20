// 110. Balanced Binary Tree
// Easy 37% locked:false

// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as a binary tree
// in which the depth of the two subtrees of every node never differ by more
// than 1.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function(root) {
  if (root === null) return true

  const depth = (root) => {
    if (root === null) return 0
    const left = depth(root.left),
          right = depth(root.right)
    if (left === -1 || right === -1 ||
        Math.abs(left - right) > 1) return -1
    return 1 + Math.max(left, right)
  }
  return depth(root) !== -1
}
