// 230. Kth Smallest Element in a BST
// Medium   44%


// Given a binary search tree, write a function kthSmallest to find the kth
// smallest element in it.

// Note:
// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

// Follow up:
// What if the BST is modified (insert/delete operations) often and you need to
// find the kth smallest frequently? How would you optimize the kthSmallest
// routine?

// Credits:Special thanks to @ts for adding this problem and creating all test
// cases.


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
 * @return {number}
 */
const kthSmallest = function(root, k) {
  function inorder(root) {
    if (!root) return null
    const left = inorder(root.left)
    if (left !== null) return left
    if (--k <= 0) return root.val
    return inorder(root.right)
  }
  return inorder(root)
}

const TreeNode = require('../structs/TreeNode')
;[
  [[3,1,7,null,2,5,8,null,null,4,6], 4], // 4
].forEach(([array, k]) => {
  console.log(kthSmallest(TreeNode.from(array), k))
})

// Solution:
// 中序遍历一棵二叉查找树就像顺序遍历一个排好序的数组。

// Submission Result: Accepted
