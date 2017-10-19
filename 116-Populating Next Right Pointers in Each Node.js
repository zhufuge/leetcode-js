// 116. Populating Next Right Pointers in Each Node
// Medium 36% locked:false

// Given a binary tree

// struct TreeLinkNode {
//   TreeLinkNode *left;
//   TreeLinkNode *right;
//   TreeLinkNode *next;
// }

// Populate each next pointer to point to its next right node. If there is no
// next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

// Note:
// - You may only use constant extra space.
// - You may assume that it is a perfect binary tree (ie, all leaves are at the
//   same level, and every parent has two children).

// For example,
// Given the following perfect binary tree,

//      1
//    /  \
//   2    3
//  / \  / \
// 4  5  6  7

// After calling your function, the tree should look like:

//      1 -> NULL
//    /  \
//   2 -> 3 -> NULL
//  / \  / \
// 4->5->6->7 -> NULL

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
const connect = function(root) {
  const tails = []
  const iter = (tree, level) => {
    if (tree !== null) {
      if (tails[level]) tails[level].next = tree
      tails[level] = tree
      iter(tree.left, level + 1)
      iter(tree.right, level + 1)
    }
  }
  iter(root, 0)
}

const Space1 = function(root) {
  if (root === null) return
  let pre = root,
      cur = null
  while (pre.left) {
    cur = pre
    while (cur) {
      cur.left.next = cur.right
      if (cur.next) cur.right.next = cur.next.left
      cur = cur.next
    }
    pre = pre.left
  }
}
