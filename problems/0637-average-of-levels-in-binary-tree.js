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
 * @return {number[]}
 */
const averageOfLevels = function(root) {
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

;[
  toBTree([3,9,20,null,null,15,7]), // [3, 14.5, 11]
].forEach(args => {
  console.log(averageOfLevels(args))
})

// Solution:
// 层遍历？
// 应该是吧，有个参数i，记录层数。
// 代码看起来好像还不够优雅。

// Submission Result: Accepted
