// 96. Unique Binary Search Trees
// Medium   41%

// Given n, how many structurally unique BST's (binary search trees) that store
// values 1...n?

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
  if (n <= 0) return 0
  const res = [1, 1]            // in order to elegant, set res[0] = 1
  for (let i = 2; i <= n; i++) {
    res[i] = 0
    for (let left = 0; left < i; left++) {
      const right = i - left - 1
      res[i] += res[left] * res[right]
    }
  }
  return res[n]
}

;[
  0,                            // 0
  1,                            // 1
  2,                            // 2
  3,                            // 5
  4,                            // 14
  5,                            // 42
  6,                            // 132
].forEach(n => {
  console.log(numTrees(n))
})


// Solution:
// 0 0
// 1 1
// 2 (1*1)+(1*1)=2
// 3 (1*2)+(1*1)+(2*1)=5
// 4 (1*5)+(1*2)+(2*1)+(5*1)=14
// 5 (1*14)+(1*5)+(2*2)+(5*1)+(12*1)=38
// 6 (1*38)+(1*12)+(2*5)+(5*2)+(12*1)+(38*1)=132
// ...

// 这与计算斐波那契数是类似的问题，不能使用递归，这样会出现大量重复计算。
// 于是也和生成斐波那契数一样，使用动态规划。

// 假设有6个节点
// 在 i=6 的迭代过程中，每个数字都可以作为根节点，
// 以下是以 3 为根节点时，能够构造的不同的树的解释。

// O   O  @  O  O  O
//  \ /   |   \   /
// 左子树  根  右子树
// F(2)=2    F(3)=5

// F(2) * F(3) = 2 * 5 = 10

// Submission Result: Accepted
