// 117. Populating Next Right Pointers in Each Node II
// Medium   33%

// Follow up for problem "Populating Next Right Pointers in Each Node".

// What if the given tree could be any binary tree? Would your previous solution
// still work?

// Note:

// You may only use constant extra space.

// For example,
// Given the following binary tree,

//      1
//    /  \
//   2    3
//  / \    \
// 4   5    7

// After calling your function, the tree should look like:

//      1 -> NULL
//    /  \
//   2 -> 3 -> NULL
//  / \    \
// 4-> 5 -> 7 -> NULL


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
  let pre = root
  while (pre) {
    while (pre && !pre.left && !pre.right) {
      pre = pre.next
    }
    if (pre) {
      let cur = pre, tail = cur.left || cur.right
      while (cur) {
        if (cur.left && cur.right) {
          tail = tail.next = cur.right
        }
        if (cur.next && (cur.next.left || cur.next.right)) {
          tail = tail.next = cur.next.left || cur.next.right
        }
        cur = cur.next
      }
      pre = pre.left || pre.right
    }
  }
}

const TreeLinkNode = require('../structs/TreeLinkNode')
;[
  [1,2,3,4,5,null,7],
//  [1,2,2,3,3,3,3,4,4,4,4,4,4,null,null,5,5],
].forEach(array => {
  const tree = TreeLinkNode.from(array)
  connect(tree)
  console.log(tree)
})

// Solution:
// 每一层中，都从左边第一个有子节点的节点开始，假设该层已经连接完毕，并开始进行下一层的连接。
// 1. 从左边开始，找到第一个有子节点的节点作为当前节点；
// 2. 若当前节点有左右子节点，则连接左右子节点；
// 3. 若当前的下一个节点有子节点，且有左子节点，则连接其左子节点，若无左，则连右；
// 4. 进入下一个节点；
// 5. 重复 2，3，4，直到该层最后一个节点；
// 6. 进入下一层，重复 1，2，3，4，5

// Submission Result: Accepted
