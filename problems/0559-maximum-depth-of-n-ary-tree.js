// 559. Maximum Depth of N-ary Tree
// Easy   68%


// Given a n-ary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root
// node down to the farthest leaf node.
// Nary-Tree input serialization is represented in their level order traversal,
// each group of children is separated by the null value (See examples).

// Example 1:
//         1
//     /   |    \
//   3     2     4
//  / \
// 5   6
// Input: root = [1,null,3,2,4,null,5,6]
// Output: 3

// Example 2:
//                    1
//      /        /            \      \
//     2        3             4       5
//            /   \           |      / \
//           6     7          8     9   10
//                 |          |     |
//                 11         12    13
//                 |
//                 14
//  [1]
//  [2 3 4 5]
//  [] [6 7]   [8]  [9 10]
//     [] [11] [12] [13]
//       [] [14]
// Input: root =
// [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: 5

// Constraints:
//     The depth of the n-ary tree is less than or equal to 1000.
//     The total number of nodes is between [0, 10^4].


/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
function Node(val, children) {
  this.val = val
  this.children = children
}

/**
 * @param {Node} root
 * @return {number}
 */
const maxDepth = function(root) {
  if (root == null) return 0
  if (root.children.length === 0) return 1
  let max = 0
  for (let child of root.children) {
    max = Math.max(max, maxDepth(child))
  }
  return max + 1
}

// TODO: #559 实现多叉树的构造函数
;[
  [1,null,3,2,4,null,5,6],
].forEach(() => {

})

// Solution:
// 递归方法。
// 每个节点中，遍历所有子节点，取得子节点中的最大高度，加 1 返回。

// Submission Result: Accepted