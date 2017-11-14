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

;[
  [[3,4,1,2,5], [2,4,3]],       // [2,4,3]
].forEach(args => {
  const headA = toList(args[0]),
        headB = toList(args[1])
  console.log(headA.toString())
  console.log(headB.toString())
  const result = getIntersectionNode(headA, headB)
  if (result) console.log(result.toString())
})

// Solution:
// 用哈希来算交集。

// Submission Result: Accepted
