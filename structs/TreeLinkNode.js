const TreeNode = require('./TreeNode')

function TreeLinkNode(val) {
  TreeNode.call(this, val)
  this.next = null
}

TreeLinkNode.from = function(array) {
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

module.exports = TreeLinkNode
