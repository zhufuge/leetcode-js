// 24. Swap Nodes in Pairs
// Medium   38%

// Given a linked list, swap every two adjacent nodes and return its head.

// For example,
// Given 1->2->3->4, you should return the list as 2->1->4->3.

// Your algorithm should use only constant space. You may not modify the values
// in the list, only nodes itself can be changed.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function(head) {
  if (!head || !head.next) return head
  const second = head.next
  head.next = swapPairs(second.next)
  second.next = head
  return second
}

const ListNode = require('../structs/ListNode')
;[
  [1, 2],                       // [2, 1]
  [1],                          // [1]
  [1, 2, 3, 4],                 // [2, 1, 4, 3]
].forEach((array) => {
  console.log((swapPairs(ListNode.from(array)) || '').toString())
})

// Solution:
// 使用递归迭代，每两个节点交换一次。
// 保存第二个节点。
// 将第一个节点的下一个节点置为第二个节点之后的链表交换后返回的值。
// 再将第二个节点的下一个节点置为第一个节点，并将第二个节点作为头节点返回。

// Submission Result: Accepted
