// 106. Construct Binary Tree from Inorder and Postorder Traversal
// Medium 32% locked:false

// Given inorder and postorder traversal of a tree, construct the binary tree.

// Note: You may assume that duplicates do not exist in the tree.

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = function(inorder, postorder) {
  const n = inorder.length, m = postorder.length
  if (n === 0 || m === 0) return null
  if (n !== m) throw Error(`Couldn't build tree!`)
  const root = new TreeNode(postorder[m - 1]),
        i = inorder.indexOf(postorder[m - 1])

  root.left = buildTree(inorder.slice(0, i),
                        postorder.slice(0, i))
  root.right = buildTree(inorder.slice(i + 1, n),
                         postorder.slice(i, n - 1))
  return root
}
