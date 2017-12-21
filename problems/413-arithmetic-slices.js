// 413. Arithmetic Slices
// Medium   55%


// A sequence of number is called arithmetic if it consists of at least three
// elements and if the difference between any two consecutive elements is the
// same.

// For example, these are arithmetic sequence:

// 1, 3, 5, 7, 9
// 7, 7, 7, 7
// 3, -1, -5, -9

// The following sequence is not arithmetic.

// 1, 1, 2, 5, 7


// A zero-indexed array A consisting of N numbers is given. A slice of that
// array is any pair of integers (P, Q) such that 0 <= P < Q < N.

// A slice (P, Q) of array A is called arithmetic if the sequence:
// A[P], A[p + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means
// that P + 1 < Q.

// The function should return the number of arithmetic slices in the array A.

// Example:

// A = [1, 2, 3, 4]

// return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3,
// 4] itself.


/**
 * @param {number[]} A
 * @return {number}
 */
const numberOfArithmeticSlices = function(A) {
  const n = A.length
  let result = 0
  for (let i = 1; i < n; i++) {
    let count = 0
    while (A[i] - A[i - 1] === A[i + 1] - A[i]) {
      count++
      i++
    }
    result += ((count + 1) * count / 2)
  }
  return result
}

;[
  [1, 2, 3, 4],                 // 3
  [1, 2, 3, 4, 5, 6, 9, 12],    // 11
].forEach(A => {
  console.log(numberOfArithmeticSlices(A))
})

// Solution:
// 计算每个能够组成算术数列的最长子数组。
// 该最长子数组中能够找到 (1+a)*a/2 个算术数列子数组，其中 a为长度减2。
// 按照该思想实现该函数。

// Submission Result: Accepted
