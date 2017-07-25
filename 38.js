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
  let res = '1'
  for (let i = 1; i < n; i++) {
    let t = '', count = 0
    for (let j = 0, m = res.length; j < m; j++) {
      if (res[j] === res[j + 1]) count++
      else {
        t += (count + 1) + res[j]
        count = 0
      }
    }
    res = t
  }
  return res
}

for (let i = 0; i < 8; i++) {
  console.log(countAndSay(i))
}

