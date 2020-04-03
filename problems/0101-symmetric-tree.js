// 101. Symmetric Tree
// Easy   39%

// Given a binary tree, check whether it is a mirror of itself (ie, symmetric
// around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// But the following [1,2,2,null,3,null,3] is not:

//    1
//   / \
//  2   2
//   \   \
//   3    3

// Note: Bonus points if you could solve it both recursively and iteratively.

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
const isSymmetric = function(root) {
  if (root == null) return true
  function iter(left, right) {
    if (left === right) return true
    if (left && right && left.val === right.val) {
      return iter(left.left, right.right) && iter(left.right, right.left)
    }
    return false
  }
  return iter(root.left, root.right)
}

const TreeNode = require('../structs/TreeNode')
;[
  [1, 2, 2, 3, 4, 4, 3],        // true
  [1,2,2,null,3,null,3],        // false
].forEach(array => {
  console.log(isSymmetric(TreeNode.from(array)))
})

// Solution:
// 比较左右子节点对象是否相同，相同（同为 null）则返回 true
// 比较左右子节点的值是否相同，相同则递归返回（&&运算）
//  1. 左节点的左子树和右节点的右子树是否相同
//  2. 左节点的右子树和右节点的左子树是否相同
// 否则返回 false

// Submission Result: Accepted
