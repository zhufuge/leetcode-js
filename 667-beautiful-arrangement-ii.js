// 667. Beautiful Arrangement II
// Medium   51%


// Given two integers n and k, you need to construct a list which contains n
// different positive integers ranging from 1 to n and obeys the following
// requirement:

// Suppose this list is [a1, a2, a3, ... , an], then the list [|a1 - a2|, |a2 -
// a3|, |a3 - a4|, ... , |an-1 - an|] has exactly k distinct integers.

// If there are multiple answers, print any of them.

// Example 1:

// Input: n = 3, k = 1
// Output: [1, 2, 3]
// Explanation: The [1, 2, 3] has three different positive integers ranging from
// 1 to 3, and the [1, 1] has exactly 1 distinct integer: 1.

// Example 2:

// Input: n = 3, k = 2
// Output: [1, 3, 2]
// Explanation: The [1, 3, 2] has three different positive integers ranging from
// 1 to 3, and the [2, 1] has exactly 2 distinct integers: 1 and 2.

// Note:

// The n and k are in the range 1 <= k < n <= 10^4.


/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
const constructArray = function(n, k) {
  const result = [1]
  for (let i = 1; i < n; i++) {
    if (k > 0) {
      result[i] = result[i - 1] + ((i % 2 ? 1 : -1) * k--)
    } else {
      result[i] = i + 1
    }
  }
  return result
}

;[
  [3, 1],                       // [1, 2, 3]
  [3, 2],                       // [1, 3, 2]
  [16, 5],
  [16, 6],
].forEach(args => {
  console.log(constructArray(...args))
})

// Solution:
// 找规律
// 初始化第一个数为 1
// 构造第二个数到第 1+k 个数，每个数是前一个数的基础上加或减一个数p
// 若对于第i个数，其中i为奇数则加，若为偶数则减。
// 数p初始化为k，每次使用都减一。

// 第k+1个数后的数的值都为其下标加一。

// 主要是找规律吧，没有特别的思想。
// 有空可以用不完全归纳法证明一下其逻辑正确性。

// Submission Result: Accepted
