// 12. Integer to Roman
// Medium   45%

// Given an integer, convert it to a roman numeral.

// Input is guaranteed to be within the range from 1 to 3999.

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
  const M = ['', 'M', 'MM', 'MMM'],
        C = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        X = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        I = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  return M[Math.trunc(num / 1000)] +
    C[Math.trunc((num % 1000) / 100)] +
    X[Math.trunc((num % 100) / 10)] +
    I[num % 10]
}

;[
  1,
  3,
  4,
  5,
  6,
  9,
  10,
  14,
  15,
  19,
  78,
  99,
  532,
  1239,
  3999,
].forEach(num => {
  console.log(num, intToRoman(num))
})

// Solution:
// 符号意义：
// I 1
// V 5
// X 10
// L 50
// C 100
// D 500
// M 1000

// 一个符号最多连续重复3遍，即表示1~3倍，四倍需要用两个符号（即该符号和下一个符
// 号），如 4 = IV, 9 = IX 等。

// 因为表示的数有限，且每个10进制位的符号固定，因此直接枚举出来。

// Submission Result: Accepted
