// 19. Remove Nth Node From End of List
// Medium   33%

// Given a linked list, remove the nth node from the end of list and return its
// head.

// For example,

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes
// 1->2->3->5.

// Note:
// Given n will always be valid.
//   Try to do this in one pass.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
  const start = new ListNode()
  let slow = start, fast = start
  slow.next = head

  for (let i = 0; i <= n; i++) {
    fast = fast.next
  }

  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next

  return start.next
}

const ListNode = require('../structs/ListNode')
;[
  [[1, 2], 2],      // [2]
  [[1,2,3,4,5], 2], // [1,2,3,5]
].forEach(([A, n]) => {
  console.log((removeNthFromEnd(ListNode.from(A), n) || '').toString())
})

// Solution:
// 使用前后差双前进法：
// 遍历过程中保存两个节点，两节点之间总是相差n个节点。
// 后一个节点从链表头（即第一个节点）开始，前一个节点从第n + 1个节点开始。
// 当前节点前进到了链表的末尾时，后节点就到了倒数第n - 1个节点处，
// 此时，后节点将其前一个节点删除就完成任务了。

// Submission Result: Accepted
