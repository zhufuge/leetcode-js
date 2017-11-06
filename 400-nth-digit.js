// 400. Nth Digit
// Easy   30%


// Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9,
// 10, 11, ...

// Note:
// n is positive and will fit within the range of a 32-bit signed integer (n <
// 2^31).

// Example 1:

// Input:
// 3

// Output:
// 3

// Example 2:

// Input:
// 11

// Output:
// 0

// Explanation:
// The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0,
// which is part of the number 10.


/**
 * @param {number} n
 * @return {number}
 */
const findNthDigit = function(n) {
  if (n === 0) return 0

  // i digits group height
  const height = i => 9 * Math.pow(10, i) * (i + 1)
  // in which digits group
  let i = -1, border = 1
  while (n >= border) border += height(++i)

  // nth-digit's layer is start at
  const base = Math.pow(10, i)

  // digit offset at base
  const offset = n - border + height(i)

  // nth digit is in this number
  const num = base + Math.trunc(offset / (i + 1))

  // the right-to-left position of nth digit in the number
  const pos = i ? i - offset % (i + 1) : 0
  return Math.trunc(num / Math.pow(10, pos)) % 10
}

;[
  0,                            // 0
  3,                            // 3

  10,                           // 1
  11,                           // 0

  12,                           // 1
  13,                           // 1

  14,                           // 1
  15,                           // 2

  18,                           // 1
  19,                           // 4

  1000,                         // 3
].forEach(n => {
  console.log(findNthDigit(n))
})

// Solution:

// 以下以 n = 1000 为例：

// 1. 将数字按其位数分层，如 1，6在一位数层，26，36在二位数层。
//    并计算第 i 层的高度为 i 位数的数量，如：
//      第零层为 1，
//      第一层为 9，
//      第二层为 180，
//      第 i 层为 （9 x 10^i x i)。

// 2. 判断第 n 个一位数数字在哪一层。
//    边界 border 小于 n, 就不断累加层次高度。
//    (1 + 9 + 180 = 190) < 1000 < (2890 = 1 + 9 + 180 + 2700)
//    因此第1000个在 第 3 层中。

// 3. 计算所在层次的位数，从该位数的最小值开始，并数偏移量。
//    第3层都是3位数的数字，因此从100开始，偏移量为 1000 - 190 = 810

// 4. 计算第 n 个位于那个数字内部。
//    从100开始数，第810个，都是3位数，所以是 100 + 810 / 3 = 370
//    第1000个 在 370 中。

// 5. 计算在数字中的第几位。
//    810 % 3 = 0

// 6. 得出结果。
//    3 7 0
//    ^
//    即 第1000个 是 3。

// Submission Result: Accepted
