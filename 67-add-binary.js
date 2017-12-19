// 67. Add Binary
// Easy   32%

// Given two binary strings, return their sum (also a binary string).

// For example,
// a = "11"
// b = "1"
// Return "100".

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  let res = '', i = a.length - 1, j = b.length - 1, carry = 0
  while (i >= 0 || j >= 0 || carry > 0) {
    carry += (i >= 0 ? a[i--] - '0' : 0)
    carry += (j >= 0 ? b[j--] - '0' : 0)
    res = carry % 2 + res
    carry >>= 1
  }
  return res
}

;[
  ['0', '0'],                   // '0'
  ['11', '1'],                  // '100'
].forEach(([a, b]) => {
  console.log(addBinary(a, b))
})

// Solution:
// 记录一个进位位。
// 从两个字符串的末尾开始相加，并加上进位位。

// Submission Result: Accepted
