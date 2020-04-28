// 872. Leaf-Similar Trees
// Easy   65%


// Consider all the leaves of a binary tree.  From left to right order, the
// values of those leaves form a leaf value sequence.
// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9,
// 8).
// Two binary trees are considered leaf-similar if their leaf value sequence is
// the same.
// Return true if and only if the two given trees with head nodes root1 and root2
// are leaf-similar.

// Constraints:
//     Both of the given trees will have between 1 and 200 nodes.
//     Both of the given trees will have values between 0 and 200


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 * this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function(root1, root2) {
  function leafSeq(node, array = []) {
    if (node.left) leafSeq(node.left, array)
    if (node.right) leafSeq(node.right, array)
    if (node.left == null && node.right == null) array.push(node.val)
    return array
  }
  const array1 = leafSeq(root1)
  const array2 = leafSeq(root2)

  for (let i = 0; i < array1.length; ++i) {
    if (array1[i] !== array2[i]) return false
  }
  return array1.length === array2.length
}

const TreeNode = require('../structs/TreeNode')
;[
  // [
  //   [3,5,1,6,2,9,8,null,null,7,4],
  //   [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8],
  // ], // true
  [
    [1,2],
    [2,2],
  ], // true
].forEach(([A, B]) => {
  console.log(leafSimilar(TreeNode.from(A), TreeNode.from(B)))
})

// Solution:
// 用深度遍历从左到右访问一颗树的每个叶子节点，并保存在一个数组当中
// 遍历两棵树，得到两个数组，比较数组即可。

// Submission Result: Accepted