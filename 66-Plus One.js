// 66. Plus One
// Easy 38% locked:false

// Given a non-negative integer represented as a non-empty array of digits, plus
// one to the integer.

// You may assume the integer do not contain any leading zero, except the number
// 0 itself.

// The digits are stored such that the most significant digit is at the head of
// the list.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  if (digits === void 0 || digits === null || digits.length === 0) return digits

  const n = digits.length
  let i = n - 1
  while (digits[i] === 9) i--

  if (digits[i] !== undefined) {
    while (i < n) {
      digits[i] = (digits[i] + 1) % 10
      i++
    }
  } else {
    digits = new Array(n + 1).fill(0)
    digits[0] = 1
  }

  return digits
}

console.log(plusOne([8, 9, 9]))
