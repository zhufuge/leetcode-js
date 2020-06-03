// 1399. Count Largest Group
// Easy   64%


// Given an integer n. Each number from 1 to n is grouped according to the sum of
// its digits.
// Return how many groups have the largest size.

// Example 1:
// Input: n = 13
// Output: 4
// Explanation: There are 9 groups in total, they are grouped according sum of
// its digits of numbers from 1 to 13:
// [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9]. There are 4 groups
// with largest size.
// Example 2:
// Input: n = 2
// Output: 2
// Explanation: There are 2 groups [1], [2] of size 1.
// Example 3:
// Input: n = 15
// Output: 6
// Example 4:
// Input: n = 24
// Output: 5

// Constraints:
//     1 <= n <= 10^4


/**
 * @param {number} n
 * @return {number}
 */
const countLargestGroup = function(n) {
  const counts = []
  for (let i = 1; i <= n; i++) {
    let j = i, k = 0
    while (j > 0) {
      k += j % 10
      j = (j / 10) >>> 0
    }
    counts[k-1] = (counts[k-1] || 0) + 1
  }
  let max = Math.max(...counts)
  let res = 0
  for (let c of counts) if (c === max) res++
  return res
}

;[
  13, // 4
  2,  // 2
  15, // 6
  24, // 5
].forEach((n) => {
  console.log(countLargestGroup(n))
})

// Solution:
//  1  2  3  4  5  6  7  8  9  [10] [11]
// 10 11 12 13 14 15 16 17 18   19
//    20 21 22 23 24 25 26 27   28   29
//       30 31 32 33 34 35 36
//          40 ...
//             50 ...
//                60 ...
//                   70 ...
//                      80 ...
//                         90 ...
// 100 ...

// 本想找一下规律的，枚举了一下，好像有点复杂，就放弃了。

// 用一般思维方法
// 先用数组计算并保存 1 到 n 的数字和
// 再选出最大值 （其实遍历 1 到 n 时可以计算出来）
// 最后计算最大值的个数

// Submission Result: Accepted