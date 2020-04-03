// 114. Flatten Binary Tree to Linked List
// Medium   35%

// Given a binary tree, flatten it to a linked list in-place.

// For example,
// Given

//     1
//    / \
//   2   5
//  / \   \
// 3   4   6

// The flattened tree should look like:

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

// click to show hints.
//   Hints:

// If you notice carefully in the flattened tree, each node's right child points
// to the next node of a pre-order traversal.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function(root) {
  if (root == null) return
  function iter(tree) {
    let tail = tree
    const left = tree.left
    const right = tree.right
    if (left != null) {
      tree.left = null
      tree.right = left
      tail = iter(left)
    }
    if (right != null) {
      tail.right = right
      tail = iter(right)
    }
    return tail
  }
  iter(root)
}

const TreeNode = require('../structs/TreeNode')
;[
  [1,2,5,3,4,null,6],
].forEach(array => {
  const tree = TreeNode.from(array)
  flatten(tree)
  console.log(traverRight(tree))
})

function traverRight(root) {
  let s = ''
  while (root) {
    s += (s ? '->' : s) + root.val
    root = root.right
  }
  return s
}

// Solution:
// 采用前序递归遍历的方法。
// 在递归过程中，已知当前根节点不为空，先保留左右子节点的指针，并将根节点保留在
// 一个 tail 变量中。

// 1. 若左子节点不为空，则设置左子节点为空，根的右子节点指向左子节点，然后递归平
// 铺左子树，并将 tail 设置为平铺后的最后一个节点。

// 2. 若右子节点不为空，则将其设置为 tail 的右子节点，然后递归平铺右子树，并将
// tail 设置为平铺后的最后一个节点

// 最后返回 tail 变量（即该树的最后一个右子节点）

// Submission Result: Accepted
