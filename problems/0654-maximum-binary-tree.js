// 654. Maximum Binary Tree
// Medium   70%


// Given an integer array with no duplicates. A maximum tree building on this
// array is defined as follow:

// The root is the maximum number in the array.
// The left subtree is the maximum tree constructed from left part subarray
// divided by the maximum number.
// The right subtree is the maximum tree constructed from right part subarray
// divided by the maximum number.

// Construct the maximum tree by the given array and output the root node of this
// tree.

// Example 1:

// Input: [3,2,1,6,0,5]
// Output: return the tree root node representing the following tree:

//       6
//     /   \
//    3     5
//     \    /
//      2  0
//        \
//         1

// Note:

// The size of the given array will be in the range [1,1000].

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = function(nums) {
  function iter(start, end) {
    if (start > end) return null
    let j = start
    for (let i = start; i <= end; i++) {
      j = nums[i] > nums[j] ? i : j
    }
    const root = new TreeNode(nums[j])
    root.left = iter(start, j - 1)
    root.right = iter(j + 1, end)
    return root
  }
  return iter(0, nums.length - 1)
}

;[
  [3,2,1,6,0,5],
].forEach(nums => {
  console.log(constructMaximumBinaryTree(nums))
})

// Solution:
// 递归过程中，
// 每次找出数组的最大值位置，并为最大值创建一个节点作为根节点返回，
// 且该节点的左（右）子树为该数字位置的左（右）边子数组。

// Submission Result: Accepted
