// 725. Split Linked List in Parts
// Medium   50%


// Given a (singly) linked list with head node root, write a function to split
// the linked list into k consecutive linked list "parts".

// The length of each part should be as equal as possible: no two parts should
// have a size differing by more than 1. This may lead to some parts being null.

// The parts should be in order of occurrence in the input list, and parts
// occurring earlier should always have a size greater than or equal parts
// occurring later.

// Return a List of ListNode's representing the linked list parts that are
// formed.

// Examples 1->2->3->4, k = 5 // 5 equal parts [ [1], [2], [3], [4], null ]

// Example 1:

// Input:
// root = [1, 2, 3], k = 5
// Output: [[1],[2],[3],[],[]]
// Explanation:
// The input and each element of the output are ListNodes, not arrays.

// For example, the input root has root.val = 1, root.next.val = 2,
// \root.next.next.val = 3, and root.next.next.next = null.
// The first element output[0] has output[0].val = 1, output[0].next = null.
// The last element output[4] is null, but it's string representation as a
// ListNode is [].

// Example 2:

// Input:
// root = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 3
// Output: [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]
// Explanation:

// The input has been split into consecutive parts with size difference at most
// 1, and earlier parts are a larger size than the later parts.

// Note:
// The length of root will be in the range [0, 1000].
// Each value of a node in the input will be an integer in the range [0, 999].
// k will be an integer in the range [1, 50].

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
const splitListToParts = function(root, k) {
  const result = Array(k)
  function iter(node, i) {
    if (node.next == null) {
      if (k > i) k = i
      return Math.floor(i / k)
    }
    const number = iter(node.next, i + 1)
    if (number === 1) {
      result[--k] = node.next
      node.next = null
      return Math.floor(i / k)
    }
    return number - 1
  }

  if (root) iter(root, 1)
  result[0] = root
  return result
}

const ListNode = require('../structs/ListNode')
;[
  [[1,2,3], 5],
  [[1,2,3,4,5,6,7,8,9,10,11], 3],
].forEach(([array, k]) => {
  const list = ListNode.from(array)
  splitListToParts(list, k).forEach(h => console.log((h || '').toString()))
})

// Solution:
// 为数组分配k个空间。
// 通过递归，获得当前数的为链表中第几个节点（即i）。
// 当递归到最后一个节点时，若节点数小于k，则将k设置为i，并返回数组下标为k-1的应
// 该保存的链表的长度。
// 该长度不断减小，直到长度为1时，将该节点之后的链表保存在下标 k-1 的位置中。
// 并且更新k，和返回上一个位置应该保存的链表的长度。

// Submission Result: Accepted
