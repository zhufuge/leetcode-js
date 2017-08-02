// Given n, how many structurally unique BST's (binary search trees) that store values 1...n?

// For example,
// Given n = 3, there are a total of 5 unique BST's.

// 1         3     3      2      1
//  \       /     /      / \      \
//   3     2     1      1   3      2
//  /     /       \                 \
// 2     1         2                 3


/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function(n) {
  if (n < 0) return 0
  const res = [0, 1]
  for (let i = 2; i <= n; i++) {
    res[i] = 0
    for (let j = 0; j < i; j++) {
      res[i] += (res[j] ? res[j] : 1) *
        (res[i - j - 1] ? res[i - j - 1] : 1)
    }
  }

  return res[n]
}

console.log(numTrees(5))
