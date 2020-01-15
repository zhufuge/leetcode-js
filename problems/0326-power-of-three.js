// 326. Power of Three
// Easy   40%


// Given an integer, write a function to determine if it is a power of three.

// Follow up:
// Could you do it without using any loop / recursion?

// Credits:Special thanks to @dietpepsi for adding this problem and creating all
// test cases.


/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function(n) {
  return n > 0 && Math.pow(3, Math.trunc(Math.log(n) / Math.log(3))) === n
}

;[
  0,                            // false
  3,                            // true
  81,                           // true
].forEach(n => {
  console.log(isPowerOfThree(n))
})


// Solution:
// 假设 3^m = n_um，当 m 为整数时，n_um 为 以4为底数的幂
// 两边取以3为底的对数 log_3(3 ^ m) = log_3(n)
// m = log_3(n)
// m = log_e(n) / log_e(3)，因为没有合适的取对数函数，只能换用 e 为底的
// 但是这样得到的 n，和正确的结果有极小的误差。
// 因此需要对 m 取整再比较 3^m 是否等于 n

// Submission Result: Accepted
