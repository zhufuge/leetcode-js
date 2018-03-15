// 94. Binary Tree Inorder Traversal
// Medium   47%

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

function toBTree(array, i=0) {
  if (array[i] == null) return null
  const root = new TreeNode(array[i])
  root.left = toBTree(array, i * 2 + 1)
  root.right = toBTree(array, i * 2 + 2)
  return root
}


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function(root) {
  const res = []
  function iter(node) {
    if (node != null) {
      iter(node.left)
      res.push(node.val)
      iter(node.right)
    }
  }
  iter(root)
  return res
}

;[
  [1, null, 2, null, null, 3],
].forEach(array => {
  console.log(inorderTraversal(toBTree(array)))
})

// Solution:
// 中序遍历。
// 在递归函数的过程中，先递归左子树，再记录节点，最后再递归右子树。

// Submission Result: Accepted
