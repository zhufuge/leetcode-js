// 538. Convert BST to Greater Tree
// Easy   49%


// Given a Binary Search Tree (BST), convert it to a Greater Tree such that every
// key of the original BST is changed to the original key plus sum of all keys
// greater than the original key in BST.

// Example:

// Input: The root of a Binary Search Tree like this:
//               5
//             /   \
//            2     13

// Output: The root of a Greater Tree like this:
//              18
//             /   \
//           20     13


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const convertBST = function(root) {
  function iter(root, sum) {
    if (root == void 0) return sum
    root.val += iter(root.right, sum)
    return iter(root.left, root.val)
  }
  iter(root, 0)
  return root
}

const TreeNode = require('../structs/TreeNode')
;[
  [5,2,13],            // [18,20,13]
].forEach((array) => {
  console.log(convertBST(TreeNode.from(array)))
})

// Solution:
// 对树使用右边优先的中序遍历，
// 并且每次都让后一个被遍历的节点的值加上前一个的。
// 使用参数 sum 作为前一个值进行传递。

// Submission Result: Accepted
