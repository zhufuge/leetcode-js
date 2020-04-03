// 404. Sum of Left Leaves
// Easy   47%


// Find the sum of all left leaves in a given binary tree.

// Example:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// There are two left leaves in the binary tree, with values 9 and 15
// respectively. Return 24.


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
const sumOfLeftLeaves = function(root) {
  function iter(root, isLeft) {
    if (root == null) return 0
    if (isLeft && !root.left && !root.right) return root.val
    return iter(root.left, true) + iter(root.right, false)
  }
  return iter(root, false)
}

const TreeNode = require('../structs/TreeNode')
;[
  [3,9,20,null,null,15,7], // 24
].forEach((array) => {
  console.log(sumOfLeftLeaves(TreeNode.from(array)))
})

// Solution:
// 在遍历过程中加上一个是否为左子节点的标记。
// 如果是左子节点，且是叶子节点，则返回该节点的值。
// 否则返回子节点遍历到的左叶子节点的值的总和。

// Submission Result: Accepted
