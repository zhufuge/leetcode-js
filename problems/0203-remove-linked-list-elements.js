// 203. Remove Linked List Elements
// Easy   32%


// Remove all elements from a linked list of integers that have value val.

// Example
// Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6,  val = 6
// Return: 1 --> 2 --> 3 --> 4 --> 5

// Credits:Special thanks to @mithmatt for adding this problem and creating all
// test cases.


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
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {
  const prev = new ListNode()
  prev.next = head
  let node = prev
  while (node.next) {
    if (node.next.val === val) node.next = node.next.next
    else node = node.next
  }
  return prev.next
}

;[
  [[1, 2, 6, 3, 4, 5, 6], 6],        // [1,2,3,4,5]
  [[1], 1],                          // []
  [[1,1], 1],                        // []
].forEach(args => {
  const head = toList(args[0])
  console.log(head.toString())
  const result = removeElements(head, args[1])
  console.log('result: ' + (result ? result.toString() : 'null' ))
})

// Solution:
// 在链表中要删除一个元素，必须要保留上一个元素的引用。
// 添加一个空的头节点处理起来会更方便。

// Submission Result: Accepted
