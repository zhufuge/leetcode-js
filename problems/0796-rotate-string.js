// 796. Rotate String
// Easy   50%


// We are given two strings, A and B.
// A shift on A consists of taking string A and moving the leftmost character to
// the rightmost position. For example, if A = 'abcde', then it will be 'bcdea'
// after one shift on A. Return True if and only if A can become B after some
// number of shifts on A.
// Example 1:
// Input: A = 'abcde', B = 'cdeab'
// Output: true
// Example 2:
// Input: A = 'abcde', B = 'abced'
// Output: false
// Note:
//     A and B will have length at most 100.


/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
const rotateString = function(A, B) {
  if (A === B) return true
  if (A.length !== B.length) return false
  let i = 0, j = 0, n = A.length
  while ((i = B.indexOf(A[0], j)) > 0) {
    if (B.substring(i, n) + B.substring(0, i) === A) return true
    j = i + 1
  }
  return false
}

const amazing = function(A, B) {
  return A.length === B.length && (A + A).includes(B)
}

;[
  ['abcde', 'cdeab'], // true
  ['abcde', 'abced'], // false
  ['abcde', 'abcde'], // true
  ['abcde', 'abcd'],  // false
  ['abcabe', 'beabca'], // true
  ['abcabe', 'bcabea'], // true
].forEach(([A, B]) => {
  console.log(rotateString(A, B))
  console.log(rotateString(A, B))
})

// Solution:
// 平凡的方法
// 找到 A 的第一个字符的在 B 中的位置，找到后重新拆分并拼接 B 字符串，并判断新字符串是否与 A
// 相同，相同返回 true，不同则寻找下一个出现的位置进行判断，直到 B 中再无该字符。

// 令人赞叹的方法!!!
// 判断 A+A 中是否包含有 B

// Submission Result: Accepted