// 258. Add Digits
// Easy   51%


// Given a non-negative integer num, repeatedly add all its digits until the
// result has only one digit.

// For example:

// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only
// one digit, return it.

// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?

// Credits:Special thanks to @jianchao.li.fighter for adding this problem and
// creating all test cases.


/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
  return num % 9 || (num ? 9 : 0)
}

;[
  38,                           // 2
].forEach(num => {
  console.log(addDigits(num))
})

// Solution:
// 数字对9取余。
// 得到的数，若不为0就是答案。
// 若为0，则是9。
// 若数本身为0，则为0。

// 至于为什么是9，还是不明白。
// 是通过观察得到的。

// Submission Result: Accepted
