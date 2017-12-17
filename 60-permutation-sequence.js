// 60. Permutation Sequence
// Medium   28%

// The set [1,2,3,…,n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order,
// We get the following sequence (ie, for n = 3):

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"

// Given n and k, return the kth permutation sequence.

// Note: Given n will be between 1 and 9 inclusive.

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = function(n, k) {
  const cands = Array(n)
  let factorial = 1
  for (let i = 0; i < n; i++) {
    cands[i] = i + 1
    factorial *= i + 1
  }

  let res = ''
  for (let i = n; i > 0; i--) {
    factorial /= i
    const index = Math.trunc((k - 1) / factorial)
    res += cands.splice(index, 1)[0]
    k -= factorial * index
  }
  return res
}

;[
  [3, 4],
].forEach(([n, k]) => {
  console.log(getPermutation(n, k))
})

// Solution:
// 从第一个字符开始向后一个个生成。
// 先构造一个可变数组，从1到n。使用过的数字，可从数组中删除。
// 每次都只需要使用数组中的数和不断更新的k进行生成字符。

// 给定n和k，
// 先计算 n! 表示 n 个数生成的所有字符串。
// (n - 1)! 表示 所有生成的按顺序的字符串的第一个字符相同的数量。
// 如 n = 3 时，
// '1'、'2'、'3' 为第一个字符的数量都为 2 = (n - 1)!

// 确定第一个字符后，从数组中删去该数字，并更新k，
// k需要减去第一个数所在的开始的位置。

// 之后只需要不断重复，因为每次k和n都会更新，像是只需要生成第一个数一样。

// Submission Result: Accepted
