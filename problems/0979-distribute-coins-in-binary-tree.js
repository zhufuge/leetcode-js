// 979. Distribute Coins in Binary Tree
// Medium   68%


// Given the root of a binary tree with N nodes, each node in the tree has
// node.val coins, and there are N coins total.
// In one move, we may choose two adjacent nodes and move one coin from one node
// to another.  (The move may be from parent to child, or from child to parent.)
// Return the number of moves required to make every node have exactly one coin.

// Example 1:
// Input: [3,0,0]
// Output: 2
// Explanation: From the root of the tree, we move one coin to its left child,
// and one coin to its right child.
// Example 2:
// Input: [0,3,0]
// Output: 3
// Explanation: From the left child of the root, we move two coins to the root
// [taking two moves].  Then, we move one coin from the root of the tree to the
// right child.
// Example 3:
// Input: [1,0,2]
// Output: 2
// Example 4:
// Input: [1,0,0,null,3]
// Output: 4

// Note:
//     1<= N <= 100
//     0 <= node.val <= N


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const distributeCoins = function(root) {
  let res = 0
  function postorder(root) {
    if (root === null) return 0
    const left = postorder(root.left)
    const right = postorder(root.right)
    res += Math.abs(left) + Math.abs(right)
    return left + right + root.val - 1
  }
  postorder(root)
  return res
}

const TreeNode = require('../structs/TreeNode')
;[
  [3,0,0],  // 2
  [0,3,0],  // 3
  [1,0,2],  // 2
  [1,0,0,null,3], // 4
  [1,0,0,4,1,0,1], // 8
  [4,0,null,null,0,null,0], // 6
].forEach((array) => {
  console.log(distributeCoins(TreeNode.from(array)))
})

// Solution:
// 使用后序遍历的方法，将左右子树缺少的或多余的硬币的值相加，得到该节点需要移动硬币的次数。
//            [1]
//          /     \
//         2      -2
//        /         \
//      [0]         [0]
//      / \         / \
//     3   0      -1   0
//    /     \     /     \
//  [4]     [1] [0]     [1]
//
// 3 + 0 + 2 + (-(-2)) + (-(-1)) + 0 = 8
//

// Submission Result: Accepted