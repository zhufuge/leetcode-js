// 191. Number of 1 Bits
// Easy   39%


// Write a function that takes an unsigned integer and returns the number of ’1'
// bits it has (also known as the Hamming weight).

// For example, the 32-bit integer ’11' has binary representation
// 00000000000000000000000000001011, so the function should return 3.

// Credits:Special thanks to @ts for adding this problem and creating all test
// cases.


/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function(n) {
  let result = 0
  while (n) {
    result += n % 2
    n = n >>> 1
  }
  return result
}

;[
  11,                           // 3
].forEach(n => {
  console.log(hammingWeight(n))
})

// Solution:
// %2 运算获得最后一位的比特值
// >>>1 逻辑右移

// Submission Result: Accepted
