// 25. Reverse Nodes in k-Group
// Hard 30% locked:false

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
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function(head, k) {
  const start = new ListNode(0)
  start.next = head

  let p = start
  while (p !== null && p.next !== null) {
    for (let i = 0, t = p; i < k; i++) {
      t = t.next
      if (t === null) return start.next
    }

    const tmp = p.next
    let stackTop = tmp.next
    for (let i = 0; i < k - 1 && stackTop !== null; i++) {
      const top = stackTop
      stackTop = stackTop.next
      top.next = p.next
      p.next = top
    }
    tmp.next = stackTop
    p = tmp
  }

  return start.next
}


const recursive = function(head, k) {
  let curr = head
  let count = 0
  while (curr !== null && count !== k) {
    curr = curr.next
    count++
  }
  if (count === k) {
    curr = reverseKGroup(curr, k)

    while (count-- > 0) {
      const tmp = head.next
      head.next = curr
      curr = head
      head = tmp
    }
    head = curr
  }
  return head
}

const a = createList([1, 2, 3, 4])
console.log(a.toString())
console.log(recursive(a, 3).toString())
