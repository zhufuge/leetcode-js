// 7. Reverse Integer
// Easy  24%

// Reverse digits of an integer.

// Example1: x = 123, return 321
// Example2: x = -123, return -321

// click to show spoilers.
//   Have you thought about this?

// Here are some good questions to ask before coding. Bonus points for you if
// you have already thought through this!

// If the integer's last digit is 0, what should the output be? ie, cases such
// as 10, 100.

// Did you notice that the reversed integer might overflow? Assume the input is
// a 32-bit integer, then the reverse of 1000000003 overflows. How should you
// handle such cases?

// For the purpose of this problem, assume that your function returns 0 when the
// reversed integer overflows.

// Note: The input is assumed to be a 32-bit signed integer. Your function
// should return 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */

const reverse = function(x) {
  const isOverflow = x => x > 0x7fffffff || -x > 0x7fffffff
  if (isOverflow(x)) return 0

  let y = Math.abs(x), result = 0
  while (y !== 0) {
    result = result * 10 + y % 10
    y = Math.floor(y / 10)
  }

  result *= x < 0 ? -1 : 1
  return isOverflow(result) ? 0 : result
}

;[
  123,                          // 321
  -123,                         // -321
  -2147483648,                  // 0
  1534236469,                   // 0
].forEach(x => {
  console.log(reverse(x))
})


// Solution:
// 因为假设数字是 32 位有符号整数，而答案可能会超出该范围，所以输入和输出都要检
// 查一遍是否溢出。
// 构造导致数，每次取得原数的最后一位作为新数的最后一位就好了。
// 像两个栈传递元素一样，只是用的是取模运算和乘除法运算来避免额外空间。

// Submission Result: Accepted