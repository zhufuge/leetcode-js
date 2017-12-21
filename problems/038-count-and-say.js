// 38. Count and Say
// Easy   35%

// The count-and-say sequence is the sequence of integers with the first five
// terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221

// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n, generate the nth term of the count-and-say sequence.

// Note: Each term of the sequence of integers will be represented as a string.

// Example 1:

// Input: 1
// Output: "1"

// Example 2:

// Input: 4
// Output: "1211"


/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
  if (n < 1) return ''
  let result = '1'
  while (--n) {
    let t = '', first = -1
    for (let i = 0, m = result.length; i < m; i++) {
      if (result[i] !== result[i + 1]) {
        t += (i - first) + result[i]
        first = i
      }
    }
    result = t
  }
  return result
}

;[
  1,                            // '1'
  2,                            // '11'
  3,                            // '21'
  4,                            // '1211'
  5,                            // '111221'
].forEach(n => {
  console.log(countAndSay(n))
})

// Solution:
// 每次数一遍字符串。

// Submission Result: Accepted
