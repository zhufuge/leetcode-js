// 938. Range Sum of BST
// Easy   80%


// Given the root node of a binary search tree, return the sum of values of all
// nodes with value between L and R (inclusive).
// The binary search tree is guaranteed to have unique values.

// Example 1:
// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32
// Example 2:
// Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
// Output: 23

// Note:
//     The number of nodes in the tree is at most 10000.
//     The final answer is guaranteed to be less than 2^31.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 * this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const rangeSumBST = function(root, L, R) {
  if (root == null) return 0
  const v = root.val
  if (v == L) return v + rangeSumBST(root.right, L, R)
  if (v == R) return v + rangeSumBST(root.left, L, R)
  if (v < L) return rangeSumBST(root.right, L, R)
  if (v > R) return rangeSumBST(root.left, L, R)
  return v + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R)
}

const TreeNode = require('../structs/TreeNode')
;[
  [[10,5,15,3,7,null,18], 7, 15],        // 32
  [[10,5,15,3,7,13,18,1,null,6], 6, 10], // 23
].forEach(([array, L, R]) => {
  console.log(rangeSumBST(TreeNode.from(array), L, R))
})

// Solution:
// 使用递归
// 若节点为 null 返回 0
// 其余每个节点上的数，有五种情况：
//  ----  L  -------  R  ----
//  (1)  (2)   (3)   (4)  (5)
// 1. val <  L     该节点不用处理，只需要处理其右子树（右子树中也许有大于或等于L的数）
// 2. val == L     返回该节点的值和其右子树返回的值，左子树不用处理（左子树的值都小于L)
// 3. L < val < R  返回该节点的值和其左右子树返回的值
// 4. val == R     返回该节点的值和其左子树返回的值，右子树不用处理（右子树的值都大于R)
// 5. val >  R     该节点不用处理，只需要处理其左子树（左子树中也许有小于或等于R的数）

// Submission Result: Accepted