// 507. Perfect Number
// Easy   33%


// We define the Perfect Number is a positive integer that is equal to the sum of
// all its positive divisors except itself.

// Now, given an integer n, write a function that returns true when it is a
// perfect number and false when it is not.

// Example:

// Input: 28
// Output: True
// Explanation: 28 = 1 + 2 + 4 + 7 + 14

// Note:
// The input number n will not exceed 100,000,000. (1e8)


/**
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = function(num) {
  let sum = 1
  for (let i = 2, n = Math.sqrt(num); i < n; i++) {
    if (num % i === 0) sum += i + (num / i)
  }
  return num !== 1 && sum === num
}

;[
  28,                           // true
  1,                            // false
].forEach(num => {
  console.log(checkPerfectNumber(num))
})

// Solution:
// 找出所有的因子。
// 因为不能包含本身，且 1 是确定的。
// 因此 i 从 2 开始找，一直到 sqrt(num)。
// 如果除数能被 num 整除则是因子，除得的结果也是因子。

// 为什么一直到 sqrt(num) 呢 ？
// 假设有两个因子分别为 a，b，且 a * b = num
// 每对因子中，假设 a <= b，那么 a * a <= a * b = num，
// a <= sqrt(num)

// Submission Result: Accepted
