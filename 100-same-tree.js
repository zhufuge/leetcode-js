// 100. Same Tree
// Easy 46% locked:false

// Given two binary trees, write a function to check if they are equal or not.

// Two binary trees are considered equal if they are structurally identical and
// the nodes have the same value.

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

function createTree(array) {
  if (array === null || array === void 0) return null
  const root = new TreeNode(array[0])
  root.left = createTree(array[1])
  root.right = createTree(array[2])
  return root
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
  if (p === q) return true
  if (p === undefined || p === null ||
      q === undefined || q === null ||
      p.val !== q.val) return false

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

const p = createTree(
  [1, [2, [4], [4]], [2, [3], [3]]]
), q = createTree(
  [1, [2, [3], [3]], [2, [4], [4]]]
)

console.log(isSameTree(p, q));
