// 171. Excel Sheet Column Number
// Easy   47%


// Related to question Excel Sheet Column Title

// Given a column title as appear in an Excel sheet, return its corresponding
// column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28

// Credits:Special thanks to @ts for adding this problem and creating all test
// cases.


/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = function(s) {
  const n = s.length
  let result = 0
  for (let i = 0; i < n; i++) {
    result = result * 26 +  s.charCodeAt(i) - 64
  }
  return result
}

;[
  'A',                          // 1
  'asd',                        // 23670
].forEach(s => {
  console.log(titleToNumber(s))
})

// Solution:
// 这像是26进制数转换为10进制一样。

// Submission Result: Accepted
