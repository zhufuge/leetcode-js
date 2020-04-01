const TreeNode = require('./TreeNode')

class BinaryTree extends TreeNode {
  constructor(array) {
    const l = array.length
    if (l > 0) {
      const root = super(array[0])
      const queue = [root]
      let i = 1
      while (queue.length > 0 && i < l) {
        const node = queue.shift()
        if (array[i] == null) {
          i++
        } else {
          node.left = new TreeNode(array[i++])
        }
        if (array[i] == null) {
          i++
        } else {
          node.right = new TreeNode(array[i++])
        }
        queue.push(node.left, node.right)
      }
    }
  }
}

module.exports = BinaryTree