// 951. Flip Equivalent Binary Trees
// Medium   66%


// For a binary tree T, we can define a flip operation as follows: choose any
// node, and swap the left and right child subtrees.
// A binary tree X is flip equivalent to a binary tree Y if and only if we can
// make X equal to Y after some number of flip operations.
// Write a function that determines whether two binary trees are flip equivalent.
//  The trees are given by root nodes root1 and root2.

// Example 1:
// Input: root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 =
// [1,3,2,null,6,4,5,null,null,null,null,8,7]
// Output: true
// Explanation: We flipped at nodes with values 1, 3, and 5.

// Note:
//     Each tree will have at most 100 nodes.
//     Each value in each tree will be a unique integer in the range [0, 99].



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const flipEquiv = function(root1, root2) {
  if (root1 === null || root2 === null) return root1 === root2
  return root1.val === root2.val && (
    (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)) ||
    (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left))
  )
}

const TreeNode = require('../structs/TreeNode')
;[
  [[1,2,3,4,5,6,null,null,null,7,8], [1,3,2,null,6,4,5,null,null,null,null,8,7]],
].forEach((arr) => {
  console.log(flipEquiv(TreeNode.from(arr[0]), TreeNode.from(arr[1])))
})

// Solution:
// 使用递归算法，
// 1. 比较它们当前节点值是否相等
// 2. 比较它们的左子树是否相等，右子树是否相等
// 3. 比较 r1 的左子树与 r2 的右子树是否相等， r1 的右子树与 r2 的左子树是否相等

// Submission Result: Accepted