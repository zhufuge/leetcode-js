// 114. Flatten Binary Tree to Linked List
// Medium 35% locked:false

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
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function(root) {
  if (root === null) return
  const iter = (tree) => {
    let tail = tree, left = tree.left, right = tree.right
    if (left !== null) {
      tree.left = null
      tree.right = left
      tail = iter(left)
    }
    if (right !== null) {
      tail.right = right
      tail = iter(right)
    }
    return tail
  }
  iter(root)
}
