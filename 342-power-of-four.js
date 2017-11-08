// 342. Power of Four
// Easy   38%


// Given an integer (signed 32 bits), write a function to check whether it is a
// power of 4.

// Example:
// Given num = 16, return true.
// Given num = 5, return false.

// Follow up: Could you solve it without loops/recursion?

// Credits:Special thanks to @yukuairoy  for adding this problem and creating all
// test cases.


/**
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour = function(num) {
  return Number.isInteger(Math.log(num) / Math.log(4))
}

;[
  16,                           // true
  5,                            // false
  1,                            // true
  0,                            // false
  -16,                          // false
].forEach(num => {
  console.log(isPowerOfFour(num))
})


// Solution:
// 假设 4^n = num，当 n 为整数时，num 为 以4为底数的幂
// 两边取以4为底的对数 log_4(4 ^ n) = log_4(num)
// n = log_4(num)
// n = log_e(num) / log_e(4)，因为没有合适的取对数函数，只能换用 e 为底的

// Submission Result: Accepted
