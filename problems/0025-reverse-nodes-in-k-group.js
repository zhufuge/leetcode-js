// 25. Reverse Nodes in k-Group
// Hard   30%

// Given a linked list, reverse the nodes of a linked list k at a time and
// return its modified list.

// k is a positive integer and is less than or equal to the length of the linked
// list. If the number of nodes is not a multiple of k then left-out nodes in
// the end should remain as it is.

// You may not alter the values in the nodes, only nodes itself may be changed.

// Only constant memory is allowed.

// For example,
// Given this linked list: 1->2->3->4->5
// For k = 2, you should return: 2->1->4->3->5
// For k = 3, you should return: 3->2->1->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function(head, k) {
  let tail = head, count = 0
  while (tail && ++count < k) tail = tail.next

  if (count === k) {
    tail.next = reverseKGroup(tail.next, k)

    while (tail !== head) {
      const tmp = head
      head = head.next
      tmp.next = tail.next
      tail.next = tmp
    }
  }

  return head
}

const ListNode = require('../structs/ListNode')
;[
  [[1, 2, 3, 4, 5], 2],  // [2,1,4,3,5]
  [[1, 2, 3, 4, 5], 3],  // [3,2,1,4,5]
  [[1, 2, 3, 4], 2],     // [2,1,4,3]
  [[1, 2, 3, 4], 3],     // [3,2,1,4]
].forEach(([array, k]) => {
  console.log((reverseKGroup(ListNode.from(array), k) || '').toString())
})

// Solution:
// 使用递归结合 *头插法* 求解。
// 1. 看当前链表长度时候大于或等于k。
// 2. 若小于k，直接返回该链表。
// 3. 若大于或等于，则将第k个节点后的链表进行递归，返回的链表返回原来的位置。
// 4. 每个组（即当前链表中的第一个节点到第k个节点）中使用头插法。
// 5. 返回头节点。

// 头插入过程中，
// 每次用一个临时变量保存头节点，而头节点变量指向下一个节点。
// 以保存的最初的尾节点为头，将临时变量指向的节点插入到头之后。
// 直到头节点和尾节点指向同一个节点。

// Submission Result: Accepted
