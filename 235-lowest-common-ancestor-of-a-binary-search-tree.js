// 235. Lowest Common Ancestor of a Binary Search Tree
// Easy   39%


// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two
// given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor
// is defined between two nodes v and w as the lowest node in T that has both v
// and w as descendants (where we allow a node to be a descendant of itself).”

//         _______6______
//        /              \
//     ___2__          ___8__
//    /      \        /      \
//    0      _4       7       9
//          /  \
//          3   5

// For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another
// example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of
// itself according to the LCA definition.


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

function getNode(root, n) {
  if (root == null) return null
  if (root.val === n) return root
  return getNode(root.left, n) || getNode(root.right, n)
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
  if (!root || !p || !q) return root
  if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q)
  if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q)
  return root
}

;[
  [toBTree([6,2,8,0,4,7,9,null,null,3,5]), 2, 8], // 6
  [toBTree([6,2,8,0,4,7,9,null,null,3,5]), 2, 4], // 2
].forEach(args => {
  console.log('------------------')
  console.log(
    lowestCommonAncestor(
      args[0],
      getNode(args[0], args[1]),
      getNode(args[0], args[2])
    )
  )
})

// Solution:
// 若两个给定节点的值都大（小）于某节点，说明最低公共先辈在该节点的右（左）子节点下。
// 否则就是该节点。

// Submission Result: Accepted
