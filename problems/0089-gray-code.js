// 89. Gray Code
// Medium   41%

// The gray code is a binary numeral system where two successive values differ
// in only one bit.

// Given a non-negative integer n representing the total number of bits in the
// code, print the sequence of gray code. A gray code sequence must begin with
// 0.

// For example, given n = 2, return [0,1,3,2]. Its gray code sequence is:

// 00 - 0
// 01 - 1
// 11 - 3
// 10 - 2

// Note: For a given n, a gray code sequence is not uniquely defined.

// For example, [0,2,3,1] is also a valid gray code sequence according to the
// above definition.

// For now, the judge is able to judge based on one instance of gray code
// sequence. Sorry about that.

/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode = function(n) {
  if (n < 0) return []

  const res = [0]
  for (let i = 0; i < n; i++) {
    res.push(...[...res].reverse().map(v => v + (1 << i)))
  }

  return res
}

;[
  4,
  2,
  0,
].forEach(n => {
  console.log(grayCode(n))
})

// Solution:

// 0 --(逆序)--> 0 --(+1)--> 1 --(插入原数组末尾)-->

// 0 1 --(逆序)--> 1 0 --(+10)--> 11 10  --(插入原数组末尾)-->

// 00 01 11 10 --(逆序)--> 10 11 01 00 --(+100)--> 110 111 101 100 --(插入原数组末尾)-->

// 1. 取原数组 a 的逆序, b
// 2. b 中每个数值加上 2^(log(b.length) + 1)
// 3. b 加到 a 的末尾

// Submission Result: Accepted
