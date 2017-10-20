// 19. Remove Nth Node From End of List
// Medium 33% locked:false

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
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

function createList(array) {
  const list = new ListNode()
  let temp = list
  for (let v of array) {
    temp.next = new ListNode(v)
    temp = temp.next
  }
  return list.next
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
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
  const remove = (t, i) => {
    if (t.next === null) i = 0
    else i = remove(t.next, i)
    if (i === n) {
      t.next = t.next.next
    }
    return i + 1
  }

  const h = new ListNode()
  h.next = head
  remove(h, -1)
  return h.next
}


const onePass = function(head, n) {
  const start = new ListNode()
  let slow = start, fast = start
  slow.next = head

  for (let i = 0; i <= n; i++) {
    fast = fast.next
  }

  while (fast !== null) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next

  return start.next
}

const a = createList([1, 2])
console.log(a.toString())
console.log(onePass(a, 2).toString())
