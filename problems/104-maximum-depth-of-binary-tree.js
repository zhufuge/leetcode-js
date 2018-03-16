// 104. Maximum Depth of Binary Tree
// Easy   53%

// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root
// node down to the farthest leaf node.

// For example:
// Given binary tree [3,9,20,null,null,15,7],

//    3
//   / \
//  9  20
//    /  \
//   15   7

// return its depth = 3.


/**
 * Definition for a binary tree node.
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
 * @return {number}
 */
const maxDepth = function(root) {
  return root == null ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

;[
  [3,9,20,null,null,15,7],
].forEach(array => {
  console.log(maxDepth(toBTree(array)))
})


// Solution:
// 递归返回左子树和右子树中最大深度，加上该节点（即1）。
// 若节点为null，则返回 0。

// Submission Result: Accepted
