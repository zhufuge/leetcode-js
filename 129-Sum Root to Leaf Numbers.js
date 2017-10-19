// 129. Sum Root to Leaf Numbers
// Medium 37% locked:false

// Given a binary tree containing digits from 0-9 only, each root-to-leaf path
// could represent a number.

// An example is the root-to-leaf path 1->2->3 which represents the number 123.

// Find the total sum of all root-to-leaf numbers.

// For example,

//   1
//  / \
// 2   3

// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.

// Return the sum = 12 + 13 = 25.

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
const sumNumbers = function(root) {
  if (root === null) return 0
  const recursion = (tree, val) => {
    const cur = val * 10 + tree.val
    if (!tree.left && !tree.right) return cur
    return (tree.left ? recursion(tree.left, cur) : 0) +
      (tree.right ? recursion(tree.right, cur) : 0)
  }

  return recursion(root, 0)
}
