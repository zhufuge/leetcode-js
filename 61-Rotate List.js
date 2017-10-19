// 61. Rotate List
// Medium 24% locked:false

// Given a list, rotate the list to the right by k places, where k is
// non-negative.

// For example:
// Given 1->2->3->4->5->NULL and k = 2,
// return 4->5->1->2->3->NULL.

/**
 * Definition for singly-linked list.
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

ListNode.prototype.toString = function() {
  let s = '', t = this
  while (t !== null) {
    s += s === '' ? t.val : '->' + t.val
    t = t.next
  }
  return s
}

function createList(array) {
  const head = new ListNode()
  let tail = head
  for (let v of array) {
    tail.next = new ListNode(v)
    tail = tail.next
  }
  return head.next
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function(head, k) {
  if (head === null || k === 0) return head

  let p = head, q = head, total = 0
  for (let i = k; i > 0 && q !== null; i--) {
    q = q.next
    total++
  }

  if (q === null) {
    if (k % total === 0) return head
    else {
      q = head
      for (let i = 0; i < k % total; i++) q = q.next
    }
  }

  while (q.next !== null) {
    q = q.next
    p = p.next
  }

  const newHead = p.next
  p.next = null
  q.next = head

  return newHead
}

const list = createList([1, 2])
console.log(rotateRight(list, 101).toString())
