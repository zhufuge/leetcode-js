// 513. Find Bottom Left Tree Value
// Medium   56%


// Given a binary tree, find the leftmost v in the last row of the tree.

// Example 1:

// Input:

//     2
//    / \
//   1   3

// Output:
// 1

//   Example 2:

// Input:

//         1
//        / \
//       2   3
//      /   / \
//     4   5   6
//        /
//       7

// Output:
// 7

// Note:
// You may assume the tree (i.e., the given root node) is not NULL.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const findBottomLeftValue = function(root) {
  const queue = [root]
  while (queue.length) {
    root = queue.shift()
    if (root.right) queue.push(root.right)
    if (root.left) queue.push(root.left)
  }
  return root.val
}

const TreeNode = require('../structs/TreeNode')
;[
  [2,1,3],                             // 1
  [1,2,3,4,null,5,6,null,null,7],      // 7
  [1,null,1],                          // 1
  [0,null,-1],                         // -1
  [1,2,3,4,null,5,6,null,null,null,7], // 7
].forEach(array => {
  console.log(findBottomLeftValue(TreeNode.from(array)))
})

// Solution:

// 解法一
// 利用递归来遍历树，
// 叶子节点或空节点返回其值和高度值为0的对象或结构体
// 中间节点比较左右子树返回的对象的高度值，返回高度值大的对象，
// 并将对象的高度加一。

function iter(root) {
  if (!root || (!root.left && !root.right)) return { v: root && root.val, h: 0 }

  const left = iter(root.left), right = iter(root.right)
  return (left.v == null || right.h > left.h)
    ? { v: right.v, h: right.h + 1 }
  : { v: left.v, h: left.h + 1 }
}


// 解法二
// 用队列实现BFS。
// 初始时将根节点入队，
// 每次从头出队一个节点，
// 按右到左的顺序检查该节点的子节点，若有子节点，则排入队尾，
// 这样遍历，在最后将会遍历到最后一层的最左的一个节点。

// Submission Result: Accepted
