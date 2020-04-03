// 965. Univalued Binary Tree
// Easy   67%


// A binary tree is univalued if every node in the tree has the same value.
// Return true if and only if the given tree is univalued.

// Example 1:
// Input: [1,1,1,1,1,null,1]
// Output: true
// Example 2:
// Input: [2,2,2,5,2]
// Output: false

// Note:
//     The number of nodes in the given tree will be in the range [1, 100].
//     Each node's value will be an integer in the range [0, 99].


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isUnivalTree = function(root) {
  if (root.left) {
    if (root.val !== root.left.val) return false
  }
  if (root.right) {
    if (root.val !== root.right.val) return false
  }
  if (root.left) {
    if (!isUnivalTree(root.left)) return false
  }
  if (root.right) {
    if (!isUnivalTree(root.right)) return false
  }
  return true
}


const TreeNode = require('../structs/TreeNode')
;[
  [1,1,1,1,1,null,1], // true
  [2,2,2,5,2], // false
].forEach((array) => {
  console.log(isUnivalTree(TreeNode.from(array)))
})

// Solution:
// 深度遍历，递归解决即可。

// Submission Result: Accepted