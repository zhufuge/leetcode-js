// 2. Add Two Numbers
// Medium  27%

// You are given two non-empty linked lists representing two non-negative
// integers. The digits are stored in reverse order and each of their nodes
// contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the
// number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

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
const addTwoNumbers = function(l1, l2) {
  const result = new ListNode()
  let p = l1, q = l2, node = result, carry = 0
  while (p || q || carry) {
    const sum = (p ? p.val : 0) + (q ? q.val : 0) + carry
    node.next = new ListNode(sum % 10)
    carry = Math.trunc(sum / 10)
    node = node.next
    if (p) p = p.next
    if (q) q = q.next
  }
  return result.next
}

const ListNode = require('../structs/ListNode')
;[
  [[9, 9], [1]],                // [0, 0, 1]
  [[2, 4, 3], [5, 6, 4]],       // [7, 0, 8]
].forEach(([A, B]) => {
  const l1 = ListNode.from(A),
        l2 = ListNode.from(B)
  console.log((addTwoNumbers(l1, l2) || '').toString())
})


// Solution:
// 保存一个进位位，每次相加都带上进位位。

// Submission Result: Accepted
