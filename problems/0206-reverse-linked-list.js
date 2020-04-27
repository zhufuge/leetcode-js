// 206. Reverse Linked List
// Easy   45%


// Reverse a singly linked list.

// click to show more hints.

// Hint:
// A linked list can be reversed either iteratively or recursively. Could you
// implement both?

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
const reverseList = function(head) {
  function iter(head) {
    const prev = new ListNode()
    let node = prev
    while (head) {
      const tmp = head.next
      head.next = node.next
      node.next = head
      head = tmp
    }
    return prev.next
  }
  function recu(head) {
    const prev = new ListNode()
    let node = prev
    function body(head) {
      if (head) {
        body(head.next)
        head.next = null
        node.next = head
        node = node.next
      }
    }
    body(head)
    return prev.next
  }
  //return iter(head)
  return recu(head)
}

const ListNode = require('../structs/ListNode')
;[
  [0,1,2,3,4,5,6],
].forEach((array) => {
  console.log((reverseList(ListNode.from(array)) || '').toString())
})

// Solution:
// 迭代：
// 头插法：每遍历一个节点，都插入到新链表的头部。

// 递归：
// 先递归到最后一个节点，从最后一个节点开始插入新的链表的尾部。

// Submission Result: Accepted
