// 237. Delete Node in a Linked List
// Easy   46%


// Write a function to delete a node (except the tail) in a singly linked list,
// given only access to that node.

// Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node
// with value 3, the linked list should become 1 -> 2 -> 4 after calling your
// function.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
}

const ListNode = require('../structs/ListNode')
;[
  [[1,2,3,4], 2],              // 1 -> 2 -> 4
].forEach(([array, k]) => {
  const node = ListNode.from(array)
  console.log(node.toString())
  deleteNode(node.nth(k))
  console.log(node.toString())
})

// Solution:
// 既然不能获得前一个节点，那就该节点复制下一个节点的值，再删除下一个节点。


// Submission Result: Accepted
