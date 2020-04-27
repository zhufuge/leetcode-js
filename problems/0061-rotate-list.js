// 61. Rotate List
// Medium   24%

// Given a list, rotate the list to the right by k places, where k is
// non-negative.

// For example:
// Given 1->2->3->4->5->NULL and k = 2,
// return 4->5->1->2->3->NULL.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = function(head, k) {
  if (head === null || k === 0) return head

  let p = head, q = head, total = 0
  for (let i = k; i > 0 && q !== null; i--) {
    q = q.next
    total++
  }

  if (q === null) {
    if (k % total === 0) return head
    else {
      q = head
      for (let i = 0; i < k % total; i++) q = q.next
    }
  }

  while (q.next !== null) {
    q = q.next
    p = p.next
  }

  const newHead = p.next
  p.next = null
  q.next = head

  return newHead
}

const latest = function(head, k) {
  function iter(node, i) {
    if (node.next == null) {
      k %= i
      if (k === 0) return head
      node.next = head
      return node
    }

    let newHead = iter(node.next, i + 1)
    if (--k === 0) {
      newHead = node.next
      node.next = null
    }
    return newHead
  }

  return head ? iter(head, 1) : head
}

const ListNode = require('../structs/ListNode')
;[
  [[1,2,3,4,5], 2],
  [[1,2], 101],
  [[1], 0],
  [[1], 1]
].forEach(([array, k]) => {
  console.log((rotateRight(ListNode.from(array), k) || '').toString())
  console.log(latest(ListNode.from(array), k).toString())
})

// Solution:
// 使用迭代递归函数，来形成一个栈。
// 先遍历整个链表，直到最后一个节点，并记录链表的长度。
// 使用链表长度更新k, 因为当k大于链表长度时，需要使用取模运算，即k=k%n(n为长度)。

// 若第一次更新k时，就等于0，则直接返回头节点；若不为0，则将链头连到链尾后，形成环。
// 之后就一层层返回，每返回一层，k都需要减一。

// 当k等于0时，说明该节点的下一个节点为右边到左边的第k个节点，将下一个节点作为新的头部，
// 并将该节点的next指针设为null，并返回新的头部
// 若k不为0，则直接返回上一层返回的头部。

// 最后得到的新的头部，即是所求的链表的头部。

// Submission Result: Accepted
