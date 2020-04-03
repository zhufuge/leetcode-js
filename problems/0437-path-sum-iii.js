// 437. Path Sum III
// Easy   39%


// You are given a binary tree in which each node contains an integer value.

// Find the number of paths that sum to a given value.

// The path does not need to start or end at the root or a leaf, but it must go
// downwards
// (traveling only from parent nodes to child nodes).

// The tree has no more than 1,000 nodes and the values are in the range
// -1,000,000 to 1,000,000.

// Example:

// root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

//       10
//      /  \
//     5   -3
//    / \    \
//   3   2   11
//  / \   \
// 3  -2   1

// Return 3. The paths that sum to 8 are:

// 1.  5 -> 3
// 2.  5 -> 2 -> 1
// 3. -3 -> 11


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
const pathSum = function(root, sum) {
  function iter(root, rests) {
    if (root == null) return 0

    const nRests = [sum]
    let count = 0
    for (let rest of rests) {
      if (rest - root.val === 0) count++
      nRests.push(rest - root.val)
    }

    return iter(root.left, nRests) + iter(root.right, nRests) + count
  }
  return iter(root, [sum])
}

const TreeNode = require('../structs/TreeNode')
;[
  [[10,5,-3,3,2,null,11,3,-2,null,1], 8], // 3
  [[1,-2,-3,1,3,-2,null,-1], -1],         // 4
].forEach(([array, sum]) => {
  const root = TreeNode.from(array)
  console.log(pathSum(root, sum))
})

// Solution:

// 每遍历一个节点，构造一个新的数组，数组的元素是当前节点到上层节点的和再与所要
// 的总和的差。如果差为0，则表明有一条路径。

// Submission Result: Accepted
