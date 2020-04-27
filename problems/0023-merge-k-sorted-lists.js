// 23. Merge k Sorted Lists
// Hard   27%

// Merge k sorted linked lists and return it as one sorted list. Analyze and
// describe its complexity.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
  if (lists == null || lists.length === 0) return null

  const mergeTwoLists = (l1, l2) => {
    if (l1 == null) return l2
    if (l2 == null) return l1

    if (l1.val > l2.val) {
      l2.next = mergeTwoLists(l1, l2.next)
      return l2
    } else{
      l1.next = mergeTwoLists(l1.next, l2)
      return l1
    }
  }

  while(lists.length > 1) lists.push(mergeTwoLists(lists.shift(), lists.shift()))
  return lists.shift()
}

const ListNode = require('../structs/ListNode')
;[
  [[1, 3], [0, 1], []],
].forEach((lists) => {
  lists = lists.map(l => ListNode.from(l))
  console.log((mergeKLists(lists) || '').toString())
})

// Solution:
// 分治思想，在两个链表结合的时候，使用21-merge-two-sorted-lists.js中的方法。
// 这里使用队列来实现分治。
// 队列中的前两个链表结合成一个，并插入到队列末尾。

// Submission Result: Accepted
