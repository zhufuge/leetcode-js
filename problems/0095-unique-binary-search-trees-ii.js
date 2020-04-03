// 95. Unique Binary Search Trees II
// Medium 31% locked:false

// Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1...n.

// For example,
// Given n = 3, your program should return all 5 unique BST's shown below.

// 1         3     3      2      1
//  \       /     /      / \      \
//   3     2     1      1   3      2
//  /     /       \                 \
// 2     1         2                 3


/**
 * Definition for a binary tree tree.
 * function TreeNode(val) {
 *   this.val = val
 *   this.left = this.right = null
 * }
 */

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = function(n) {
  if (n <= 0) return []
  const iter = (p, q) => {
    if (p > q) return [null]
    if (p === q) return [new TreeNode(p)]

    const trees = []
    for (let k = 0; k <= q - p; k++) {
      const left = iter(p, p + k - 1),
            right = iter(p + k + 1, q)
      for (let l of left) {
        for (let r of right) {
          const root = new TreeNode(p + k)
          root.left = l
          root.right = r
          trees.push(root)
        }
      }
    }

    return trees
  }
  return iter(1, n)
}
console.log(generateTrees(4))
