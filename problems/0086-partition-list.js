// 86. Partition List
// Medium   32%

// Given a linked list and a value x, partition it such that all nodes less than
// x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the
// two partitions.

// For example,
// Given 1->4->3->2->5->2 and x = 3,
// return 1->2->2->4->3->5.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = function(head, x) {
  const node1 = new ListNode(), node2 = new ListNode()
  let p1 = node1, p2 = node2
  while (head) {
    if (head.val < x) {
      p1 = p1.next = head
    } else {
      p2 = p2.next = head
    }
    head = head.next
  }
  p2.next = null
  p1.next = node2.next
  return node1.next
}

const ListNode = require('../structs/ListNode')
;[
  [[1], 3],
  [[1, 4, 3, 2, 5, 2], 3],
  [[5, 1, 3, 2, 4, 1], 3],
].forEach(([array, x]) => {
  console.log((partition(ListNode.from(array), x) || '').toString())
})

// Solution:
// 使用两个链表将两部分分别串起来。
// 再将第二个（大于或等于x）的链表连到第一个（小于x）的链表的末尾。
// 最后需要将第二个链表的末尾指向 null ，因为末尾节点还可能指向里另一个节点。

// Submission Result: Accepted
