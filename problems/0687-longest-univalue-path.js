// 687. Longest Univalue Path
// Easy 32% locked:false



// Given a binary tree, find the length of the longest path where each node in
// the path has the same value. This path may or may not pass through the root.

// Note: The length of path between two nodes is represented by the number of
// edges between them.

// Example 1:
// Input:
//     5
//    / \
//   4   5
//  / \   \
// 1   1   5
// Output:
// 2

// Example 2:
// Input:
//     1
//    / \
//   4   5
//  / \   \
// 4   4   5
// Output:
// 2

// Note:
// The given binary tree has not more than 10000 nodes. The height of the tree is
// not more than 1000.



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const longestUnivaluePath = function(root) {
  let result = 0
  const iter = function(root) {
    if (root == null) return { val: null }

    const val = root.val,
          left = iter(root.left),
          right = iter(root.right)

    if (left.val === right.val && left.val === val) {
      result = Math.max(result, left.path + right.path)
      return { val, path: Math.max(left.path, right.path) + 1 }
    } else if (left.val === val) {
      result = Math.max(result, left.path)
      return { val, path: left.path + 1 }
    } else if (right.val === val) {
      result = Math.max(result, right.path)
      return { val, path: right.path + 1 }
    }

    return { val, path: 1 }
  }

  iter(root)

  return result
}

const TreeNode = require('../structs/TreeNode')
;[
  [5, 4, 5, 1, 1, 5], // 2
  [1, 4, 5, 4, 4, 5], // 2
].forEach((array) => {
  console.log(longestUnivaluePath(TreeNode.from(array)))
})


// Solution:
// 后序遍历
// 在每个节点处，根据左右子节点返回的值及自身的值，来计算所要返回的值
// 有 3 种情况：
// 1. 3 个节点的值相同，则结合两个子节点累积的最长路径，看是否为当前最长路径，是则记录，
//    否则不作为。最后返回两个子节点中最长的路径加 1 ，作为该节点的最长路径。
// 2. 节点的值与左（右）子节点相同，则以左（右）子节点累积的最长路径加 1 ，返回。
// 3. 没有相同，返回 1 。

// Submission Result: Accepted
