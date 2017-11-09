// 263. Ugly Number
// Easy   39%


// Write a program to check whether a given number is an ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
// For example, 6, 8 are ugly while 14 is not ugly since it includes another
// prime factor 7.

// Note that 1 is typically treated as an ugly number.

// Credits:Special thanks to @jianchao.li.fighter for adding this problem and
// creating all test cases.


/**
 * @param {number} num
 * @return {boolean}
 */
const isUgly = function(num) {
  if (num <= 0) return false
  while (!(num % 2)) num /= 2
  while (!(num % 3)) num /= 3
  while (!(num % 5)) num /= 5
  return num === 1
}

;[
  6,                            // true
  8,                            // true
  14,                           // false
  1,                            // true
  -6,                           // false
  0,                            // false
].forEach(num => {
  console.log(isUgly(num))
})

// Solution:
// 若能一直除 2，就一直除
// 再若能一直除 3，就一直除
// 再若能一直除 5，就一直除
// 最后如果结果为 1 ，则返回 true，否则 false。

// Submission Result: Accepted
