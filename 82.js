// Given a sorted linked list, delete all nodes that have duplicate numbers,
// leaving only distinct numbers from the original list.

// For example,
// Given 1->2->3->3->4->4->5, return 1->2->5.
// Given 1->1->1->2->3, return 2->3.

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
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
  if (head === null) return head

  const start = new ListNode()
  start.next = head

  let p = start, q = p.next
  while (q !== null && q.next !== null) {
    if (p.next.val !== q.next.val) {
      p = p.next
      q = q.next
    } else {
      while (q.next !== null && p.next.val === q.next.val) q = q.next
      q = q.next
      p.next = q
    }
  }

  return start.next
}

const list = createList([3, 3, 4, 4])
console.log(list.toString())
console.log(deleteDuplicates(list).toString())
