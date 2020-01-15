// 696. Count Binary Substrings
// Easy 51% locked:false



// Give a string s, count the number of non-empty (contiguous) substrings that
// have the same number of 0's and 1's, and all the 0's and all the 1's in these
// substrings are grouped consecutively.

// Substrings that occur multiple times are counted the number of times they
// occur.

// Example 1:

// Input: "00110011"
// Output: 6
// Explanation: There are 6 substrings that have equal number of consecutive 1's
// and 0's: "0011", "01", "1100", "10", "0011", and "01".
// Notice that some of these substrings repeat and are counted the number of
// times they occur.
// Also, "00110011" is not a valid substring because all the 0's (and 1's) are
// not grouped together.

// Example 2:

// Input: "10101"
// Output: 4
// Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal
// number of consecutive 1's and 0's.

// Note:

// s.length will be between 1 and 50,000.
// s will only consist of "0" or "1" characters.



/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = function(s) {
  const length = s.length
  let result = 0, ping = 0, pong = 0
  for (let i = 0; i < length; i++) {
    if (s[i] === '0') {
      pong = (i === 0 || s[i - 1] === '1') ? 1 : pong + 1
      result += (pong <= ping) ? 1 : 0
    } else {
      ping = (i === 0 || s[i - 1] === '0') ? 1 : ping + 1
      result += (ping <= pong) ? 1 : 0
    }
  }

  return result
}

console.log(countBinarySubstrings('00110011'))
console.log(countBinarySubstrings('10101'))
console.log(countBinarySubstrings('1'))

// Submission Result: Accepted
