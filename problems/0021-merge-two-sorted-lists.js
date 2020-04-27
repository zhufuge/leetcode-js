// 21. Merge Two Sorted Lists
// Easy   39%

//Merge two sorted linked lists and return it as a new list. The new list should
//be made by splicing together the nodes of the first two lists.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
  if (l1 == null) return l2
  if (l2 == null) return l1

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}

const ListNode = require('../structs/ListNode')
;[
  [[1, 3], [0, 4]],
].forEach(([A, B]) => {
  const l1 = ListNode.from(A),
        l2 = ListNode.from(B)
  console.log((mergeTwoLists(l1, l2) || '').toString())
})

// Solution:
// 递归解法
// 将两个链表中头节点小的节点作为合并后的头节点，
// 然后递归出去该节点的两个链表，并将其返回的链表头作为下一个节点。

// Submission Result: Accepted
