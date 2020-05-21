// 147. Insertion Sort List
// Medium   40%


// Sort a linked list using insertion sort.
// A graphical example of insertion sort. The partial sorted list (black)
// initially contains only the first element in the list.
// With each iteration one element (red) is removed from the input data and
// inserted in-place into the sorted list

// Algorithm of Insertion Sort:
//     Insertion sort iterates, consuming one input element each repetition, and
// growing a sorted output list.
//     At each iteration, insertion sort removes one element from the input data,
// finds the location it belongs within the sorted list, and inserts it there.
//     It repeats until no input elements remain.
// Example 1:
// Input: 4->2->1->3
// Output: 1->2->3->4
// Example 2:
// Input: -1->5->3->4->0
// Output: -1->0->3->4->5


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 * this.val = val;
 *     this.next = null;
 * }
 */
const ListNode = require('../structs/ListNode')

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const insertionSortList = function(head) {
  const helper = new ListNode(0)
  let node, temp
  while (head) {
    node = helper
    while (node.next && head.val > node.next.val) node = node.next
    temp = head
    head = head.next
    temp.next = node.next
    node.next = temp
  }
  return helper.next
}

;[
  [4,2,1,3],
  [4,2,6,1,3,7,5],
  [-1,5,3,4,0],
].forEach((array) => {
  console.log((insertionSortList(ListNode.from(array)) || 'null').toString())
})

// Solution:
// 使用一个新的链表来记录排序后的链表，使用空节点作为头部以便更改第一个节点时丢失头部。
// 遍历输入的链表，
// 每遍历一个节点，都将当前节点插入到新链表的适合的位置上（从前往后找位置）。

// Submission Result: Accepted