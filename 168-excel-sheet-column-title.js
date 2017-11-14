// 168. Excel Sheet Column Title
// Easy   26%


// Given a positive integer, return its corresponding column title as appear in
// an Excel sheet.

// For example:

//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB

// Credits:Special thanks to @ifanchu for adding this problem and creating all
// test cases.


/**
 * @param {number} n
 * @return {string}
 */
const convertToTitle = function(n) {
  let result = ''
  while (n-- > 0) {
    result = String.fromCharCode((n % 26) + 65) + result
    n = Math.trunc(n / 26)
  }
  return result
}

;[
  28,                           // 'AB'
  26,                           // 'Z'
].forEach(n => {
  console.log(convertToTitle(n))
})

// Solution:
// 像是10进制转换成26进制一样。

// Submission Result: Accepted
