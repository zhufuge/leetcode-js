// 141. Linked List Cycle
// Easy   35%


// Given a linked list, determine if it has a cycle in it.

// Follow up:
// Can you solve it without using extra space?


/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

function toList(array) {
  const head = new ListNode()
  let node = head
  for (let a of array) {
    node.next = new ListNode(a)
    node = node.next
  }
  return head.next
}

ListNode.prototype.toString = function() {
  let node = this, s = ''
  while (node) {
    s += (s === '' ? '' : '->') + node.val
    node = node.next
  }
  return s
}

ListNode.prototype.nth = function(n) {
  let node = this
  while (node) {
    if (n === 0) return node
    n--
    node = node.next
  }
  return null
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
  if (head == null || head.next == null) return false

  let slow = head, fast = head.next
  while (slow !== fast) {
    if (fast == null || fast.next == null) return false
    slow = slow.next
    fast = fast.next.next
  }
  return true
}


const cycle0 = toList([0,1,2,3,4,5,6])
const tail0 = cycle0.nth(6)
tail0.next = cycle0

const cycle1 = toList([0,1,2,3,4,5,6])
const tail1 = cycle1.nth(6)
const nth3 = cycle1.nth(3)
tail1.next = nth3

;[
  toList([3,2,0,-4]),                   // false
  cycle0,                               // true
  cycle1,                               // true
].forEach(head => {
  console.log(hasCycle(head))
})

// Solution:
// 方法1. 用一个标记来标记节点是否被放问过。

// 方法2. 偏差遍历。若有循环，其相同节点迟早会相遇。

// Submission Result: Accepted
