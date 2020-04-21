// 905. Sort Array By Parity
// Easy   74%


// Given an array A of non-negative integers, return an array consisting of all
// the even elements of A, followed by all the odd elements of A.
// You may return any answer array that satisfies this condition.

// Example 1:
// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// Note:
//     1 <= A.length <= 5000
//     0 <= A[i] <= 5000


/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = function(A) {
  for (let i = 0, j = 0; j < A.length; j++) {
    if (A[j] % 2 === 0) {
      const t = A[i]
      A[i++] = A[j]
      A[j] = t
    }
  }
  return A
}

;[
  [3,1,2,4],
  [1,2,3,4,5,6,7],
].forEach((A) => {
  console.log(sortArrayByParity(A))
})

// Solution:
// 从数组两边开始遍历
// i 从头开始， j 从尾开始
// i 遇到偶数则跳过，j 遇到奇数则跳过
// 否则将 A[i] 与 A[j] 交换

// 更简洁的方法
// i 记录偶数部分的尾部
// j 遍历数组，找到偶数后，交换 A[i] 与 A[j]（将偶数添加到偶数部分尾部）

// Submission Result: Accepted