// 108. Convert Sorted Array to Binary Search Tree
// Easy   42%

// Given an array where elements are sorted in ascending order, convert it to a
// height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree
// in which the depth of the two subtrees of every node never differ by more
// than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following
// height balanced BST:

//      0
//     / \
//   -3   9
//   /   /
// -10  5


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
  const n = nums.length
  if (n === 0) return null
  const mid = (n - 1) >> 1
  const root = new TreeNode(nums[mid])
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid + 1, n))
  return root
}

;[
  [-10,-3,0,5,9],
].forEach(nums => {
  console.log(sortedArrayToBST(nums))
})

// Solution:
// 构造一个平衡的二叉查找树。
// 以中位数为根节点，分别递归地以左边和右边的数构造左右子树。

// Submission Result: Accepted
