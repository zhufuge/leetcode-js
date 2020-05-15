// 783. Minimum Distance Between BST Nodes
// Easy   52%


// Given a Binary Search Tree (BST) with the root node root, return the minimum
// difference between the values of any two different nodes in the tree.
// Example :
// Input: root = [4,2,6,1,3,null,null]
// Output: 1
// Explanation:
// Note that root is a TreeNode object, not an array.
// The given tree [4,2,6,1,3,null,null] is represented by the following diagram:
//           4
//         /   \
//       2      6
//      / \
//     1   3
// while the minimum difference in this tree is 1, it occurs between node 1 and
// node 2, also between node 3 and node 2.
// Note:
//     The size of the BST will be between 2 and 100.
//     The BST is always valid, each node's value is an integer, and each node's
// value is different.
//     This question is the same as 530:
// https://leetcode.com/problems/minimum-absolute-difference-in-bst/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDiffInBST = function(root) {
  function midTraverse(r, array) {
    if (r) {
      midTraverse(r.left, array)
      array.push(r.val)
      midTraverse(r.right, array)
    }
  }
  const array = []
  midTraverse(root, array)
  let res = Infinity
  for (let i = array.length - 1; i > 0; i--)
    res = Math.min(res, array[i] - array[i - 1])
  return res
}

const inorderTraversal = function(root) {
  let res = Number.MAX_VALUE, pre = null
  function trave(root) {
    if (root.left !== null) trave(root.left)
    if (pre != null) res = Math.min(res, root.val - pre)
    pre = root.val
    if (root.right !== null) trave(root.right)
  }
  trave(root)
  return res
}

const TreeNode = require('../structs/TreeNode')
;[
  [4,2,6,1,3,null,null],  // 1
  [40,20,60,10,31,null,null], // 9
].forEach((array) => {
  console.log(minDiffInBST(TreeNode.from(array)))
  console.log(inorderTraversal(TreeNode.from(array)))
})

// Solution:
// 1. 思路：递归每个一个节点，计算并返回其左右子树返回的值与当前值与其左右子节点的值的差的最小值。
// 【错误】因为很深的节点可能和根节点间存在最小值。

// 2. 使用中序遍历得到递增数组
// 遍历递增数组的到最小间距。

// 3. 无需数组的解法
// 中序遍历时，除了记录结果外，还要记录前一个遍历到的节点的值，用于计算与当前值的差。

// Submission Result: Accepted