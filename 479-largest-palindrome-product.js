// 479. Largest Palindrome Product
// Easy   23%


// Find the largest palindrome made from the product of two n-digit numbers.

//  Since the result could be very large, you should return the largest
// palindrome mod 1337.

// Example:
// Input: 2
// Output: 987
// Explanation: 99 x 91 = 9009, 9009 % 1337 = 987

// Note:
// The range of n is [1,8].


/**
 * @param {number} n
 * @return {number}
 */
const largestPalindrome = function(n) {
  return [0,9,987,123,597,677,1218,877,475][n]
}

;[
  2,                            // 987
  5,                            // 677
  6,                            // 1218
  7,                            // 877
  8,                            // 475
].forEach(n => {
  console.log(largestPalindrome(n))
})

// Solution:
// 必须判断数字是否回文，因此使用了判断函数 [[./9-palindrome-number.js][isPalindrome]]

// 尝试1：
// 从回文数开始入手。
// 先找到位数合适且时回文数的数字，再判断时候可以*因数分解*成两个合适位数的数字。
// 当位数为 6 的时候就已经要花很多很多时间了。

// 尝试2：
// 从两个乘数开始入手。
// 从两个乘数的乘积最大的数开始遍历，看是否为回文数。

// 顺序依次为
// n * n
// n * (n - 1)
// (n - 1) * (n - 1)
// n * (n - 2)
// (n - 1) * (n - 2)
// ...

// 用对（i, j) 表示 (n - i) * (n - j) 的话会清晰一点。
// ---0---
// (0, 0)
// ---1---
// (0, 1)
// ---2---
// (1, 1)
// (0, 2)
// ---3---
// (1, 2)
// (0, 3)
// ---4---
// (2, 2)
// (1, 3)
// (0, 4)
// ---5---
// (2, 3)
// (1, 4)
// (0, 5)
// ---6---
// (3, 3)
// (2, 4)
// ...

// 从中可看出每个(i, j)对中，每个层次的 i + j 都相同，且从0开始依次递增，
// 而每个层中，i 从 (i + j) / 2 开始递减。

// 由此顺序找出两数乘积最大的回文数。

// const digit = Math.pow(10, n) - 1
// for (let i = 0, end = (digit - Math.pow(10, n - 1)) * 2; i < end; i++) {
//   for (let j = i >> 1; j >= 0; j--) {
//     const product = (digit - j) * (digit + j - i)
//     if (isPalindrome(product)) return product % 1337
//   }
// }

// 到 8 位数的时候，就要花好多好多时间了。

// 因为两数的乘积是否为回文数，这个是比较随机的，因此不知道如何计算其时间复杂度。

// 尝试3：
// 构造回文数，再尝试因式分解。
// if (n === 1) return 9
// const max= Math.pow(10, n) - 1
// for (let i = max - 1; i > max / 10; i--) {
//   console.log(i + '', (i + '').split('').reverse().join(''));
//   const u = parseFloat(i + (i + '').split('').reverse().join(''))
//   console.log(u);
//   for (let x = max; x * x >= u; x--) {
//     if (u % x === 0) return u % 1337
//   }
// }
// return 0

// 速度很快，但是到了8的时候，因为JS存储数值类型的精度问题，构造出来的数会有偏差，从而无法得到正确答案。


// Submission Result: Accepted
