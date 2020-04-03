// 515. Find Largest Value in Each Tree Row
// Medium   55%

// You need to find the largest value in each row of a binary tree.

// Example:
// Input:

//       1
//      / \
//     3   2
//    / \   \
//   5   3   9

// Output: [1, 3, 9]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const largestValues = function(root) {
  const result = []
  function traverse(root, layer) {
    if (root == null) return
    if (result[layer] == null ||
        root.val > result[layer]) result[layer] = root.val
    traverse(root.left, layer + 1)
    traverse(root.right, layer + 1)
  }
  traverse(root, 0)
  return result
}

const TreeNode = require('../structs/TreeNode')
;[
  [1,3,2,5,3,null,9],           // [1,3,9]
].forEach(array => {
  console.log(largestValues(TreeNode.from(array)))
})

// Solution:
// 使用一个层级参数，进行遍历。
// 每进入一个节点，就与该层中最大的数比较，若大于则设置为该层最大。

// Submission Result: Accepted
