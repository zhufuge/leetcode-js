// 572. Subtree of Another Tree
// Easy   40%


// Given two non-empty binary trees s and t, check whether tree t has exactly the
// same structure and node values with a subtree of s. A subtree of s is a tree
// consists of a node in s and all of this node's descendants. The tree s could
// also be considered as a subtree of itself.

// Example 1:

// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2

// Given tree t:
//    4
//   / \
//  1   2

// Return true, because t has the same structure and node values with a subtree
// of s.

// Example 2:

// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
//     /
//    0

// Given tree t:
//    4
//   / \
//  1   2

// Return false.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const isSubtree = function(s, t) {
  function isSame(s, t) {
    if (s === t) return true
    if (s == void 0 || t == void 0 || s.val !== t.val) return false
    return isSame(s.left, t.left) && isSame(s.right, t.right)
  }
  function iter(s, t) {
    if (s == void 0) return false
    return isSame(s, t) || iter(s.left, t) || iter(s.right, t)
  }
  return iter(s, t)
}

const TreeNode = require('../structs/TreeNode')
;[
  [[3,4,5,1,2],[4,1,2]],                       // true
  [[3,4,5,1,2,null,null,null,null,0],[4,1,2]], // false
  [[1,1],[1]],                                 // true
  [[3,4,5,1,null,2],[3,1,2]],                  // false
  [[3,4,5,1,2,null,null,0],[4,1,2]],           // false
].forEach(([a, b]) => {
  console.log(isSubtree(TreeNode.from(a), TreeNode.from(b)))
})

// Solution:
// 1. 对比 s 根节点的值和 t 根节点的值，若相同则递归其左右子节点，
//    否则递归以 s 左右子节点为根的树 和 t。 这里需要记录 t 的根节点用于回溯。
// 失败！
// 因为需要回溯，因此会消耗很多时间。

// function iter(s, ti, t) {
//   if (s === ti) return true
//   if (s == void 0 || ti == void 0) return false
//   return (s.val === ti.val && iter(s.left, ti.left, t) && iter(s.right, ti.right, t)) ||
//     iter(s.left, t, t) || iter(s.right, t, t)
// }
// return iter(s, t, t)

// 2. 中序遍历，再找子字符串。
// 失败！
// 找到子字符串，只能说明含有相同的片段，当并不是子树。
// 同理，前序，后序也不行。
// 两两组合也不行，必须三个都有，但是这样应该会很耗时。

// function inorder(t) {
//   if (t == void 0) return ''
//   return inorder(t.left) + t.val + inorder(t.right)
// }
// return inorder(s).includes(inorder(t))

// 3. 直接用s子树和t树比较是否相同。
// 这...就行了。

// Submission Result: Accepted
