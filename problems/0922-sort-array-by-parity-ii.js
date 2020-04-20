// 922. Sort Array By Parity II
// Easy   68%


// Given an array A of non-negative integers, half of the integers in A are odd,
// and half of the integers are even.
// Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is
// even, i is even.
// You may return any answer array that satisfies this condition.

// Example 1:
// Input: [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

// Note:
//     2 <= A.length <= 20000
//     A.length % 2 == 0
//     0 <= A[i] <= 1000



/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParityII = function(A) {
  let i = 0, j = 1, l = A.length
  while (i < l) {
    if (A[i] % 2 == 0) {
      i += 2
    } else if (A[j] % 2 == 1) {
      j += 2
    } else {
      const t = A[i]
      A[i] = A[j]
      A[j] = t
    }
  }
  return A
}

;[
  [4,2,5,7], // [4, 5, 2, 7]
  [0,0,0,0,1,1,1,1],
  [1,1,1,0,0,0],
  [0,1],
  [1,0],
  [1,0,1,0,1,0],
].forEach((A) => {
  console.log(sortArrayByParityII(A))
})

// Solution:
// 设置两个变量 i 和 j, 分别遍历偶数下标数和奇数下标数
// i 从 0 开始，j 从 1 开始
// 若 A[i] 为 偶数，跳到下一个偶数下标数
// 若 A[j] 为 奇数，跳到下一个奇数下标数
// 否则 A[i] 和 A[j] 都违法了规则，将其交换即可

// Submission Result: Accepted