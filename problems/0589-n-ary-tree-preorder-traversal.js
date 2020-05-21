// 589. N-ary Tree Preorder Traversal
// Easy   71%


// Given an n-ary tree, return the preorder traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal,
// each group of children is separated by the null value (See examples).

// Follow up:
// Recursive solution is trivial, could you do it iteratively?

// Example 1:
// Input: root = [1,null,3,2,4,null,5,6]
// Output: [1,3,5,6,2,4]
// Example 2:
// Input: root =
// [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]

// Constraints:
//     The height of the n-ary tree is less than or equal to 1000
//     The total number of nodes is between [0, 10^4]


/**
 * // Definition for a Node.
 * function Node(val, children) {
 *this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
const preorder = function(root) {
  const res = []
  function preorder(node) {
    if (node) {
      res.push(node.val)
      for (let c of node.children) {
        preorder(c)
      }
    }
  }
  preorder(root)
  return res
}

;[
  [1,null,3,2,4,null,5,6],
].forEach(() => {

})

// Solution:
// 1. 前序遍历，递归即可。
// 2. 使用栈
// TODO: #589 多叉树的构造函数

// Submission Result: Accepted