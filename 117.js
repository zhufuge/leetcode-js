// Follow up for problem "Populating Next Right Pointers in Each Node".

// What if the given tree could be any binary tree? Would your previous solution
// still work?

// Note:

// You may only use constant extra space.

// For example,
// Given the following binary tree,

//      1
//    /  \
//   2    3
//  / \    \
// 4   5    7

// After calling your function, the tree should look like:

//      1 -> NULL
//    /  \
//   2 -> 3 -> NULL
//  / \    \
// 4-> 5 -> 7 -> NULL


/**
 * Definition for binary tree with next pointer.
 */
function TreeLinkNode(val) {
  this.val = val
  this.left = this.right = this.next = null
}

function fullBAToTree(array) {
  const iter = (i) => {
    if (array[i - 1] === null || array[i - 1] === void 0) return null
    const root = new TreeLinkNode(array[i - 1])
    root.left = iter(i * 2)
    root.right = iter(i * 2 + 1)
    return root
  }

  return iter(1)
}


/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
const connect = function(root) {
  let pre = root
  while (pre) {
    while (pre && !pre.left && !pre.right) pre = pre.next
    if (pre) {
      let cur = pre, tail = cur.left || cur.right
      while (cur) {
        if (cur.left && cur.right) tail = tail.next = cur.right
        if (cur.next && (cur.next.left || cur.next.right))
          tail = tail.next = cur.next.left || cur.next.right
        cur = cur.next
      }
      pre = pre.left || pre.right
    }
  }
}

const tree = fullBAToTree([1,2,2,3,3,3,3,4,4,4,4,4,4,null,null,5,5])
console.log(connect(tree))
