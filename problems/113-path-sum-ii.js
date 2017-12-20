// 113. Path Sum II
// Medium 34% locked:false

// Given a binary tree and a sum, find all root-to-leaf paths where each path's
// sum equals the given sum.

// For example:
// Given the below binary tree and sum = 22,

//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \    / \
//         7    2  5   1

// return

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = function(root, sum) {
  const res = []
  const iter = (root, sum, path) => {
    if (root !== null) {
      path.push(root.val)
      if (root.val === sum && root.left === null && root.right === null) {
        res.push([...path])
      } else {
        sum -= root.val
        iter(root.left, sum, path)
        iter(root.right, sum, path)
      }
      path.pop()
    }
  }
  iter(root, sum, [])
  return res
}
