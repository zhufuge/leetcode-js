// 1374. Generate a String With Characters That Have Odd Counts
// Easy   76%


// Given an integer n, return a string with n characters such that each character
// in such string occurs an odd number of times.
// The returned string must contain only lowercase English letters. If there are
// multiples valid strings, return any of them.

// Example 1:
// Input: n = 4
// Output: "pppz"
// Explanation: "pppz" is a valid string since the character 'p' occurs three
// times and the character 'z' occurs once. Note that there are many other valid
// strings such as "ohhh" and "love".
// Example 2:
// Input: n = 2
// Output: "xy"
// Explanation: "xy" is a valid string since the characters 'x' and 'y' occur
// once. Note that there are many other valid strings such as "ag" and "ur".
// Example 3:
// Input: n = 7
// Output: "holasss"

// Constraints:
//     1 <= n <= 500


/**
 * @param {number} n
 * @return {string}
 */
const generateTheString = function(n) {
  return  'a'.repeat(n  - 1) + (n % 2 ? 'a' : 'b')
}

;[
  4,
  2,
  7,
].forEach((n) => {
  console.log(generateTheString(n))
})

// Solution:
// 应为每个字符的个数都是奇数,
// 所以当 n 为偶数时，生成 n-1 个 'a'，1 个 'b' 即可,
// 当 n 为奇数时，生成 n 个 'a'.

// Submission Result: Accepted