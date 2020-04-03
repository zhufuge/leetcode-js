// 543. Diameter of Binary Tree
// Easy   44%


// Given a binary tree, you need to compute the length of the diameter of the
// tree. The diameter of a binary tree is the length of the longest path between
// any two nodes in a tree. This path may or may not pass through the root.

// Example:
// Given a binary tree

//           1
//          / \
//         2   3
//        / \
//       4   5

// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note:
// The length of path between two nodes is represented by the number of edges
// between them.


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
const diameterOfBinaryTree = function(root) {
  function iter(root) {
    if (root == void 0) return { diameter: 0, height: 0 }
    const left = iter(root.left), right = iter(root.right)
    return {
      diameter: Math.max(
        left.height + right.height,
        Math.max(left.diameter, right.diameter)
      ),
      height: Math.max(left.height, right.height) + 1
    }
  }
  return iter(root).diameter
}

const TreeNode = require('../structs/TreeNode')
;[
  [1,2,3,4,5],         // 3
].forEach((array) => {
  console.log(diameterOfBinaryTree(TreeNode.from(array)))
})

// Solution:
// 在那个节点中，记录以该节点为根的树的高度以及当前最大直径。
// 不断将最大直径向上传递。
// 因为直径不一定穿过根节点。

// Submission Result: Accepted
