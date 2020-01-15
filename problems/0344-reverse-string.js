// 344. Reverse String
// Easy   59%


// Write a function that takes a string as input and returns the string reversed.

// Example:
// Given s = "hello", return "olleh".


/**
 * @param {string} s
 * @return {string}
 */
const reverseString = function(s) {
  const n = s.length
  let result = ''
  for (let i = n - 1; i >= 0; i--) {
    result += s[i]
  }
  return result
}

;[
  'hello',                      // 'olleh'
].forEach(s => {
  console.log(reverseString(s))
})

// Solution:
// r[i] = s[n - 1 - i]

// Submission Result: Accepted
