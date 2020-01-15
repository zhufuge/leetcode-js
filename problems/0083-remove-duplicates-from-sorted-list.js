// 83. Remove Duplicates from Sorted List
// Easy   39%

// Given a sorted linked list, delete all duplicates such that each element
// appear only once.

// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

const toList = function(array) {
  const head = new ListNode()
  let node = head
  for (let a of array) {
    node.next = new ListNode(a)
    node = node.next
  }
  return head.next
}

ListNode.prototype.toString = function() {
  let s = '', node = this
  while (node) {
    s += (s === '' ? s : '->') + node.val
    node = node.next
  }
  return s
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
  let p = head
  while (p && p.next) {
    if (p.val === p.next.val) p.next = p.next.next
    else p = p.next
  }

  return head
}

;[
  [1, 1, 2],
  [1, 1, 2, 3, 3],
  [],
  [3, 3, 4, 4],
].forEach(array => {
  const list = toList(array)
  console.log((list || '').toString())
  console.log((deleteDuplicates(list) || '').toString())
})


// Solution:
// 若下一个指针的值与当前指针的值相同，则将下一个指针删除。
// 否则，移动指针。

// Submission Result: Accepted
