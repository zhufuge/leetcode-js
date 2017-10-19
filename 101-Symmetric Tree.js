// 101. Symmetric Tree
// Easy 39% locked:false

// Given a binary tree, check whether it is a mirror of itself (ie, symmetric
// around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// But the following [1,2,2,null,3,null,3] is not:

//    1
//   / \
//  2   2
//   \   \
//   3    3

// Note: Bonus points if you could solve it both recursively and iteratively.

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
 * @return {boolean}
 */
const isSymmetric = function(root) {
  if (root === null) return true
  const iter = (left, right) => (left === null && right === null) ||
        ((left !== null && right !== null && left.val === right.val)
         ? iter(left.left, right.right) && iter(left.right, right.left)
         : false)
  return iter(root.left, root.right)
}

console.log(isSymmetric(fullBAToTree([1, 2, 2, 3, 4, 4, 3])))
