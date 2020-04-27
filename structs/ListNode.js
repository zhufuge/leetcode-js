class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }

  static from(array) {
    if (!Array.isArray(array)) return null
    const head = new this()
    let tail = head
    for (let a of array) {
      tail = tail.next = new this(a)
    }
    return head.next
  }

  nth(n = 0) {
    let node = this
    while (node && n-- > 0) node = node.next
    return node
  }

  toString() {
    let str = ''
    let head = this
    while (head) {
      str += head.val + '->'
      head = head.next
    }
    return str + 'null'
  }
}

module.exports = ListNode
