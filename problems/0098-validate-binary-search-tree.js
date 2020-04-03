// 98. Validate Binary Search Tree
// Medium 23% locked:false

// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's
//   - key. The right subtree of a node contains only nodes with keys greater
//   - than the node's key. Both the left and right subtrees must also be binary
//   - search trees.

// Example 1:

//   2
//  / \
// 1   3

// Binary tree [2,1,3], return true.

// Example 2:

//   1
//  / \
// 2   3

// Binary tree [1,2,3], return false.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

function createTree(array) {
  if (array === null || array === void 0) return null
  const root = new TreeNode(array[0])
  root.left = createTree(array[1])
  root.right = createTree(array[2])
  return root
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function(root) {
  const isValid = (root, min, max) => {
    if (root === null) return true
    if (root.val <= min || root.val >= max) return false
    return isValid(root.left, min, root.val) &&
      isValid(root.right, root.val, max)
  }
  return isValid(root, -Infinity, Infinity)
}

const tree = createTree(
  [1, [1], null]
)
console.log(isValidBST(tree))
