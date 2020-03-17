// 1005. Maximize Sum Of Array After K Negations
// Easy   51%


// Given an array A of integers, we must modify the array in the following way:
// we choose an i and replace A[i] with -A[i], and we repeat this process K times
// in total.  (We may choose the same index i multiple times.)
// Return the largest possible sum of the array after modifying it in this way.

// Example 1:
// Input: A = [4,2,3], K = 1
// Output: 5
// Explanation: Choose indices (1,) and A becomes [4,-2,3].
// Example 2:
// Input: A = [3,-1,0,2], K = 3
// Output: 6
// Explanation: Choose indices (1, 2, 2) and A becomes [3,1,0,2].
// Example 3:
// Input: A = [2,-3,-1,5,-4], K = 2
// Output: 13
// Explanation: Choose indices (1, 4) and A becomes [2,3,-1,5,4].

// Note:
//     1 <= A.length <= 10000
//     1 <= K <= 10000
//     -100 <= A[i] <= 100


/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const largestSumAfterKNegations = function(A, K) {
  A.sort((a, b) => a - b)
  for (let i = 0; i < A.length && A[i] < 0 && K > 0; i++, K--) {
    A[i] = -A[i]
  }
  let result = 0, min = 100
  for (let a of A) {
    result += a
    min = Math.min(min, a)
  }
  return result - (K % 2) * min * 2
}

const first = function(A, K) {
  const hash = {}
  for (let a of A) hash[a] = (hash[a] || 0) + 1
  
  let result = 0
  let i = -100
  for (; i < 0; i++) {
    for (let j = 0; j < hash[i]; j++) {
      result += i * (K-- > 0 ? -1 : 1)
    }
  }
  i = 0
  if (!hash[i] && K > 0 && K % 2) {
    for (; i <= 100; i++) {
      if (hash[i]) {
        result -= i
        hash[i]--
        break
      } else if (hash[-i]) {
        result -= i * 2
        break
      }
    }
  }
  for (; i <= 100; i++) {
    for (let j = 0; j < hash[i]; j++) result += i
  }
  return result
}

;[
  [[4,2,3], 1],         // 5
  [[3,-1,0,2], 3],      // 6
  [[2,-3,-1,5,-4], 2],  // 13
  [[-1], 2],            // -1
].forEach(([A, K]) => {
  console.log(largestSumAfterKNegations(A, K))
})

// Solution:
// 方法1
// 使用桶排序
// 1. 从小到大遍历所有负数
//    若 K > 0，则将 -a 添加到 result 中
//    若 K = 0，则将  a 添加到 result 中
// 2. 遍历完负数后，若 K > 0 && K % 2 == 0 && 数组中没有 0，则需要有一个绝对值最小数，
//    要变为其负数，添加到 result 中
// 3. 将剩余的数添加到 result 中

// 方法2
// 原生排序
// 1. 从小到大遍历所有负数
//    若 K > 0，则 A[i] = -A[i]
// 2. 计算数组中所有数的和 res
// 3. 找出数组中最小的数
// 4. 若 K % 2 == 1, 则 res 需要减去最小数的两倍
// TO(nlogn)-SO(1)

// Submission Result: Accepted