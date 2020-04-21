// 897. Increasing Order Search Tree
// Easy   68%


// Given a binary search tree, rearrange the tree in in-order so that the
// leftmost node in the tree is now the root of the tree, and every node has no
// left child and only 1 right child.
// Example 1:
// Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]
//        5
//       / \
//     3    6
//    / \    \
//   2   4    8
//  /        / \
// 1        7   9
// Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
//  1
//   \
//    2
//     \
//      3
//       \
//        4
//         \
//          5
//           \
//            6
//             \
//              7
//               \
//                8
//                 \
//                  9

// Constraints:
//     The number of nodes in the given tree will be between 1 and 100.
//     Each node will have a unique integer value from 0 to 1000.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 * this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const increasingBST = function(root) {
  if (!root) return null
  let old = root
  if (old.left) {
    let rightmost = root = increasingBST(old.left)
    while (rightmost.right) rightmost = rightmost.right
    rightmost.right = old
  }
  old.left = null
  old.right = increasingBST(old.right)
  return root
}

const TreeNode = require('../structs/TreeNode')
;[
  [5,3,6,2,4,null,8,1,null,null,null,7,9],
].forEach((array) => {
  console.log(increasingBST(TreeNode.from(array)))
})

// Solution:
// 深度遍历，并递归地将其转变后的左子树返回
// 将当前节点插入到左子树的最右子节点的右节点上
// 在递归其右子树。

// Submission Result: Accepted