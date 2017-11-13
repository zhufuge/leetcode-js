// 206. Reverse Linked List
// Easy   45%


// Reverse a singly linked list.

// click to show more hints.

// Hint:
// A linked list can be reversed either iteratively or recursively. Could you
// implement both?


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

;[
  [0,1,2,3,4,5,6],
].forEach(array => {
  const head = toList(array)
  console.log(head.toString())
  console.log(reverseList(head).toString())
})

// Solution:
// 迭代：
// 头插法：每遍历一个节点，都插入到新链表的头部。

// 递归：
// 先递归到最后一个节点，从最后一个节点开始插入新的链表的尾部。

// Submission Result: Accepted
