// 204. Count Primes
// Easy   26%


// Description:

// Count the number of prime numbers less than a non-negative number, n.

// Credits:Special thanks to @mithmatt for adding this problem and creating all
// test cases.


/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(n) {
  const primes = Array(n).fill(true)
  let count = 0
  for (let i = 2; i < n; i++) {
    if (primes[i]) {
      count++
      for (let j = 2; i * j < n; j++) {
        primes[i * j] = false
      }
    }
  }
  return count
}

;[
  0,                            // 0
  1,                            // 0
  2,                            // 0
  3,                            // 1
  4,                            // 2
  499979,                       // 41537
].forEach(n => {
  console.log(countPrimes(n))
})

// Solution:
// 利用排除法。
// 先创建一个长度为 n 的数组，若数的值为 true，说明该数为素数，
// 同时将该数的倍数全部变为 false。


// Submission Result: Accepted
