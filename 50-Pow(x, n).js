// 50. Pow(x, n)
// Medium 26% locked:false

// Implement pow(x, n).


/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function(x, n) {
  const m = Math.abs(n)
  if (m === 0) return 1
  if (m === 1) return n > 0 ? x : 1 / x
  if (m % 2 === 0) return myPow(x * x, n / 2)
  return myPow(x * x, Math.trunc(n / 2)) * (n > 0 ? x : 1 / x)
}

const a = 34.00515,
      b = -3
console.log(myPow(a, b), Math.pow(a, b));
