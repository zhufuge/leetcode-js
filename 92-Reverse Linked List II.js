// 92. Reverse Linked List II
// Medium 30% locked:false

// Reverse a linked list from position m to n. Do it in-place and in one-pass.

// For example:
// Given 1->2->3->4->5->NULL, m = 2 and n = 4,

// return 1->4->3->2->5->NULL.

// Note:
// Given m, n satisfy the following condition:
// 1 ? m ? n ? length of list.

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

const createList = function(array) {
  const head = new ListNode()
  let t = head
  for (let v of array) {
    t.next = new ListNode(v)
    t = t.next
  }
  return head.next
}


/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = function(head, m, n) {
  if (head === null || head === void 0 || m >= n) return head
  const start = new ListNode()
  start.next = head
  n = n - m
  let a = start
  while (m-- > 1) a = a.next
  let b = a.next
  while (n-- > 0) {
    const t = b.next
    b.next = t.next
    t.next = a.next
    a.next = t
  }

  return start.next
}

const list = createList([1, 2, 3, 4, 5])
console.log(list.toString())
console.log(reverseBetween(list, 2, 4).toString())
