// 405. Convert a Number to Hexadecimal
// Easy   41%


// Given an integer, write an algorithm to convert it to hexadecimal. For
// negative integer, two’s complement method is used.

// Note:

// All letters in hexadecimal (a-f) must be in lowercase.
// The hexadecimal string must not contain extra leading 0s. If the number is
// zero, it is represented by a single zero character '0'; otherwise, the first
// character in the hexadecimal string will not be the zero character.
// The given number is guaranteed to fit within the range of a 32-bit signed
// integer.
// You must not use any method provided by the library which converts/formats the
// number to hex directly.

// Example 1:

// Input:
// 26

// Output:
// "1a"

// Example 2:

// Input:
// -1

// Output:
// "ffffffff"


/**
 * @param {number} num
 * @return {string}
 */
const toHex = function(num) {
  const c = '0123456789abcdef'
  let n = num < 0 ? num + 0xffffffff + 1 : num,
      result = ''
  while (n > 0) {
    result = c[n % 16] + result
    n = n >>> 4
  }
  return result === '' ? '0' : result
}

;[
  26,                           // '1a'
  -1,                           // 'ffffffff'
  -2,                           // 'fffffffe'
  -268435455,                   // 'f0000001'
].forEach(num => {
  console.log(toHex(num))
})

// Solution:
// 难点在于负数的处理。
// 对于负数，要取其补码，即反码加一。
// 因为是 32 位整数，而 JS 的数字是 64 多精度浮点数。
// 因此，让 负数 加上 0xffffffff 获得 反码，再加一。


// Submission Result: Accepted
