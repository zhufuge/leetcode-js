// 105. Construct Binary Tree from Preorder and Inorder Traversal
// Medium   32%

// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note: You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]

// Return the following binary tree:

//    3
//   / \
//  9  20
//    /  \
//   15   7


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function(preorder, inorder) {
  const n = preorder.length
  if (n <= 0) return null

  const root = new TreeNode(preorder[0])
  const i = inorder.indexOf(preorder[0])
  root.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i))
  root.right = buildTree(preorder.slice(i + 1, n), inorder.slice(i + 1, n))
  return root
}

;[
  [[3,9,20,15,7], [9,3,15,20,7]],
  [[1, 2], [1, 2]],
].forEach(args => {
  console.log(buildTree(...args))
})

// Solution:
// 前序遍历的顺序是，根节点-左子树-右子树
// 中序遍历的顺序是，左子树-根节点-右子树

// 1. 前序数组的第一个节点作为根节点；
// 2. 找出根节点在中序数组中的位置，由此计算出左子树和右子树的长度；
// 3. 分割出前序和中序数组中的左右子树，并分别递归生成左右子树。

// Submission Result: Accepted
