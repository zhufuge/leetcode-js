// 526. Beautiful Arrangement
// Medium   54%


// Suppose you have N integers from 1 to N. We define a beautiful arrangement as
// an used that is constructed by these N numbers successfully if one of the
// following is true for the ith position (1 <= i <= N) in this used:

// 1. The number at the ith position is divisible by i.
// 2. i is divisible by the number at the ith position.

// Now given N, how many beautiful arrangements can you construct?

// Example 1:

// Input: 2
// Output: 2
// Explanation:

// The first beautiful arrangement is [1, 2]:
// Number at the 1st position (i=1) is 1, and 1 is divisible by i (i=1).
// Number at the 2nd position (i=2) is 2, and 2 is divisible by i (i=2).

// The second beautiful arrangement is [2, 1]:
// Number at the 1st position (i=1) is 2, and 2 is divisible by i (i=1).
// Number at the 2nd position (i=2) is 1, and i (i=2) is divisible by 1.

// Note: N is a positive integer and will not exceed 15.


/**
 * @param {number} N
 * @return {number}
 */
const countArrangement = function(N) {
  function iter(i, used) {
    if (i === N + 1) return 1
    let result = 0
    for (let j = 1; j <= N; j++) {
      if (!used[j] && (i % j === 0 || j % i === 0)) {
        used[j] = true
        result += iter(i + 1, used)
        used[j] = false
      }
    }
    return result
  }
  return iter(1, [])
}

;[
  1,                            // 1
  2,                            // 2
  3,                            // 3
  13,                           // 4237
  14,                           // 10680
].forEach(N => {
  console.log(countArrangement(N))
})

// Solution:
// 用一个数组记录某个数是否被使用过。
// 使用递归迭代，
// 找出每个位置可以放置的数。

// Submission Result: Accepted
