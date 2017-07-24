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

  let y = Math.abs(x)
  let result = 0
  while (y !== 0) {
    result *= 10
    result += y % 10
    y = Math.floor(y / 10)
  }
  result *= (x < 0 ? -1 : 1)
  return isOverflow(result) ? 0 : result
}

console.log(reverse(-2147483648))
console.log(reverse(1534236469))
