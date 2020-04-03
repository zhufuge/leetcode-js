// 671. Second Minimum Node In a Binary Tree
// Easy 41% locked:false


// Given a non-empty special binary tree consisting of nodes with the
// non-negative value, where each node in this tree has exactly two or zero
// sub-node. If the node has two sub-nodes, then this node's value is the smaller
// value among its two sub-nodes.

// Given such a binary tree, you need to output the second minimum value in the
// set made of all the nodes' value in the whole tree.

// If no such second minimum value exists, output -1 instead.

// Example 1:

// Input:
//     2
//    / \
//   2   5
//      / \
//     5   7
// Output: 5
// Explanation: The smallest value is 2, the second smallest value is 5.

// Example 2:

// Input:
//   2
//  / \
// 2   2
// Output: -1
// Explanation: The smallest value is 2, but there isn't any second smallest
// value.

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
const findSecondMinimumValue = function(root) {
  if (root == void 0 || root.left == void 0) return -1

  const left = root.val === root.left.val ? findSecondMinimumValue(root.left) : root.left.val,
        right = root.val === root.right.val ? findSecondMinimumValue(root.right) : root.right.val

  if (left === -1) return right
  if (right === -1) return left
  return Math.min(left, right)
}

const TreeNode = require('../structs/TreeNode')
;[
  [2, 2, 5, null, null, 5, 7],                // 5
  [2, 2, 2],                                  // -1
  [2, 2, 2, 2, 2, 2, 2, null, null, 5, 2],    // 5
  [],                                         // -1
  [1,1,3,1,1,3,4,3,1,1,1,3,8,4,8,3,3,1,6,2,1],// 2
].forEach((array) => {
  console.log(findSecondMinimumValue(TreeNode.from(array)))
})

// Solution:

// 关键信息：
// 1. 非空二叉树
// 2. 每个节点的两个子节点要么都为空，要么都存在
// 3. 如果两子节点存在，则该节点的值为子节点中小的一个的值

// 要找整棵树第二小的数
// 若结果在第二层，就很明显。
// 若结果在第二层以下，则会出现多层的数与根值相同的情况。
// 并非看到的第一个比根值大的数就是结果。

// 既然是树，自然是首先想到递归求解
// 要考虑的情况有2：
// 1. 根节点为空，或左右子节点为空，则返回 -1，说明没有第二小的数
// 2. 左（右）子节点与根同，且存在子节点，则需要检查递归寻找该节点的第二小，
//    再与右（左）一个节点比较，取小的。

// Submission Result: Accepted
