// 21. Merge Two Sorted Lists
// Easy 39% locked:false

//Merge two sorted linked lists and return it as a new list. The new list should
//be made by splicing together the nodes of the first two lists.

/**
 * Definition for singly-linked list.
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

function createList(array) {
  const h = new ListNode()
  let t = h
  for (let v of array) {
    t.next = new ListNode(v)
    t = t.next
  }
  return h.next
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
  const head = new ListNode()
  let p1 = l1, p2 = l2, t = head
  while (p1 !== null || p2 !== null) {
    if (p1 === null || (p2 !== null && p1.val > p2.val)) {
      t.next = new ListNode(p2.val)
      p2 = p2.next
    } else if (p2 === null || (p1 !== null && p1.val <= p2.val)) {
      t.next = new ListNode(p1.val)
      p1 = p1.next
    }
    t = t.next
  }

  return head.next
}

const recursive = function(l1, l2) {
  if(l1 === null) return l2
  if(l2 === null) return l1

  if(l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l2.next, l1)
    return l2
  }
}

const a = createList([1, 3]),
      b = createList([0, 4])

//console.log(a.toString())
//console.log(b.toString())

console.log(mergeTwoLists(a, b).toString())
console.log(recursive(a, b).toString())
