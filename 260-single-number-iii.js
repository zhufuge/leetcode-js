// 260. Single Number III
// Medium   52%

// Given an array of numbers nums, in which exactly two elements appear only once
// and all the other elements appear exactly twice. Find the two elements that
// appear only once.

// For example:
// Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].

// Note:

// The order of the result is not important. So in the above example, [5, 3] is
// also correct.
// Your algorithm should run in linear runtime complexity. Could you implement it
// using only constant space complexity?

// Credits:Special thanks to @jianchao.li.fighter for adding this problem and
// creating all test cases.


/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = function(nums) {
  let diff = 0
  for (let num of nums) diff ^= num
  diff &= -diff

  const result = [0, 0]
  for (let num of nums) {
    if (num & diff) result[1] ^= num
    else result[0] ^= num
  }

  return result
}

;[
  [1, 2, 1, 3, 2, 5],                // [3, 5]
].forEach(nums => {
  console.log(singleNumber(nums))
})

// Solution:
// 用 ^ 异或运算计算所有的元素可以获得所要找的两个数的异或值。
// 原理：
// a ^ a = 0
// a ^ 0 = a
// a ^ b ^ a = a ^ a ^ b = 0 ^ b = b

// 获得两个数的异或值，并不能知道是哪两个数。
// 因此需要将所有的数分为两组，每组分别计算各自组内所有的数的异或，
// 从而获得两个数。

// 如何分组？
// 用两个数的不同的哪一个比特位来分组。
// 例如，假设两个数分别为 3（011）和 5（101）。
// 两个数的倒数第二个和倒数第三个比特是不同的。
// 因此可以通过这个两个比特中的一个来进行分组。

// 一开始并不知道3 和 5，只知道它们的异或值，即 3^5=6（110）。
// 比特值为一的说明两个数在该位比特上有区别。
// 为了方便，通过 6(110)&-6(11...1010) = 2(10)

// a & (-a) 运算可以获得最后一个不同的比特位。

// 如2（10）表示倒数第二位不同。

// 第一遍，遍历获得两个数的异或值，根据这个可以获得两个数最后一个不同的比特位。
// 第二遍，通过不同的比特位是0还是1分为两组数，每组分别计算其所有数的异或值，
// 从而分别得到一个数作为答案。

// Submission Result: Accepted
