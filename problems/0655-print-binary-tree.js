// 655. Print Binary Tree
// Medium   50%


// Print a binary tree in an m*n 2D string array following these rules:

// The row number m should be equal to the height of the given binary tree.
// The column number n should always be an odd number.
// The root node's value (in string format) should be put in the exactly middle
// of the first row it can be put. The column and the row where the root node
// belongs will separate the rest space into two parts (left-bottom part and
// right-bottom part). You should print the left subtree in the left-bottom part
// and print the right subtree in the right-bottom part. The left-bottom part and
// the right-bottom part should have the same size. Even if one subtree is none
// while the other is not, you don't need to print anything for the none subtree
// but still need to leave the space as large as that for the other subtree.
// However, if two subtrees are none, then you don't need to leave space for both
// of them.
// Each unused space should contain an empty string "".
// Print the subtrees following the same rules.

// Example 1:

// Input:
//      1
//     /
//    2
// Output:
// [["", "1", ""],
//  ["2", "", ""]]

// Example 2:

// Input:
//      1
//     / \
//    2   3
//     \
//      4
// Output:
// [["", "", "", "1", "", "", ""],
//  ["", "2", "", "", "", "3", ""],
//  ["", "", "4", "", "", "", ""]]

// Example 3:

// Input:
//       1
//      / \
//     2   5
//    /
//   3
//  /
// 4
// Output:

// [["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""]
//  ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]
//  ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]
//  ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]

// Note:
// The height of binary tree is in the range of [1, 10].

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
const printTree = function(root) {
  function height(root) {
    if (!root) return 0
    return Math.max(height(root.left), height(root.right)) + 1
  }

  const h = height(root), w = (1 << h) - 1
  const result = Array(h)
  for (let i = h - 1; i >= 0; i--) result[i] = Array(w).fill('')

  function iter(root, rows, left, right) {
    if (!root) return
    const mid = (left + right) >> 1
    result[rows][mid] += root.val
    iter(root.left, rows + 1, left, mid - 1)
    iter(root.right, rows + 1, mid + 1, right)
  }

  iter(root, 0, 0, w)
  return result
}

const TreeNode = require('../structs/TreeNode')
;[
  [1, 2],
  [1, 2, 3, null, 4],
  [1, 2, 5, 3, null, null, null, 4],
].forEach((array) => {
  console.log(printTree(TreeNode.from(array)))
})

// Solution:
// 先计算出树的高度。递归返回子树中最大的高度加上1（该节点）。

// 根据树的高度计算出，结果中的每行的宽度。
// 使用归纳法证明 A_i = A_(i-1) + 2^(i - 1)，得到 A_i = 2^i - 1
// 即若有 i 行，则每行宽度为 2^i - 1。

// 递归填入每个节点应该在的位置。
// 节点该在位置为父节点所在位置的左边的中点。

// Submission Result: Accepted
