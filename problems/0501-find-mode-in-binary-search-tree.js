// 501. Find Mode in Binary Search Tree
// Easy   37%


// Given a binary search tree (BST) with duplicates, find all the mode(s) (the
// most frequently occurred element) in the given BST.

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than or equal to
// the node's key.
// The right subtree of a node contains only nodes with keys greater than or
// equal to the node's key.
// Both the left and right subtrees must also be binary search trees.

// For example:
// Given BST [1,null,2,2],

//    1
//     \
//      2
//     /
//    2

// return [2].

// Note:
// If a tree has more than one mode, you can return them in any order.

// Follow up:
// Could you do that without using any extra space? (Assume that the implicit
// stack space incurred due to recursion does not count).


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const findMode = function(root) {
  let result = [], len = 0, count = 0, prev = null
  function iter(root) {
    if (root != void 0) {
      iter(root.left)
      const val = root.val
      count = val === prev ? count + 1 : 1
      if (count === len) result.push(val)
      if (count > len) {
        len = count
        result = [val]
      }
      prev = val
      iter(root.right)
    }
  }
  iter(root)
  return result
}

const TreeNode = require('../structs/TreeNode')
;[
  [1,null,2,2],                     // [2]
  [4,2,5,1,3,5,6,null,null,null,4], // [4, 5]
  [0,null,0],                       // [0]
].forEach((array) => {
  console.log(findMode(TreeNode.from(array)))
})

// Solution:
// 因为树是 BST，所有使用中序遍历遍历树，就像遍历一个排好序的数组，
// 只要再遍历的过程中记录 当前数连续的长度，最长长度，和前一个数，
// 就能再树中找到最频繁的数。
// 但是则使用了很多额外的空间。

// Submission Result: Accepted
