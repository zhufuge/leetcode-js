// 160. Intersection of Two Linked Lists
// Easy   30%


// Write a program to find the node at which the intersection of two singly
// linked lists begins.

// For example, the following two linked lists:

// A:          a1 → a2
//                    ↘
//                      c1 → c2 → c3
//                    ↗
// B:     b1 → b2 → b3

// begin to intersect at node c1.

// Notes:

// If the two linked lists have no intersection at all, return null.
// The linked lists must retain their original structure after the function
// returns.
// You may assume there are no cycles anywhere in the entire linked structure.
// Your code should preferably run in O(n) time and use only O(1) memory.

// Credits:Special thanks to @stellari for adding this problem and creating all
// test cases.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function(headA, headB) {
  const hash = {}
  while (headA) {
    hash[headA.val] = 1
    headA = headA.next
  }
  while (headB) {
    if (hash[headB.val]) hash[headB.val] = 2
    headB = headB.next
  }

  const head = new ListNode()
  let node = head
  for (let key in hash) {
    if (hash[key] === 2) {
      node.next = new ListNode(key)
      node = node.next
    }
  }

  return head.next
}

const ListNode = require('../structs/ListNode')
;[
  [[3,4,1,2,5], [2,4,3]],       // [2,4,3]
].forEach(([A, B]) => {
  const headA = ListNode.from(A),
        headB = ListNode.from(B)
  console.log((getIntersectionNode(headA, headB) || '').toString())
})

// Solution:
// 用哈希来算交集。
// TODO: #160 重做，题目理解错了

// Submission Result: Accepted
