// 700. Search in a Binary Search Tree
// Easy   71%


// Given the root node of a binary search tree (BST) and a value. You need to
// find the node in the BST that the node's value equals the given value. Return
// the subtree rooted with that node. If such node doesn't exist, you should
// return NULL.
// For example,
// Given the tree:
//         4
//        / \
//       2   7
//      / \
//     1   3
// And the value to search: 2
// You should return this subtree:
//       2
//      / \
//     1   3
// In the example above, if we want to search the value 5, since there is no node
// with value 5, we should return NULL.
// Note that an empty tree is represented by NULL, therefore you would see the
// expected output (serialized tree format) as [], not null.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function(root, val) {
  while (root) {
    if (root.val === val) return root
    root = root.val > val ? root.left : root.right
  }
  return root
}

const recursion = function(root, val) {
  if (root === null || root.val === val) return root
  return searchBST(root.val > val ? root.left : root.right, val)
}

const TreeNode = require('../structs/TreeNode')
;[
  [[4,2,7,1,3], 2],
  [[4,2,7,1,3], 5],
  [[4,2,7,1,3], 4],
  [[4,2,7,1,3], 7],
  [[4,2,7,1,3], 1],
  [[4,2,7,1,3], 3],
].forEach(([array, val]) => {
  console.log(searchBST(TreeNode.from(array), val))
})

// Solution:
// 1. 递归

// 2. 循环

// Submission Result: Accepted