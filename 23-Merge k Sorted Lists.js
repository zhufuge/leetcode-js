// 23. Merge k Sorted Lists
// Hard 27% locked:false

// Merge k sorted linked lists and return it as one sorted list. Analyze and
// describe its complexity.

/**
 * Definition for singly-linked list.
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

function createList(array) {
  const head = new ListNode()
  let t = head
  for (let v of array) {
    t.next = new ListNode(v)
    t = t.next
  }

  return head.next
}

ListNode.prototype.toString = function() {
  let s = '', t = this
  while (t !== null) {
    s += s === '' ? t.val : '->' + t.val
    t = t.next
  }

  return s
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists1 = function(lists) {
  if (lists === null || lists.length === 0) return null

  const allEmpty = (ls) => ls.every(l => l === null)
  const minIndex = (ls) => ls.reduce((m, v, i, a) => v.val < a[m].val ? i : m, 0)

  lists = lists.filter((v) => v !== null)

  const head = new ListNode()
  let t = head
  while (!allEmpty(lists)) {
    const i = minIndex(lists)
    t.next = lists[i]
    t = t.next
    lists[i] = lists[i].next
    if (lists[i] === null) lists.splice(i, 1)
  }

  return head.next
}

const mergeKLists = function(lists) {
  if (lists === null || lists.length === 0) return null

  const mergeTwoLists = (l1, l2) => {
    if (l1 === null) return l2
    if (l2 === null) return l1

    if (l1.val <= l2.val) {
      l1.next = mergeTwoLists(l1.next, l2)
      return l1
    } else{
      l2.next = mergeTwoLists(l1, l2.next)
      return l2
    }
  }

  while(lists.length > 1) lists.push(mergeTwoLists(lists.shift(), lists.shift()))
  return lists.shift()
}

const a = createList([1, 3]),
      b = createList([0, 1]),
      c = createList([])

//console.log(a.toString())
//console.log(b.toString())
//console.log(c.toString())
console.log(mergeKLists([a, b, c]).toString())
