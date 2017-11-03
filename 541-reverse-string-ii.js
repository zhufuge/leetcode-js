// 541. Reverse String II
// Easy   43%


// Given a string and an integer k, you need to reverse the first k characters
// for every 2k characters counting from the start of the string. If there are
// less than k characters left, reverse all of them. If there are less than 2k
// but greater than or equal to k characters, then reverse the first k characters
// and left the other as original.

// Example:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"

// Restrictions:

//  The string consists of lower English letters only.
//  Length of the given string and k will in the range [1, 10000]


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = function(s, k) {
  const array = []
  for (let i = 0, n = s.length; i < n; i++) {
    if (i % k === 0) array.push([])
    array[array.length - 1].push(s[i])
  }
  for (let i = 0, n = array.length; i < n; i++ ) {
    if (i % 2 === 0) array[i] = array[i].reverse()
    array[i] = array[i].join('')
  }
  return array.join('')
}

;[
  ['abcdefg', 2],               // 'bacdfeg'
].forEach(args => {
  console.log(reverseStr(...args))
})


// Solution:
// 1. 先以 k 为长度分组，
// 2. 组号为偶数的组倒置。

// Submission Result: Accepted
