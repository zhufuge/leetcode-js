// 508. Most Frequent Subtree Sum
// Medium   52%


// Given the root of a tree, you are asked to find the most frequent subtree sum.
// The subtree sum of a node is defined as the sum of all the node values formed
// by the subtree rooted at that node (including the node itself). So what is the
// most frequent subtree sum value? If there is a tie, return all the values with
// the highest frequency in any order.

// Examples 1
// Input:

//   5
//  /  \
// 2   -3

// return [2, -3, 4], since all the values happen only once, return all of them
// in any order.

// Examples 2
// Input:

//   5
//  /  \
// 2   -5

// return [2], since 2 happens twice, however -5 only occur once.

// Note:
// You may assume the sum of values in any subtree is in the range of 32-bit
// signed integer.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const findFrequentTreeSum = function(root) {
  const hash = {}
  let freq = 0
  function postorder(root) {
    if (!root) return 0
    const val = root.val + postorder(root.left) + postorder(root.right)
    hash[val] = (hash[val] || 0) + 1
    freq = Math.max(freq, hash[val])
    return val
  }

  postorder(root)
  const result = []
  for (let key in hash) {
    if (hash[key] === freq) result.push(parseInt(key))
  }
  return result
}

const TreeNode = require('../structs/TreeNode')
;[
  [5,2,-3],                      // [2,-3,4]
  [5,2,-5],                      // [2]
].forEach((array) => {
  console.log(findFrequentTreeSum(TreeNode.from(array)))
})

// Solution:
// 使用后序遍历，因为需要计算子树和。
// 使用一个哈希表遍历过程中的子树和及其出现次数。
// 使用一个变量保存出现次数的最大值。

// 最后遍历哈希表找出出现次数等于最大值的数。

// Submission Result: Accepted
