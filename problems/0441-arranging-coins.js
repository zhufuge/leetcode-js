// 441. Arranging Coins
// Easy   36%


// You have a total of n coins that you want to form in a staircase shape, where
// every k-th row must have exactly k coins.

// Given n, find the total number of full staircase rows that can be formed.

// n is a non-negative integer and fits within the range of a 32-bit signed
// integer.

// Example 1:

// n = 5

// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤

// Because the 3rd row is incomplete, we return 2.

// Example 2:

// n = 8

// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤ ¤
// ¤ ¤

// Because the 4th row is incomplete, we return 3.


/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = function(n) {
  let i = 0
  while (n > i) n -= ++i
  return i
}

;[
  5,                            // 2
  8,                            // 3
].forEach(n => {
  console.log(arrangeCoins(n))
})

// Solution:
// 每次减去层数，如数小于乘数时，返回乘数。

// Submission Result: Accepted
