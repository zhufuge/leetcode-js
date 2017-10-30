// 653. Two Sum IV - Input is a BST
// Easy 50% locked:false


// Given a Binary Search Tree and a target number, return true if there exist two
// elements in the BST such that their sum is equal to the given target.

// Example 1:

// Input:
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

// Target = 9

// Output: True

// Example 2:

// Input:
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

// Target = 28

// Output: False


/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

function toBTree(array, i=0) {
  if (array[i] == void 0) return null
  const root = new TreeNode(array[i])
  root.left = toBTree(array, i * 2 + 1)
  root.right = toBTree(array, i * 2 + 2)
  return root
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
const findTarget = function(root, k) {
  function iter(root, map) {
    if (root == void 0) return false
    if (map[root.val]) return true
    map[k - root.val] = true
    return iter(root.left, map) || iter(root.right, map)
  }
  return iter(root, {})
}

;[
  [toBTree([5, 3, 6, 2, 4, null, 7]), 9],  // true
  [toBTree([5, 3, 6, 2, 4, null, 7]), 28], // false
].forEach(args => {
  console.log(findTarget(...args))
})

// Solution:
// 像 two-sum 一样，用键值对来记录。
// 只是这次是遍历二叉树。

// Submission Result: Accepted
