// 669. Trim a Binary Search Tree
// Easy 58% locked:false


// Given a binary search tree and the lowest and highest boundaries as L and R,
// trim the tree so that all its elements lies in [L, R] (R >= L). You might need
// to change the root of the tree, so the result should return the new root of
// the trimmed binary search tree.

// Example 1:

// Input:
//     1
//    / \
//   0   2

//   L = 1
//   R = 2

// Output:
//     1
//       \
//        2

// Example 2:

// Input:
//     3
//    / \
//   0   4
//    \
//     2
//    /
//   1

//   L = 1
//   R = 3

// Output:
//       3
//      /
//    2
//   /
//  1


/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

function toBTree(array, i=0) {
  if (array[i] == void 0) return null
  const root = new TreeNode(array[i])
  root.left = toBTree(array, i * 2 + 1)
  root.right = toBTree(array, i * 2 + 2)
  return root
}

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
const trimBST = function(root, L, R) {
  if (root == void 0) return null
  const val = root.val
  if (val < L) return trimBST(root.right, L, R)
  if (val > R) return trimBST(root.left, L, R)
  root.left = trimBST(root.left, L, val)
  root.right = trimBST(root.right, val, R)
  return root
}

;[
  [toBTree([1, 0, 2]), 1, 2],
  [toBTree([3, 0, 4, null, 2, null, null, null, null, 1]), 1, 3],
].forEach((args) => {
  console.log(args[0])
  console.log('---------------------------------------')
  console.log(trimBST(...args))
  console.log('---------------------------------------')
})


// Solution:
// 递归求解。
// 如果节点小于 L ，节点及其右子树是不可能在范围内的，递归寻找左子树符合要求的。
// 如果节点大于 R ，同理。
// 如果节点在范围内，则递归获得其符合要求的左右子节点。
// 最后递归的进行要返回根节点，或null。
// 思路很清晰。

// Submission Result: Accepted
