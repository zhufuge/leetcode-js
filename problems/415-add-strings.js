// 415. Add Strings
// Easy   41%


// Given two non-negative integers num1 and num2 represented as string, return
// the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to
// integer directly.


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function(num1, num2) {
  let result = '', carry = 0, i = num1.length - 1, j = num2.length - 1
  while (i >= 0 || j >= 0) {
    const sum = ((num1[i--] || '0') - '0') + ((num2[j--] || '0') - '0') + carry
    result = (sum % 10) + result
    carry = Math.trunc(sum / 10)
  }
  return (carry || '') + result
}

;[
  ['0', '0'],                   // '0'
  ['123456789', '123456789'],   // '246913578'
  ['999999', '1'],              // '1000000'
].forEach(args => {
  console.log(addStrings(...args))
})

// Solution:
// 利用 - '0' 操作获得字符所代表的数字。
// carry 变量保存进位信息。
// 结果中，每位字符要用 %10 来获得个位上的数。

// Submission Result: Accepted
