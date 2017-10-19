// 461. Hamming Distance
// Easy 69% locked:false

// The Hamming distance between two integers is the number of positions at which
// the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// Note:
// 0 ≤ x, y < 2^31.

// Example:

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ?   ?

// The above arrows point to positions where the corresponding bits are
// different.

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function(x, y) {
  let res = 0
  while (x > 0 || y > 0) {
    if (x % 2 !== y % 2) res++
    x = x >> 1
    y = y >> 1
  }
  return res
}

console.log(hammingDistance(1, 2))
