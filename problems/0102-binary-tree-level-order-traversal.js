// 102. Binary Tree Level Order Traversal
// Medium 40% locked:false

// Given a binary tree, return the level order traversal of its nodes' values.
// (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7

// return its level order traversal as:

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

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
 * @return {number[][]}
 */
const levelOrder = function(root) {
  const res = []
  function iter(root, level) {
    if (root) {
      if (!res[level]) res[level] = []
      res[level].push(root.val)
      iter(root.left, level + 1)
      iter(root.right, level + 1)
    }
  }

  iter(root, 0)
  return res
}

;[
  [3,9,20,null,null,15,7],
].forEach(array => {
  console.log(levelOrder(toBTree(array)))
})

// Solution:
// 递归遍历，遍历过程中，带上层级参数 level ，根据 level 来插入对应数组。

// Submission Result: Accepted
