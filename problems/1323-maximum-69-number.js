// 1323. Maximum 69 Number
// Easy   78%


// Given a positive integer num consisting only of digits 6 and 9.
// Return the maximum number you can get by changing at most one digit (6 becomes
// 9, and 9 becomes 6).

// Example 1:
// Input: num = 9669
// Output: 9969
// Explanation:
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.
// Example 2:
// Input: num = 9996
// Output: 9999
// Explanation: Changing the last digit 6 to 9 results in the maximum number.
// Example 3:
// Input: num = 9999
// Output: 9999
// Explanation: It is better not to apply any change.

// Constraints:
//     1 <= num <= 10^4
//     num's digits are 6 or 9.


/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number  = function(num) {
  return parseInt(String(num).replace('6', '9'))
}

;[
  9669, // 9969
  9996, // 9999
  9999, // 9999
  96,
  6666,
  6969,
].forEach((num) => {
  console.log(maximum69Number(num))
})

// Solution:
// 使用 replace() 函数替换第一个 6

// Submission Result: Accepted