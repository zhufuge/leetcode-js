// 1022. Sum of Root To Leaf Binary Numbers
// Easy   64%


// Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path
// represents a binary number starting with the most significant bit.  For
// example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101
// in binary, which is 13.
// For all leaves in the tree, consider the numbers represented by the path from
// the root to that leaf.
// Return the sum of these numbers.

// Example 1:
// Input: [1,0,1,0,1,0,1]
// Output: 22
// Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

// Note:
//     The number of nodes in the tree is between 1 and 1000.
//     node.val is 0 or 1.
//     The answer will not exceed 2^31 - 1.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumRootToLeaf = function(root) {
  function dfs(root, value) {
    if (root == null) return 0

    value = value * 2 + root.val
    return root.left === root.right
      ? value
      : dfs(root.left, value) + dfs(root.right, value)
  }
  return dfs(root, 0)
}

const TreeNode = require('../structs/TreeNode')
;[
  [1,0,1,0,1,0,1], // 22
].forEach((array) => {
  const root = TreeNode.from(array)
  console.log(sumRootToLeaf(root))
})

// Solution:
// 使用深度遍历,
// 若节点为 null, 返回 0
// 若节点为叶子节点，返回 value * 2 + node.val
// 否则返回其子节点返回值的和

// Submission Result: Accepted