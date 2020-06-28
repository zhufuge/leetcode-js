// 1171. Remove Zero Sum Consecutive Nodes from Linked List
// Medium   41%


// Given the head of a linked list, we repeatedly delete consecutive sequences of
// nodes that sum to 0 until there are no such sequences.
// After doing so, return the head of the final linked list.  You may return any
// such answer.

// (Note that in the examples below, all sequences are serializations of ListNode
// objects.)
// Example 1:
// Input: head = [1,2,-3,3,1]
// Output: [3,1]
// Note: The answer [1,2,1] would also be accepted.
// Example 2:
// Input: head = [1,2,3,-3,4]
// Output: [1,2,4]
// Example 3:
// Input: head = [1,2,3,-3,-2]
// Output: [1]

// Constraints:
//     The given linked list will contain between 1 and 1000 nodes.
//     Each node in the linked list has -1000 <= node.val <= 1000.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const ListNode = require('../structs/ListNode')

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const removeZeroSumSublists = function(head) {
  const h = new ListNode()
  h.next = head
  let subHead = h, sum = 0
  while (subHead) {
    sum = 0
    let cur = subHead.next
    while (cur) {
      sum += cur.val
      if (sum === 0) {
        subHead.next = cur.next
      }
      cur = cur.next
    }
    subHead = subHead.next
  }

  return h.next
}


;[
  [1,2,-3,3,1],  // 3->1
  [1,2,-3,3,1,-1,2], // 3->2
  [1,2,3,-3,4], // 1->2->4
  [1,2,3,-3,-2], // 1
  [-1,-2,3,4,1], // 4->1
].forEach((array) => {
  console.log(removeZeroSumSublists(ListNode.from(array)).toString())
})

// Solution:
// 寻找包含第一个节点的连续和为 0 的子序列，将其删除后在寻找第二个子序列，
// 再从更新后的链表中寻找包含第二个节点的子序列，依次寻找完所有节点。
// TO(n*n)

// 使用其他数据结构，可以降低时间复杂度。

// Submission Result: Accepted