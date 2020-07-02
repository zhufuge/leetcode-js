class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
  getNode(val) {
    function find(root, val) {
      if (root == null) return null
      if (root.val === val) return root
      return find(root.left, val) || find(root.right, val)
    }
    return find(this, val)
  }
  static from(array) {
    if (!Array.isArray(array)) return null

    const l = array.length
    if (l === 0) return null

    const root = new this(array[0])
    const queue = [root, root]
    for (let i = 1; i < l; i++) {
      const parent = queue.shift()
      if (array[i] !== null) {
        const node = new this(array[i])
        if (parent === queue[0]) {
          parent.left = node
        } else {
          parent.right = node
        }
        queue.push(node, node)
      }
    }
    return root
  }

  print() {
    // TODO: <TreeNode> tree node show
    const queue = [this]
    const layers = []
    while (queue.length) {
      let s = '', l = queue.length
      for (let i = l; i > 0; i--) {
        const node = queue.shift()
        s += s === '' ? '' : '\t'
        if (node == null) {
          s += ' '
        } else {
          s += node.val
          queue.push(node.left, node.right)
        }
      }
      for (let i = 0; i < layers.length; i++) {
        layers[i] = '\t' + layers[i]
      }
      layers.push(s + '\n')
    }
    return layers.join('')
  }
}

module.exports = TreeNode