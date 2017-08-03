// Given a binary tree, return the bottom-up level order traversal of its nodes'
// values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7

// return its bottom-up level order traversal as:

// [
//   [15,7],
//   [9,20],
//   [3]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = function(root) {
  const res = []
  const iter = (root, level) => {
    if (root === null) return
    const n = res.length
    if (level < n) {
      res[n - level - 1].push(root.val)
    } else res.unshift([root.val])
    iter(root.left, level + 1)
    iter(root.right, level + 1)
  }
  iter(root, 0)
  return res
}
