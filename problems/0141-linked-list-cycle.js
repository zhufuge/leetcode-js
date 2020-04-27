// 141. Linked List Cycle
// Easy   35%


// Given a linked list, determine if it has a cycle in it.

// Follow up:
// Can you solve it without using extra space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
  if (head == null || head.next == null) return false

  let slow = head, fast = head.next
  while (slow !== fast) {
    if (fast == null || fast.next == null) return false
    slow = slow.next
    fast = fast.next.next
  }
  return true
}

const ListNode = require('../structs/ListNode')

const cycle_0 = ListNode.from([0,1,2,3,4,5,6])
const tail_0 = cycle_0.nth(6)
tail_0.next = cycle_0

const cycle_1 = ListNode.from([0,1,2,3,4,5,6])
const tail_1 = cycle_1.nth(6)
const nth_3 = cycle_1.nth(3)
tail_1.next = nth_3

;[
  ListNode.from([3,2,0,-4]),             // false
  cycle_0,                               // true
  cycle_1,                               // true
].forEach(head => {
  console.log(hasCycle(head))
})

// Solution:
// 方法1. 用一个标记来标记节点是否被放问过。

// 方法2. 偏差遍历。若有循环，其相同节点迟早会相遇。

// Submission Result: Accepted
