// 762. Prime Number of Set Bits in Binary Representation
// Easy   62%



// Given two integers L and R, find the count of numbers in the range [L, R]
// (inclusive) having a prime number of set bits in their binary representation.
// (Recall that the number of set bits an integer has is the number of 1s present
// when written in binary.  For example, 21 written in binary is 10101 which has
// 3 set bits.  Also, 1 is not a prime.)
// Example 1:
// Input: L = 6, R = 10
// Output: 4
// Explanation:
// 6 -> 110 (2 set bits, 2 is prime)
// 7 -> 111 (3 set bits, 3 is prime)
// 9 -> 1001 (2 set bits , 2 is prime)
// 10->1010 (2 set bits , 2 is prime)
// Example 2:
// Input: L = 10, R = 15
// Output: 5
// Explanation:
// 10 -> 1010 (2 set bits, 2 is prime)
// 11 -> 1011 (3 set bits, 3 is prime)
// 12 -> 1100 (2 set bits, 2 is prime)
// 13 -> 1101 (3 set bits, 3 is prime)
// 14 -> 1110 (3 set bits, 3 is prime)
// 15 -> 1111 (4 set bits, 4 is not prime)
// Note:
// L, R will be integers L  in the range [1, 10^6].
// R - L will be at most 10000.


/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const countPrimeSetBits = function(L, R) {
  const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19]
  let res = 0
  for (let i = L; i <= R; i++) {
    let count = 0
    for (let j = i; j > 0; j = j >>> 1) if (j % 2) count++
    if (PRIMES.includes(count)) res++
  }
  return res
}

;[
  [6, 10], // 4
  [10, 15], // 5
  [842, 888], // 23
].forEach(([L, R]) => {
  console.log(countPrimeSetBits(L, R))
})

// Solution:
// 计算每个数的二进制中的 1 的个数
// 再判断该数是否是质数

// 因为数从 1 到 10^6 (10^6 < 2^20)
// 所以判断质数时，只需判断其是否为 [2, 3, 5, 7, 11, 13, 17, 19] 中的一个即可。

// Submission Result: Accepted