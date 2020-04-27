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
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

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

const ListNode = require('../structs/ListNode')
;[
  [[1, 2, 6, 3, 4, 5, 6], 6],        // [1,2,3,4,5]
  [[1], 1],                          // []
  [[1,1], 1],                        // []
].forEach(([array, val]) => {
  console.log((removeElements(ListNode.from(array), val) || '').toString())
})

// Solution:
// 在链表中要删除一个元素，必须要保留上一个元素的引用。
// 添加一个空的头节点处理起来会更方便。

// Submission Result: Accepted
