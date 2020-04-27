// 109. Convert Sorted List to Binary Search Tree
// Medium   34%

// Given a singly linked list where elements are sorted in ascending order,
// convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree
// in which the depth of the two subtrees of every node never differ by more
// than 1.

// Example:

// Given the sorted linked list: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following
// height balanced BST:

//      0
//     / \
//   -3   9
//   /   /
// -10  5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

const ListNode = require('../structs/ListNode')
const TreeNode = require('../structs/TreeNode')

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = function(head) {
  function iter(head, tail) {
    if (head === tail) return null

    let slow = head, fast = head
    while (fast !== tail && fast.next !== tail) {
      fast = fast.next.next
      slow = slow.next
    }

    const root = new TreeNode(slow.val)
    root.left = iter(head, slow)
    root.right = iter(slow.next, tail)
    return root
  }
  return iter(head, null)
}

;[
  // [],
  // [0],
  // [0, 1],
  // [0, 1, 2],
  // [0, 1, 2, 3],
  [-10, -3, 0, 5, 9],
  // [0, 1, 2, 3, 4, 5],
  // [0, 1, 2, 3, 4, 5, 6],
  // [0, 1, 2, 3, 4, 5, 6, 7],
].forEach((array) => {
  console.log(sortedListToBST(ListNode.from(array)))
})

// Solution:
// 使用两个指针快慢遍历，找到中间节点，以中间节点为根。
// 递归左链和右链，分别生成左右子树。

// 关键在于快慢遍历。过程中需要特别注意指针的细节。

// Submission Result: Accepted
