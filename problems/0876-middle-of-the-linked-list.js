// 876. Middle of the Linked List
// Easy   66%


// Given a non-empty, singly linked list with head node head, return a middle
// node of linked list.
// If there are two middle nodes, return the second middle node.

// Example 1:
// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])
// The returned node has value 3.  (The judge's serialization of this node is
// [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next =
// NULL.
// Example 2:
// Input: [1,2,3,4,5,6]
// Output: Node 4 from this list (Serialization: [4,5,6])
// Since the list has two middle nodes with values 3 and 4, we return the second
// one.

// Note:
//     The number of nodes in the given list will be between 1 and 100.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function(head) {
  let slow = fast = head
  while (fast != null && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

const ListNode = require('../structs/ListNode')
;[
  [1,2,3,4,5],  // [3,4,5]
  [1,2,3,4,5,6], // [4,5,6]
].forEach((array) => {
  console.log((middleNode(ListNode.from(array)) || '').toString())
})

// Solution:
// 使用两个指针，都从头开始向后移动，
// 慢指针一次移动一个节点，快指针一次移动两个节点。
// 当快指针为 null 或 其下一个指针为 null 时，慢指针的位置则为中间位置。

// Submission Result: Accepted