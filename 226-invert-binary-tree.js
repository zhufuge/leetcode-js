// 226. Invert Binary Tree
// Easy   52%

//         Invert a binary tree.

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

// to
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

// Trivia:
// This problem was inspired by this original tweet by Max Howell:
// Google: 90% of our engineers use the software you wrote (Homebrew), but you
// can’t invert a binary tree on a whiteboard so fuck off.


/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

function toBTree(array, i=0) {
  if (array[i] == null) return null
  const root = new TreeNode(array[i])
  root.left = toBTree(array, i * 2 + 1)
  root.right = toBTree(array, i * 2 + 2)
  return root
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function(root) {
  if (root == null) return root
  ;[root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  return root
}

;[
  toBTree([4,2,7,1,3,6,9]),
].forEach(root => {
  console.log(invertTree(root))
})

// Solution:
// 遍历每个节点，并交换其左右子树。

// Submission Result: Accepted
