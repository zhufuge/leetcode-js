// 106. Construct Binary Tree from Inorder and Postorder Traversal
// Medium   32%

// Given inorder and postorder traversal of a tree, construct the binary tree.

// Note: You may assume that duplicates do not exist in the tree.

// For example, given

// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]

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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = function(inorder, postorder) {
  const n = inorder.length
  if (n === 0) return null

  const root = new TreeNode(postorder[n - 1])
  const i = inorder.indexOf(postorder[n - 1])
  root.left = buildTree(inorder.slice(0, i), postorder.slice(0, i))
  root.right = buildTree(inorder.slice(i + 1, n), postorder.slice(i, n - 1))
  return root
}

;[
  [[9,3,15,20,7], [9,15,7,20,3]],
].forEach(args => {
  console.log(buildTree(...args))
})

// Solution:
// 中序遍历的顺序是，左子树-根节点-右子树
// 后序遍历的顺序是，左子树-右子树-根节点

// 1. 后序数组的最后一个节点作为根节点；
// 2. 找出根节点在中序数组中的位置，由此计算出左子树和右子树的长度；
// 3. 分割出后序和中序数组中的左右子树，并分别递归生成左右子树。

// Submission Result: Accepted
