// 617. Merge Two Binary Trees
// Easy   67%


// Given two binary trees and imagine that when you put one of them to cover the
// other, some nodes of the two trees are overlapped while the others are not.

// You need to merge them into a new binary tree. The merge rule is that if two
// nodes overlap, then sum node values up as the new value of the merged node.
// Otherwise, the NOT null node will be used as the node of new tree.

// Example 1:

// Input:
// 	Tree 1                     Tree 2
//           1                         2
//          / \                       / \
//         3   2                     1   3
//        /                           \   \
//       5                             4   7
// Output:
// Merged tree:
// 	     3
// 	    / \
// 	   4   5
// 	  / \   \
// 	 5   4   7

// Note:
// The merging process must start from the root nodes of both trees.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
const mergeTrees = function(t1, t2) {
  if (t1 == void 0 && t2 == void 0) return null
  const root = new TreeNode((t1 ? t1.val : 0) + (t2 ? t2.val : 0))
  root.left = mergeTrees(t1 && t1.left, t2 && t2.left)
  root.right = mergeTrees(t1 && t1.right, t2 && t2.right)
  return root
}

const TreeNode = require('../structs/TreeNode')
;[
  [[1,3,2,5],[2,1,3,null,4,null,7]], // [3, 4, 5, 5, 4, null, 7]
].forEach(([a, b]) => {
  console.log(mergeTrees(TreeNode.from(a), TreeNode.from(b)))
})

// Solution:
// 对于每个节点，它的值：
// 1. t1/t2 的对应节点存在，则等于 t1 和 t2 对应节点的和
// 2. 有一个存在，则等于存在节点的值
// 3. 都为null, 则返回 null

// t1或t2的子节点不存在时，也要传递 null 值。

// Submission Result: Accepted
