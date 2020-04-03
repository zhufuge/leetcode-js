// 653. Two Sum IV - Input is a BST
// Easy 50% locked:false


// Given a Binary Search Tree and a target number, return true if there exist two
// elements in the BST such that their sum is equal to the given target.

// Example 1:

// Input:
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

// Target = 9

// Output: True

// Example 2:

// Input:
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

// Target = 28

// Output: False


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
const findTarget = function(root, k) {
  function iter(root, map) {
    if (root == void 0) return false
    if (map[root.val]) return true
    map[k - root.val] = true
    return iter(root.left, map) || iter(root.right, map)
  }
  return iter(root, {})
}

const TreeNode = require('../structs/TreeNode')
;[
  [[5, 3, 6, 2, 4, null, 7], 9],  // true
  [[5, 3, 6, 2, 4, null, 7], 28], // false
].forEach(([array, k]) => {
  console.log(findTarget(TreeNode.from(array), k))
})

// Solution:
// 像 two-sum 一样，用键值对来记录。
// 只是这次是遍历二叉树。

// Submission Result: Accepted
