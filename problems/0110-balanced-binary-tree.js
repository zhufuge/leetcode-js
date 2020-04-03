// 110. Balanced Binary Tree
// Easy   37%

// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the depth of the two subtrees of every node never
// differ by more than 1.

// Example 1:

// Given the following tree [3,9,20,null,null,15,7]:

//    3
//   / \
//  9  20
//    /  \
//   15   7

// Return true.

// Example 2:

// Given the following tree [1,2,2,3,3,null,null,4,4]:

//       1
//      / \
//     2   2
//    / \
//   3   3
//  / \
// 4   4

// Return false.

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
const isBalanced = function(root) {
  function diff(root) {
    if (root == null) return 0

    const left = diff(root.left)
    if (left === -1) return left
    const right = diff(root.right)
    if (right === -1) return right
    if (Math.abs(left - right) > 1) return -1

    return 1 + Math.max(left, right)
  }
  return diff(root) !== -1
}

const TreeNode = require('../structs/TreeNode')
;[
  [3,9,20,null,null,15,7],   // true
  [1,2,2,3,3,null,null,4,4], // false
].forEach(array => {
  console.log(isBalanced(TreeNode.from(array)))
})

// Solution:
// 使用递归函数遍历整棵树。
// 函数的返回值有 3 种，
// 1. 正整数表示 树的高度；
// 2. 0 表示节点为 null；
// 3. -1 表示以该节点为根的树不是平衡树。

// 只要有一棵子树不平衡，就可以判断该树不平衡，即 -1 会一直返回。
// 其余值会如同求树高一样返回。

// Submission Result: Accepted
