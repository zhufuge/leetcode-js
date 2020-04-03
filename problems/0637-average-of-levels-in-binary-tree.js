// 637. Average of Levels in Binary Tree
// Easy   55%

// Given a non-empty binary tree, return the average value of the nodes on each
// level in the form of an array.

// Example 1:

// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level
// 2 is 11. Hence return [3, 14.5, 11].

// Note:

// The range of node's value is in the range of 32-bit signed integer.


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
const averageOfLevels = function(root) {
  if (root == null) return []
  const result = []
  const queue = [root]
  while (queue.length) {
    let sum = 0, l = queue.length
    for (let i = l; i > 0; i--) {
      const node = queue.shift()
      sum += node.val
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    result.push(sum / l)
  }
  return result
}


const old = function(root) {
  const result = []
  function iter(root, i) {
    if (root == null) return
    if (!result[i]) result[i] = []
    result[i].push(root.val)
    iter(root.left, i + 1)
    iter(root.right, i + 1)
  }
  iter(root, 0)
  return result.map(arr => arr.reduce((sum, i) => sum + i) / arr.length)
}

const TreeNode = require('../structs/TreeNode')
;[
  [3,9,20,null,null,15,7], // [3, 14.5, 11]
].forEach((array) => {
  console.log(averageOfLevels(TreeNode.from(array)))
})

// Solution:
// 层遍历？
// 应该是吧，有个参数i，记录层数。
// 代码看起来好像还不够优雅。

// 使用 先进先出列表 完成层遍历

// Submission Result: Accepted
