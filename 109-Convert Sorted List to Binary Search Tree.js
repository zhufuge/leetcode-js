// 109. Convert Sorted List to Binary Search Tree
// Medium 34% locked:false

// Given a singly linked list where elements are sorted in ascending order,
// convert it to a height balanced BST.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = function(head) {
  const nums = []
  while (head !== null) {
    nums.push(head.val)
    head = head.next
  }
  const sortedArrayToBST = function(nums) {
    const n = nums.length
    if (n === 0) return null
    const mid = (n - 1) >> 1
    const root = new TreeNode(nums[mid])
    root.left = sortedArrayToBST(nums.slice(0, mid))
    root.right = sortedArrayToBST(nums.slice(mid + 1, n))
    return root
  }
  return sortedArrayToBST(nums)
}

const Space1 = function(head) {
  if (head === null) return null
  const iter = (head, tail) => {
    if (head === tail) return null
    let slow = head, fast = head
    while (fast !== tail && fast.next !== tail) {
      fast = fast.next.next
      slow = slow.next
    }
    const root = new TreeNode(slow.val)
    root.left = iter(head, slow)
    root.right = iter(slow.next, tail)
    return root
  }
  return iter(head, null)
}
