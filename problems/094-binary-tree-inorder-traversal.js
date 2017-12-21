// 94. Binary Tree Inorder Traversal
// Medium 47% locked:false

// Given a binary tree, return the inorder traversal of its nodes' values.

// For example:
// Given binary tree [1,null,2,3],

//    1
//     \
//      2
//     /
//    3

// return [1,3,2].

// Note: Recursive solution is trivial, could you do it iteratively?


/**
 * Definition for a binary tree tree.
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

function createTree(array) {
  if (array === null || array === void 0) return null
  const root = new TreeNode(array[0])
  root.left = createTree(array[1])
  root.right = createTree(array[2])
  return root
}


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function(root) {
  const res = []
  const iter = (tree) => {
    if (tree === null) return
    iter(tree.left)
    res.push(tree.val)
    iter(tree.right)
  }
  iter(root)
  return res
}
