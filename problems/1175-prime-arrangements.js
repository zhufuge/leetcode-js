// 1175. Prime Arrangements
// Easy   51%


// Return the number of permutations of 1 to n so that prime numbers are at prime
// indices (1-indexed.)
// (Recall that an integer is prime if and only if it is greater than 1, and
// cannot be written as a product of two positive integers both smaller than it.)
// Since the answer may be large, return the answer modulo 10^9 + 7.

// Example 1:
// Input: n = 5
// Output: 12
// Explanation: For example [1,2,5,4,3] is a valid permutation, but [5,2,3,4,1]
// is not because the prime number 5 is at index 1.
// Example 2:
// Input: n = 100
// Output: 682289015

// Constraints:
//     1 <= n <= 100


/**
 * @param {number} n
 * @return {number}
 */
const numPrimeArrangements = function(n) {
  const isPrime = Array(n + 1).fill(true)
  isPrime[1] = false
  let numPrime = 0
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      numPrime++
      for (let j = 2; j * i <= n; j++) isPrime[j * i] = false
    }
  }
  let res = 1, MODULO = 1000000007
  for (let i = 1; i <= numPrime; i++) res = (res * i) % MODULO
  for (let i = 1; i <= n - numPrime; i++) res = (res * i) % MODULO
  return res
}

;[
  5, // 12
  10, // 17280
  20, // 344376809
  50, // 451768713
  100, // 682289015
].forEach((n) => {
  console.log(numPrimeArrangements(n))
})

// Solution:
// 先用数组标记 1 到 n 中每个数是否是素数，
// 从 2 开始遍历，当遍历到 i 时，将所有的 i*k (k>1) 的数标记为非素数。
// 统计素数的个数。

// 所有素数进行全排列，所有非素数进行全排列，
// 最后得到答案。

// Submission Result: Accepted