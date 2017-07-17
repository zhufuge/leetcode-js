// You are given two non-empty linked lists representing two non-negative
// integers. The digits are stored in reverse order and each of their nodes
// contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the
// number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

function ListNode(val) {
  this.val = val
  this.next = null
}

ListNode.prototype.toString = function() {
  let curr = this
  let string = ''
  while (curr) {
    string += string === '' ? curr.val : '->' + curr.val
    curr = curr.next
  }
  return string
}

function createList(arr) {
  const list = new ListNode(0)
  let curr = list
  for (let a of arr) {
    curr.next = new ListNode(a)
    curr = curr.next
  }
  return list.next
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  const getCarry = n => Math.floor(n / 10)
  const result = new ListNode(0)
  let p = l1, q = l2, curr = result, carry = 0
  while (p || q) {
    const sum = (p ? p.val : 0) + (q ? q.val : 0) + carry
    curr.next = new ListNode(sum % 10)
    carry = getCarry(sum)
    curr = curr.next
    if (p) p = p.next
    if (q) q = q.next
  }

  if (carry) {
    curr.next = new ListNode(carry)
  }
  return result.next
}

const l1 = createList([9, 9]),
      l2 = createList([1])

console.log(l1.toString())
console.log(l2.toString())
console.log(addTwoNumbers(l1, l2).toString())
