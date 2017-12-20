// 338. Counting Bits
// Medium   61%

// Given a non negative integer number num. For every numbers i in the range 0 ≤
// i ≤ num calculate the number of 1's in their binary representation and return
// them as an array.

// Example:
// For num = 5 you should return [0,1,1,2,1,2].

// Follow up:

// It is very easy to come up with a solution with run time O(n*sizeof(integer)).
// But can you do it in linear time O(n) /possibly in a single pass?
// Space complexity should be O(n).
// Can you do it like a boss? Do it without using any builtin function like
// __builtin_popcount  in c++ or in any other language.

// Credits:Special thanks to @ syedee  for adding this problem and creating all
// test cases.


/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = function(num) {
  if (num === 0) return [0]
  const result = [0], power = Math.floor(Math.log2(num)) + 1
  for (let i = 0; i < power; i++) {
    result.push(...result.map(v => v + 1))
  }
  return result.slice(0, num + 1)
}

;[
  5,                            // [0,1,1,2,1,2]
].forEach(num => {
  console.log(countBits(num))
})

// Solution:
// 按二进制位数来给每个数字分组，如下（0为0位数）
// 0       0
// ---------
// 1       1
// ---------
// 2      10
// 3      11
// ---------
// 4     100
// 5     101
// 6     110
// 7     111

// 从中可看出，每个组中的数都是其前面全部组的连接后的数加上一个1形成的
// 如 6=110 对应 2=10， 5=101 对应 1=01

// 因此每个数 i 的二进制中一的个数都可通过数 (i - （2^log(i) + 1)) 中一的个数再加上 1
// 获得。

// Submission Result: Accepted
