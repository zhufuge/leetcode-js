// 82. Remove Duplicates from Sorted List II
// Medium 29% locked:false

// Given a sorted linked list, delete all nodes that have duplicate numbers,
// leaving only distinct numbers from the original list.

// For example,
// Given 1->2->3->3->4->4->5, return 1->2->5.
// Given 1->1->1->2->3, return 2->3.

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
const deleteDuplicates = function(head) {
  if (head === null) return head

  const start = new ListNode()
  start.next = head

  let p = start, q = p.next
  while (q !== null && q.next !== null) {
    if (p.next.val !== q.next.val) {
      p = p.next
      q = q.next
    } else {
      while (q.next !== null && p.next.val === q.next.val) q = q.next
      q = q.next
      p.next = q
    }
  }

  return start.next
}

const ListNode = require('../structs/ListNode')
;[
  [3,3,4,4],       // []
  [1,2,3,3,4,4,5], // [1,2,5]
  [1,1,1,2,3],     // [2,3]
].forEach((array) => {
  console.log((deleteDuplicates(ListNode.from(array)) || '').toString())
})

// Solution:
// TODO: #82 solution

// Submission Result: Accepted
