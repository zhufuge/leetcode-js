// 530. Minimum Absolute Difference in BST
// Easy   47%


// Given a binary search tree with non-negative values, find the minimum absolute
// difference between values of any two nodes.

// Example:

// Input:

//    1
//     \
//      3
//     /
//    2

// Output:
// 1

// Explanation:
// The minimum absolute difference is 1, which is the difference between 2 and 1
// (or between 2 and 3).

// Note:
// There are at least two nodes in this BST.


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
const getMinimumDifference = function(root) {
  function inorder(root, array) {
    if (root != void 0) {
      inorder(root.left, array)
      array.push(root.val)
      inorder(root.right, array)
    }
    return array
  }
  const array = inorder(root, [])
  let result = Infinity
  for (let i = 1, n = array.length; i < n; i++) {
    result = Math.min(array[i] - array[i - 1], result)
  }
  return result
}

const TreeNode = require('../structs/TreeNode')
;[
  [1,null,3,2], // 1
].forEach((array) => {
  console.log(getMinimumDifference(TreeNode.from(array)))
})

// Solution:
// 因为树是 BST，所以使用中序遍历就能得到一个排好序的节点数组。
// 比较数组中每个元素与上一个元素的差，选择差最小的一个。

// Submission Result: Accepted
