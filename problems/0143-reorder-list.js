// 143. Reorder List
// Medium   36%


// Given a singly linked list L: L0->L1->...->Ln-1->Ln,
// reorder it to: L0->Ln->L1->Ln-1->L2->Ln-2->...
// You may not modify the values in the list's nodes, only nodes itself may be
// changed.
// Example 1:
// Given 1->2->3->4, reorder it to 1->4->2->3.
// Example 2:
// Given 1->2->3->4->5, reorder it to 1->5->2->4->3.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function(head) {
  if (!head) return null
  let fast = slow = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  let node = slow.next
  const stack = []
  while (node) {
    stack.push(node)
    node = node.next
  }
  slow.next = null
  node = head
  while (stack.length > 0) {
    const insert = stack.pop()
    insert.next = node.next
    node.next = insert
    node = node.next.next
  }
}

const better = function(head) {
  if (!head || !head.next) return

  let slow = fast = head
  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }

  const preMid = slow
  let preCur = slow.next
  while (preCur.next) {
    const cur = preCur.next
    preCur.next = cur.next
    cur.next = preMid.next
    preMid.next = cur
  }

  let p1 = head
  let p2 = preMid.next
  while (p1 !== preMid) {
    preMid.next = p2.next
    p2.next = p1.next
    p1.next = p2
    p1 = p2.next
    p2 = preMid.next
  }
}

const ListNode = require('../structs/ListNode')
;[
  [1,2,3,4],
  [1,2,3,4,5],
  [1],
  [1,2],
  [1,2,3],
  [],
].forEach((array) => {
  const list = ListNode.from(array)
  // reorderList(list)
  better(list)
  if (list) console.log(list.toString())
  else console.log('null')
})

// Solution:
// 找到后半部分，依次入栈，再出栈插入合适的位置。

// 更好的方法
// 1. 找到后半部分
// 2. 将后半部分翻转
// 3. 将后半部分插入到前半部。

// Submission Result: Accepted