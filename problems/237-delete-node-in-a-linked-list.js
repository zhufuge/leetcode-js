// 237. Delete Node in a Linked List
// Easy   46%


// Write a function to delete a node (except the tail) in a singly linked list,
// given only access to that node.

// Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node
// with value 3, the linked list should become 1 -> 2 -> 4 after calling your
// function.


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
  for (let i = 0, n = array.length; i < n; i++) {
    node.next = new ListNode(array[i])
    node = node.next
  }
  return head.next
}

ListNode.prototype.toString = function() {
  let node = this, string = ''
  while (node) {
    string += (string === '' ? '' : '->') + node.val
    node = node.next
  }
  return string
}

function getNthNode(n, list) {
  let node = list
  while (--n > 0) node = node.next
  return node
}

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
}

;[
  [toList([1,2,3,4]), 3],              // 1 -> 2 -> 4
].forEach(args => {
  console.log(args[0].toString())
  deleteNode(getNthNode(args[1], args[0]))
  console.log(args[0].toString())
})

// Solution:
// 既然不能获得前一个节点，那就该节点复制下一个节点的值，再删除下一个节点。


// Submission Result: Accepted
