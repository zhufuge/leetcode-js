// 863. All Nodes Distance K in Binary Tree
// Medium   35%


// We are given a binary tree (with root node root), a target node, and an
// integer value `K`.
// Return a list of the values of all nodes that have a distance K from the
// target node.  The answer can be returned in any order.

// Example 1:
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2
// Output: [7,4,1]
// Explanation:
// The nodes that are a distance 2 from the target node (with value 5)
// have values 7, 4, and 1.

//      3
//     / \
//    5  1
//   /\  /\
//  6 2 0 8
//   /\
//  7 4

// Note that the inputs "root" and "target" are actually TreeNodes.
// The descriptions of the inputs above are just serializations of these objects.

// Note:
//   1. The given tree is non-empty.
//   2. Each node in the tree has unique values 0 <= node.val <= 500.
//   3. The target node is a node in the tree.
//   4. 0 <= K <= 1000.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
const distanceK = function(root, target, K) {
  const result = []
  function distanceTarget(node, k) {
    if (node) {
      if (k === 0) {
        result.push(node.val)
      } else if (k > 0) {
        distanceTarget(node.left, k - 1)
        distanceTarget(node.right, k - 1)
      }
    }
  }
  distanceTarget(target, K)

  function distanceRoot(node) {
    if (!node) return -1
    if (node === target) return K - 1
    const left = distanceRoot(node.left)
    if (left === 0) {
      result.push(node.val)
      return left - 1
    } else if (left > 0) {
      distanceTarget(node.right, left - 1)
      return left - 1
    } else {
      const right = distanceRoot(node.right)
      if (right === 0) {
        result.push(node.val)
        return right - 1
      } else if (right > 0) {
        distanceTarget(node.left, right - 1)
        return right - 1
      }
    }
  }
  distanceRoot(root)

  return result
}

const TreeNode = require('../structs/TreeNode')
;[
  [[3,5,1,6,2,0,8,null,null,7,4], 5, 2], // [7, 4, 1]
].forEach(([array, a, b]) => {
  const root = TreeNode.from(array)
  const target = root.getNode(a)
  console.log(distanceK(root, target, b))
})

// Solution:
// 1. 以 target 为根节点，递归地找到距离 target 为 K 的节点，
// 2. 以 root 为根节点，递归地寻找 target，找到后返回 K - 1，代表需要寻找距离其
//    父节点距离为 K - 1 的节点，一直先上知道回到根节点。

// Submission Result: Accepted