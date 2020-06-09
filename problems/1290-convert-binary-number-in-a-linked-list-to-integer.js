// 1290. Convert Binary Number in a Linked List to Integer
// Easy   80%


// Given head which is a reference node to a singly-linked list. The value of
// each node in the linked list is either 0 or 1. The linked list holds the
// binary representation of a number.
// Return the decimal value of the number in the linked list.

// Example 1:
// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10
// Example 2:
// Input: head = [0]
// Output: 0
// Example 3:
// Input: head = [1]
// Output: 1
// Example 4:
// Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
// Output: 18880
// Example 5:
// Input: head = [0,0]
// Output: 0

// Constraints:
//     The Linked List is not empty.
//     Number of nodes will not exceed 30.
//     Each node's value is either 0 or 1.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = function(head) {
  let res = 0
  while (head) {
    res = res * 2 + head.val
    head = head.next
  }
  return res
}

const ListNode = require('../structs/ListNode')
;[
  [1,0,1], // 5
  [0], // 0
  [1], // 1
  [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0], //18880
  [0,0], // 0
].forEach((arr) => {
  console.log(getDecimalValue(ListNode.from(arr)))
})

// Solution:
// 遍历链表，每遍历一个节点，就将 res 乘 2（或左移一位），再加上该节点的值。

// Submission Result: Accepted