// 235. Lowest Common Ancestor of a Binary Search Tree
// Easy   39%


// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two
// given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor
// is defined between two nodes v and w as the lowest node in T that has both v
// and w as descendants (where we allow a node to be a descendant of itself).”

// Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]
//         _______6______
//        /              \
//     ___2__          ___8__
//    /      \        /      \
//    0      _4       7       9
//          /  \
//          3   5

// Example 1:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

// Example 2:

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant
// of itself according to the LCA definition.

// Note:
//     All of the nodes' values will be unique.
//     p and q are different and both values will exist in the BST.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
  if (!root || !p || !q) return root
  if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q)
  if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q)
  return root
}

const TreeNode = require('../structs/TreeNode')
;[
  [[6,2,8,0,4,7,9,null,null,3,5], 2, 8], // 6
  [[6,2,8,0,4,7,9,null,null,3,5], 2, 4], // 2
].forEach(([array, a, b]) => {
  const root = TreeNode.from(array)
  const p = root.getNode(a)
  const q = root.getNode(b)
  console.log(lowestCommonAncestor(root, p, q))
})

// Solution:
// 若两个给定节点的值都大（小）于某节点，说明最低公共先辈在该节点的右（左）子节点下。
// 否则就是该节点。

// Submission Result: Accepted
