// 8. String to Integer (atoi)
// Medium  13%

// Implement atoi to convert a string to an integer.

// Hint: Carefully consider all possible input cases. If you want a challenge,
// please do not see below and ask yourself what are the possible input cases.

// Notes: It is intended for this problem to be specified vaguely (ie, no given
// input specs). You are responsible to gather all the input requirements up
// front.

// Update (2015-02-10): The signature of the C++ function had been updated. If
// you still see your function signature accepts a const char * argument, please
// click the reload button to reset your code definition.

// spoilers alert... click to show requirements for atoi. Requirements for atoi:

// The function first discards as many whitespace characters as necessary until
// the first non-whitespace character is found. Then, starting from this
// character, takes an optional initial plus or minus sign followed by as many
// numerical digits as possible, and interprets them as a numerical value.

// The string can contain additional characters after those that form the
// integral number, which are ignored and have no effect on the behavior of this
// function.

// If the first sequence of non-whitespace characters in str is not a valid
// integral number, or if no such sequence exists because either str is empty or
// it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned. If the
// correct value is out of the range of representable values, INT_MAX
// (2147483647) or INT_MIN (-2147483648) is returned.

/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function(str) {
  const n = str.length

  let i = 0, result = 0
  while (str[i] === ' ') i++

  let sign = str[i] === '-' ? -1 : 1
  if (str[i] === '-' || str[i] === '+') i++

  while (i < n) {
    const m = str[i] - 0
    if (Number.isNaN(m) || str[i] === ' ') break
    result = result * 10 + m
    i++
  }

  result *= sign

  if (result >= 2147483647) return 2147483647
  if (result <= -2147483648) return -2147483648
  return result
}

;[
  '',                           // 0
  '       ',                    // 0
  '-',                          // 0
  '+',                          // 0

  '123',                        // 123
  '-123',                       // -123
  '+123',                       // 123
  '-0001230',                   // -1230

  '11.2',                       // 11
  '-123.234',                   // -123

  '  -123',                     // -123
  '  -12 3',                    // -12

  '-12a42',                     //-12
].forEach(str => {
  console.log(myAtoi(str))
})

// Solution:
// 根据提示，首先需要考虑所有可能的输入情况。
// - 空字符串，'+'和'-'，空格
// - 前导空格
// - 前导0
// - 正负整数字符串
// - 正负浮点数字符串
// - 非数字字符串
// - 中间非数字字符

// 步骤
// 1. 处理前导空格，如果有的话
// 2. 处理符号，如果有符号的话
// 3. 处理有效数字字符，直到遇到非数字字符
// 4. 添加符号，并判断是否溢出
// 5. 返回数字

// Submission Result: Accepted
