// 998. Maximum Binary Tree II
// Medium   63%


// We are given the root node of a maximum tree: a tree where every node has a
// value greater than any other value in its subtree.
// Just as in the previous problem, the given tree was constructed from an list A
// (root = Construct(A)) recursively with the following Construct(A) routine:
//     If A is empty, return null.
//     Otherwise, let A[i] be the largest element of A.  Create a root node with
// value A[i].
//     The left child of root will be Construct([A[0], A[1], ..., A[i-1]])
//     The right child of root will be Construct([A[i+1], A[i+2], ..., A[A.length
// - 1]])
//     Return root.
// Note that we were not given A directly, only a root node root = Construct(A).
// Suppose B is a copy of A with the value val appended to it.  It is guaranteed
// that B has unique values.
// Return Construct(B).

// Example 1:               5
//                         /
//     4                  4
//   /   \              /   \
//  1     3   ->       1     3
//       /                  /
//      2                  2
// Input: root = [4,1,3,null,null,2], val = 5
// Output: [5,4,null,1,3,null,null,2]
// Explanation: A = [1,4,2,3], B = [1,4,2,3,5]
// Example 2:
//
//     5                  5
//   /   \              /   \
//  2     4            2     4
//   \                  \     \
//    1                  1     3
// Input: root = [5,2,4,null,1], val = 3
// Output: [5,2,4,null,1,null,3]
// Explanation: A = [2,1,5,4], B = [2,1,5,4,3]
// Example 3:
//
//     5                  5
//   /   \              /   \
//  2     3            2     4
//   \                  \   /
//    1                  1  3
// Input: root = [5,2,3,null,1], val = 4
// Output: [5,2,4,null,1,3]
// Explanation: A = [2,1,5,3], B = [2,1,5,3,4]

// Constraints:
//     1 <= B.length <= 100


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
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoMaxTree = function(root, val) {
  if (root === null) return null
  if (val > root.val) return new TreeNode(val, root)

  let node = root
  while (node.right && node.right.val > val) {
    node = node.right
  }
  const newNode = new TreeNode(val, node.right)
  node.right = newNode

  return root
}

;[
  [[4,1,3,null,null,2], 5],
].forEach(([array, val]) => {
  console.log(insertIntoMaxTree(TreeNode.from(array), val))
})

// Solution:
// 当 val 大于 根值时，构建新的根节点val，并将原树设为左子树。
// 否则，
// 使用迭代的方式找到 val 的位置，当 val 节点小于当前节点值时，则遍历其右节点，直到 val 大于
// 当前节点值。（为了插入操作，用父节点的右子节点作为当前节点）

// Submission Result: Accepted