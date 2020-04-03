// 116. Populating Next Right Pointers in Each Node
// Medium   36%

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
 *   this.val = val
 *   this.left = this.right = this.next = null
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
const connect = function(root) {
  if (root == null) return
  let pre = root
  let cur = null
  while (pre.left) {
    cur = pre
    while (cur) {
      cur.left.next = cur.right
      if (cur.next) {
        cur.right.next = cur.next.left
      }
      cur = cur.next
    }
    pre = pre.left
  }
}

const TreeLinkNode = require('../structs/TreeLinkNode')
;[
  [1,2,3,4,5,6,7],
].forEach(array => {
  const tree = TreeLinkNode.from(array)
  connect(tree)
  console.log(tree)
})

// Solution:
// 每一层中，都从最左边的节点开始，假设该层已经连接完毕，并开始进行下一层的连接。
// 1. 连接当前节点的左右子节点；
// 2. 开始连接当前节点的右子节点和下一个节点的左子节点；
// 3. 进入下一个节点；
// 4. 重复 1，2，3，直到该层最后一个节点；
// 5. 进入下一层，并从第一个节点开始。

// Submission Result: Accepted
