// 889. Construct Binary Tree from Preorder and Postorder Traversal
// Medium   66%


// Return any binary tree that matches the given preorder and postorder
// traversals.
// Values in the traversals pre and post are distinct positive integers.

// Example 1:
// Input: pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
// Output: [1,2,3,4,5,6,7]

// Note:
//     1 <= pre.length == post.length <= 30
//     pre[] and post[] are both permutations of 1, 2, ..., pre.length.
//     It is guaranteed an answer exists. If there exists multiple answers, you
// can return any of them.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const TreeNode = require('../structs/TreeNode')

/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
const constructFromPrePost = function(pre, post) {
  const n = pre.length
  if (n === 0) return null

  let i = 0
  while (i < n - 1 && pre[i + 1] !== post[n - 2]) i++

  const root = new TreeNode(
    pre[0],
    constructFromPrePost(pre.slice(1, i + 1), post.slice(0, i)),
    constructFromPrePost(pre.slice(i + 1), post.slice(i, n - 1))
  )
  return root
}

const better = function(pre, post) {
  let preIndex = 0, postIndex = 0
  function recursive() {
    const root = new TreeNode(pre[preIndex++])
    if (root.val !== post[postIndex]) root.left = recursive()
    if (root.val !== post[postIndex]) root.right = recursive()
    postIndex++
    return root
  }
  return recursive()
}

;[
  [[1,2,4,5,3,6,7,8], [4,5,2,6,8,7,3,1]],
].forEach(([pre, post]) => {
  // console.log(constructFromPrePost(pre, post))
  console.log(better(pre, post))
})

// Solution:
// 1. 找到左子树数组和右子树数组，递归创建。
// 每次都创建新数组，消耗了大量的空间

// 2. 使用两个全局变量
// TODO #889 组织语言，理顺思路，解释清楚。

// Submission Result: Accepted