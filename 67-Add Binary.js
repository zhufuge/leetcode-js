// 67. Add Binary
// Easy 32% locked:false

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
  if (a === void 0 || b === void 0) return ''
  const n = a.length, m = b.length
  if (n === 0) return b
  if (m === 0) return a

  let res = ''
  for (let i = n - 1, j = m - 1, carry = 0;
       i >= 0 || j >= 0 || carry > 0; i--, j--) {
    const p = a[i] === '1' ? 1 : 0,
          q = b[j] === '1' ? 1 : 0,
          s = p + q + carry
    carry = Math.trunc(s / 2)
    res = s % 2 + res
  }

  return res
}

console.log(addBinary('0', '0'))
