// 105. Construct Binary Tree from Preorder and Inorder Traversal
// Medium 32% locked:false

// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note: You may assume that duplicates do not exist in the tree.

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function(preorder, inorder) {
  const n = preorder.length, m = inorder.length
  if (n === 0 || m === 0) return null
  if (n !== m) throw Error(`Couldn't build tree!`)
  const root = new TreeNode(preorder[0])
  const i = inorder.indexOf(preorder[0])
  root.left = buildTree(preorder.slice(1, i + 1),
                        inorder.slice(0, i))
  root.right = buildTree(preorder.slice(i + 1, n),
                         inorder.slice(i + 1, n))
  return root
}

console.log(buildTree([1, 2], [1, 2]))
