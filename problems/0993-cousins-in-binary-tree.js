// 993. Cousins in Binary Tree
// Easy   52%


// In a binary tree, the root node is at depth 0, and children of each depth k
// node are at depth k+1.
// Two nodes of a binary tree are cousins if they have the same depth, but have
// different parents.
// We are given the root of a binary tree with unique values, and the values x
// and y of two different nodes in the tree.
// Return true if and only if the nodes corresponding to the values x and y are
// cousins.

// Example 1:
// Input: root = [1,2,3,4], x = 4, y = 3
// Output: false
// Example 2:
// Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
// Output: true
// Example 3:
// Input: root = [1,2,3,null,4], x = 2,  y = 3
// Output: false

// Note:
//     The number of nodes in the tree will be between 2 and 100.
//     Each node has a unique integer value from 1 to 100.



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = function(root, x, y) {
  const queue = [root]
  let count = 0
  while (queue.length > 0 && count === 0) {
    for (let i = 0, l = queue.length; i < l; i++) {
      const node = queue.shift()
      if (node.val === x || node.val === y) count++
      if (node.left && node.right) {
        if (node.left.val === x && node.right.val === y) return false
        if (node.left.val === y && node.right.val === x) return false
      }
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return count === 2
}

const TreeNode = require('../structs/TreeNode')
;[
  [[1,2,3,4], 4, 3], // false
  [[1,2,3,null,4,null,5], 5, 4], // true
  [[1,2,3,null,4], 2, 3], // false
  [[1,2,3,4,null,5,null,6,7,8,9], 6, 8], // true
  [[1,2,5,3,null,null,6,4], 3, 6], //true
].forEach(([array, x, y]) => {
  const root = TreeNode.from(array)
  console.log(isCousins(root, x, y))
})

// Solution:
// 使用 BFS 进行层级遍历，可以判断两个节点是否是在同一个深度的。

// 关键在于如何判断两个节点是否有同一父节点

// 方法 1 （比较笨）是两个两个节点遍历（包括空节点）
// 这需要在遍历一个节点时，若节点不为空则同时添加其两个子节点到 queue 中（包括空子节点),
// 遍历时，找到了 x 或 y，且为左节点，则直接跳过右节点

// 方法2 直接在父节点判断

// Submission Result: Accepted