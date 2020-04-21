// 908. Smallest Range I
// Easy   65%


// Given an array A of integers, for each integer A[i] we may choose any x with
// -K <= x <= K, and add x to A[i].
// After this process, we have some array B.
// Return the smallest possible difference between the maximum value of B and the
// minimum value of B.

// Example 1:
// Input: A = [1], K = 0
// Output: 0
// Explanation: B = [1]
// Example 2:
// Input: A = [0,10], K = 2
// Output: 6
// Explanation: B = [2,8]
// Example 3:
// Input: A = [1,3,6], K = 3
// Output: 0
// Explanation: B = [3,3,3] or B = [4,4,4]

// Note:
//     1 <= A.length <= 10000
//     0 <= A[i] <= 10000
//     0 <= K <= 10000


/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const smallestRangeI = function(A, K) {
  let p = 0, q = 10000
  for (let a of A) {
    p = Math.max(p, a - K)
    q = Math.min(q, a + K)
  }
  return Math.max(p - q, 0)
}

;[
  [[1], 0], // 0
  [[0,10], 2], // 6
  [[1,3,6], 3], // 0
  [[3,1,6], 3], // 0
  [[0,100,300,400], 7], //
].forEach(([A, K]) => {
  console.log(smallestRangeI(A, K))
})

// Solution:
// 找出 a - K 中的最大值 p，和 a + K 中的最小值 q ，取 max(p - q, 0)

// 更好的方法
// 找到 A 中的最大值mx和最小值mn，取 max(mx - mn - 2 * K, 0)

// Submission Result: Accepted