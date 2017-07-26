// Given two non-negative integers num1 and num2 represented as strings, return
// the product of num1 and num2.

// Note:

// 1. The length of both num1 and num2 is < 110.
// 2. Both num1 and num2 contains only digits 0-9.
// 3. Both num1 and num2 does not contain any leading zero.
// 4. You must not use any built-in BigInteger library or convert the inputs to
// integer directly.


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function(num1, num2) {
  const n = num1.length, m = num2.length
  const res = new Array(m + n).fill(0)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      res[i + j + 1] += num1[i] * num2[j]
      for (let k = i + j + 1; k > 0; k--) {
        const carry = Math.trunc(res[k] / 10)
        if (carry <= 0) break
        res[k] = res[k] % 10
        res[k - 1] += carry
      }
    }
  }

  while (res[0] === 0 && res.length > 1) res.shift()
  return res.join('')
}

console.log(multiply('13', '17'))
console.log(multiply('98', '98'))
console.log(multiply('0', '0'))

const easiest = function(num1, num2) {
  const n = num1.length, m = num2.length
  const pos = new Array(m + n).fill(0)

  for(let i = n - 1; i >= 0; i--) {
    for(let j = m - 1; j >= 0; j--) {
      const mul = (num1[i] - '0') * (num2[j] - '0')
      const p1 = i + j, p2 = i + j + 1
      const sum = mul + pos[p2]

      pos[p1] += Math.trunc(sum / 10)
      pos[p2] = sum % 10
    }
  }

  while (pos[0] === 0 && pos.length > 1) pos.shift()
  return pos.join('')
}

console.log(easiest('13', '17'))
console.log(easiest('98', '98'))
