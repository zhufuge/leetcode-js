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

function fullBAToTree(array) {
  const iter = (i) => {
    if (array[i - 1] === null || array[i - 1] === void 0) return null
    const root = new TreeNode(array[i - 1])
    root.left = iter(i * 2)
    root.right = iter(i * 2 + 1)
    return root
  }

  return iter(1)
}


/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
  const res = []
  const iter = (root, level) => {
    if (root === null) return
    if (res[level]) res[level].push(root.val)
    else res[level] = [root.val]
    iter(root.left, level + 1)
    iter(root.right, level + 1)
  }

  iter(root, 0)
  return res
}

console.log(levelOrder(fullBAToTree([3,9,20,null,null,15,7])))
