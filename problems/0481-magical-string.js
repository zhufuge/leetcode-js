// 481. Magical String
// Medium   46%


// A magical string S consists of only '1' and '2' and obeys the following rules:

// The string S is magical because concatenating the number of contiguous
// occurrences of characters '1' and '2' generates the string S itself.

// The first few elements of string S is the following:
// S = "1221121221221121122……"
// If we group the consecutive '1's and '2's in S, it will be:
// 1   22  11  2  1  22  1  22  11  2  11  22 ......
// and the occurrences of '1's or '2's in each group are:
// 1   2   2   1  1  2   1  2   2   1  2   2  ......

// You can see that the occurrence sequence above is the S itself.
// Given an integer N as input, return the number of '1's in the first N number
// in the magical string S.

// Note:
// N will not exceed 100,000.

// Example 1:
// Input: 6
// Output: 3
// Explanation: The first 6 elements of magical string S is "12211" and it
// contains three 1's, so return 3.


/**
 * @param {number} n
 * @return {number}
 */
const magicalString = function(n) {
  if (n <= 0) return 0
  const s = [1]
  for (let i = 0; s.length < n; i++) {
    if (s[i] === 2) {
      s.push(s[s.length - 1])
    }
    if (s.length < n) {
      s.push(i % 2 ? 1 : 2)
    }
  }
  return s.filter(v => v < 2).length
}

;[
  1,  // 1
  2,  // 1
  3,  // 1
  4,  // 2
  5,  // 3
  6,  // 3
  19, // 9
].forEach((n) => {
  console.log(magicalString(n))
})

// Solution:
// 文字图解释（其中两个 s 为同一个序列）：
// s = 1   2 2  1 1  2  1  2 2  1  2 2  1 1  2  1 1  2 2 ......
//     |   |/   |/   |  |  |/   |  |/   |/   |  |/   |/
// s = 1   2    2    1  1  2    1  2    2    1  2    2   ......

// 从中可以看出，连续相同的数字成为一组：
//  - 每组的数字是 1 和 2 交替出现的，即奇数组为 2 的组合，偶数组为 1 的组合，
//  - 每组的数字出现的次数，是非分组序列的同下标（组数与数组下标相同）的数，
//    即 s[i] = 1 时，添加一个数，s[i] = 2 时，添加两个数。


// 实现中，使用了一些小技巧：超前添加。即使用 s[i] 来完成 s[i + 1] 对应的组数的
// 第一个数。具体为：
//  - s[i] = 2时，添加一个与末尾相同的数，然后再添加一个交替数
//  - s[i] = 1时，添加一个交替数。


// Submission Result: Accepted