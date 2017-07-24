// Given a linked list, swap every two adjacent nodes and return its head.

// For example,
// Given 1->2->3->4, you should return the list as 2->1->4->3.

// Your algorithm should use only constant space. You may not modify the values
// in the list, only nodes itself can be changed.


/**
 * Definition for singly-linked list.
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

function createList(array) {
  const head = new ListNode()
  let t = head
  for (let v of array) {
    t.next = new ListNode(v)
    t = t.next
  }

  return head.next
}

ListNode.prototype.toString = function() {
  let s = '', t = this
  while (t !== null) {
    s += s === '' ? t.val : '->' + t.val
    t = t.next
  }

  return s
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function(head) {
  if (head === null || head.next === null) return head

  const start = new ListNode()
  start.next = head
  let t = start
  while (t.next !== null && t.next.next !== null) {
    const first = t.next, second = first.next
    t.next = second
    first.next = second.next
    second.next = first
    t = t.next.next
  }

  return start.next
}

const a = createList([1, 2])

console.log(a.toString())
console.log(swapPairs(a).toString())
