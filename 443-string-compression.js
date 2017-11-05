// 443. String Compression
// Easy   37%


// Given an array of characters, compress it in-place.

// The length after compression must always be smaller than or equal to the
// original array.

// Every element of the array should be a character (not int) of length 1.

// After you are done modifying the input array in-place, return the new length
// of the array.

// Follow up:
// Could you solve it using only O(1) extra space?

// Example 1:

// Input:
// ["a","a","b","b","c","c","c"]

// Output:
// Return 6, and the first 6 characters of the input array should be:
// ["a","2","b","2","c","3"]

// Explanation:
// "aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".

// Example 2:

// Input:
// ["a"]

// Output:
// Return 1, and the first 1 characters of the input array should be: ["a"]

// Explanation:
// Nothing is replaced.

// Example 3:

// Input:
// ["a","b","b","b","b","b","b","b","b","b","b","b","b"]

// Output:
// Return 4, and the first 4 characters of the input array should be:
// ["a","b","1","2"].

// Explanation:
// Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb"
// is replaced by "b12".
// Notice each digit has it's own entry in the array.

// Note:

// All characters have an ASCII value in [35, 126].
// 1 <= len(chars) <= 1000.


/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function(chars) {
  for (let i = 1, count = 1; i <= chars.length; i++) {
    if (chars[i] === chars[i - 1]) count++
    else {
      if (count > 1) {
        i -= (count - 1)
        chars.splice(i, count - 1, ...count.toString().split(''))
        i += Math.trunc(Math.log10(count)) + 1
      }
      count = 1
    }
  }

  return chars.length
}

;[
  ["a","a","b","b","c","c","c"], // 6 ["a","2","b","2","c","3"]
  ["a"],                         // 1 ["a"]
  ["a","b","b","b","b","b","b","b","b","b","b","b","b"], // 4 ["a","b","1","2"]
  ["a","b","b","b","c","c","c","a","a","c"], // 8 ["a","b","3","c","3","a","2","c"]
].forEach(chars => {
  console.log(compress(chars))
})

// Solution:
// 用变量 count 为连续相同的字符计数。
// 如果遇到一个不同的，则将计数转换成字符。

// Submission Result: Accepted
