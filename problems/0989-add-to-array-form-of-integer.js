// 989. Add to Array-Form of Integer
// Easy   44%


// For a non-negative integer X, the array-form of X is an array of its digits in
// left to right order.  For example, if X = 1231, then the array form is
// [1,2,3,1].
// Given the array-form A of a non-negative integer X, return the array-form of
// the integer X+K.

// Example 1:
// Input: A = [1,2,0,0], K = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234
// Example 2:
// Input: A = [2,7,4], K = 181
// Output: [4,5,5]
// Explanation: 274 + 181 = 455
// Example 3:
// Input: A = [2,1,5], K = 806
// Output: [1,0,2,1]
// Explanation: 215 + 806 = 1021
// Example 4:
// Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
// Output: [1,0,0,0,0,0,0,0,0,0,0]
// Explanation: 9999999999 + 1 = 10000000000

// Note：
//     1 <= A.length <= 10000
//     0 <= A[i] <= 9
//     0 <= K <= 10000
//     If A.length > 1, then A[0] != 0


/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
const addToArrayForm = function(A, K) {
  const result = []
  for (let i = A.length - 1; i >= 0; i--) {
    result.unshift((A[i] + K) % 10)
    K = ((A[i] + K) / 10) >>> 0
  }
  while (K > 0) {
    result.unshift(K % 10)
    K = (K / 10) >>> 0
  }
  return result
}

;[
  [[1,2,0,0], 34], // [1,2,3,4]
  [[2,7,4], 181], // [4,5,5]
  [[2,1,5], 806], // [1,0,2,1]
  [[9,9,9,9,9,9,9,9,9,9], 1], // [1,0,0,0,0,0,0,0,0,0,0]
].forEach(([A, K]) => {
  console.log(addToArrayForm(A, K))
})

// Solution:
// 由于 A 的最大长度为 10000，所以不好使用内置加法
// 使用十进制个位数加法来计算，计算时可以将进位保存在 K 中

// Submission Result: Accepted