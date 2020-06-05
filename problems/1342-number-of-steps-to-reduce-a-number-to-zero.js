// 1342. Number of Steps to Reduce a Number to Zero
// Easy   87%


// Given a non-negative integer num, return the number of steps to reduce it to
// zero. If the current number is even, you have to divide it by 2, otherwise,
// you have to subtract 1 from it.

// Example 1:
// Input: num = 14
// Output: 6
// Explanation:
// Step 1) 14 is even; divide by 2 and obtain 7.
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3.
// Step 4) 3 is odd; subtract 1 and obtain 2.
// Step 5) 2 is even; divide by 2 and obtain 1.
// Step 6) 1 is odd; subtract 1 and obtain 0.
// Example 2:
// Input: num = 8
// Output: 4
// Explanation:
// Step 1) 8 is even; divide by 2 and obtain 4.
// Step 2) 4 is even; divide by 2 and obtain 2.
// Step 3) 2 is even; divide by 2 and obtain 1.
// Step 4) 1 is odd; subtract 1 and obtain 0.
// Example 3:
// Input: num = 123
// Output: 12

// Constraints:
//     0 <= num <= 10^6


/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps  = function(num) {
  if (num === 0) return 0
  let res = -1
  while (num > 0) {
    res += num % 2 ? 2 : 1
    num >>>= 1
  }
  return res
}

;[
  0,
  14,
  8,
  123,
  100000,
].forEach((num) => {
  console.log(numberOfSteps(num))
})

// Solution:
// 1. 直接计算

// 2. 使用二进制计算，
// 按照题意可以转换为：
// - 数的二进制最后一位为 0 时，右移一位，计一次操作
// - 数的二进制最后一位为 1 时，右移一位，计两次操作（先减1，在除2）

// Submission Result: Accepted