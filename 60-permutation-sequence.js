// 60. Permutation Sequence
// Medium 28% locked:false

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
  const factorial = n => n === 0 ? 1 : n * factorial(n - 1)
  const cands = []
  for (let i = 1; i <= n; i++) cands[i - 1] = i

  let res = ''
  for (let i = n; i > 0; i--) {
    const fn = factorial(i - 1)
    const index = Math.trunc((k - 1) / fn)
    res += cands.splice(index, 1)[0]
    k -= fn * index
  }

  return res
}

console.log(getPermutation(0, 0))
