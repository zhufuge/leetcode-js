// 434. Number of Segments in a String
// Easy   36%


// Count the number of segments in a string, where a segment is defined to be a
// contiguous sequence of non-space characters.

// Please note that the string does not contain any non-printable characters.

// Example:

// Input: "Hello, my name is John"
// Output: 5


/**
 * @param {string} s
 * @return {number}
 */
const countSegments = function(s) {
  return s.split(' ').filter(w => w !== '').length
}

;[
  "Hello, my name is John",     // 5
].forEach(s => {
  console.log(countSegments(s))
})

// Solution:
// 可耻地使用了 split 函数。
// filter 去除多余的空格产生的空字符。

// Submission Result: Accepted
