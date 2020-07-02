class ListNode {
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next
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
    const array = []
    let str = ''
    let head = this
    while (head) {
      array.push(head)
      str += head.val + '->'
      head = head.next
      const k = array.indexOf(head)
      if (k > -1) return str + `[${k}]`
    }
    return str + 'null'
  }
}

module.exports = ListNode
