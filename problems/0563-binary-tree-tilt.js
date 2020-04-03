// 563. Binary Tree Tilt
// Easy   47%


// Given a binary tree, return the tilt of the whole tree.

// The tilt of a tree node is defined as the absolute difference between the sum
// of all left subtree node values and the sum of all right subtree node values.
// Null node has tilt 0.

// The tilt of the whole tree is defined as the sum of all nodes' tilt.

// Example:

// Input:
//          1
//        /   \
//       2     3
// Output: 1
// Explanation:
// Tilt of node 2 : 0
// Tilt of node 3 : 0
// Tilt of node 1 : |2-3| = 1
// Tilt of binary tree : 0 + 0 + 1 = 1

// Note:

// The sum of node values in any subtree won't exceed the range of 32-bit
// integer.
// All the tilt values won't exceed the range of 32-bit integer.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val
 *   this.left = this.right = null
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const findTilt = function(root) {
  function iter(root) {
    if (root == void 0) return [0, 0]
    const left = iter(root.left),
          right = iter(root.right)
    return [
      left[0] + right[0] + Math.abs(left[1] - right[1]),
      left[1] + right[1] + root.val
    ]
  }
  return iter(root)[0]
}

const TreeNode = require('../structs/TreeNode')
;[
  [1,2,3],             // 1
  [1,2,3,4,null,5],    // 11
  [1,2,null,3,4],      // 10
].forEach((array) => {
  console.log(findTilt(TreeNode.from(array)))
})

// Solution:
// 在每个节点中，累积其左右子树的总和的差的绝对值。
// 这时，不仅要记录数差的绝对值的总和，还要记录子树的所有值的总和。
// 注意：两个完全不同的总和，必须特别区分。
// 一个是累积子树所有节点的左右子树的差的绝对值的总和，即答案
// 另一个是累积子树的所有值的总和。

// Submission Result: Accepted
