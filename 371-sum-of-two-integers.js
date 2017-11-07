// 371. Sum of Two Integers
// Easy   51%


// Calculate the sum of two integers a and b, but you are not allowed to use the
// operator + and -.

// Example:
// Given a = 1 and b = 2, return 3.

// Credits:Special thanks to @fujiaozhu for adding this problem and creating all
// test cases.


/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = function(a, b) {
  do [a, b] = [a ^ b, (a & b) << 1]
  while (b)
  return a
}

;[
  [1, 2],                       // 3
  [3, 5],                       // 8
  [1, -2],                      // -1
].forEach(args => {
  console.log(getSum(...args))
})

// Solution:

// 只使用 ^(xor)异或运算符和 &(and)与运算符来计算。
//  1. a xor b 可以获得 a 与 b 相加时不进位的每位值。
//  2. a and b 可以获得 a 与 b 相加时会进位的位置，再用左移运算符 << 获得进位的值。
//  3. 得到的 不进位的值 加上 进位的值 正好时要求的值，但是不能使用加法运算。
//     因此让将 不进位的值 赋给 a ，进位的值 赋给 b，重复步骤1和2。
//     直到进位的值为0，即不再进位。这时两数的和正好为 a

// 以 a=5(101),b=3(011) 为例：
// ---第一轮----------------------
// 1. a xor b = 101 xor 011 = 110 (6)
// 2. (a and b) << 1 = (101 and 011) << 1 = 001 << 1 = 010 (2)
// 3. a=6(110),b=2(010),  b!=0
// ---第二轮----------------------
// 1. a xor b = 110 xor 010 = 100 (4)
// 2. (a and b) << 1 = (110 and 010) << 1 = 010 << 1 = 100 (4)
// 3. a=4(100),b=4(100), b!=0
// ---第三轮----------------------
// 1. a xor b = 100 xor 100 = 000(0)
// 2. (a and b) << 1 = (100 and 100) << 1 = 100 << 1 = 1000(8)
// 3. a=0(000),b=8(1000), b!=0
// ---第四轮----------------------
// 1. a xor b = 0000 xor 1000 = 1000(0)
// 2. (a and b) << 1 = (0000 or 1000) << 1 = 0000 << 1 = 0000(0)
// 3. a=8(1000),b=0(0000), b==0

// 即 5 + 3 = 8  ^_^

// Submission Result: Accepted
