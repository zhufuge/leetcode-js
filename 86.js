// Given a linked list and a value x, partition it such that all nodes less than
// x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the
// two partitions.

// For example,
// Given 1->4->3->2->5->2 and x = 3,
// return 1->2->2->4->3->5.

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
 * @param {number} x
 * @return {ListNode}
 */
const partition = function(head, x) {
  const start = new ListNode()
  start.next = head
  let p = start, q = p
  while (q !== null && q.next !== null) {
    if (q.next.val < x) {
      if (p !== q) {
        const t = q.next
        q.next = t.next
        t.next = p.next
        p.next = t
        p = t
      } else {
        p = q = q.next
      }
    } else {
      q = q.next
    }
  }

  return start.next
}

const list = createList([1])
console.log(list.toString())
console.log(partition(list, 3).toString())
