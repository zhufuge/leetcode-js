// 1013. Partition Array Into Three Parts With Equal Sum
// Easy   57%


// Given an array A of integers, return true if and only if we can partition the
// array into three non-empty parts with equal sums.
// Formally, we can partition the array if we can find indexes i+1 < j with (A[0]
// + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... +
// A[A.length - 1])

// Example 1:
// Input: A = [0,2,1,-6,6,-7,9,1,2,0,1]
// Output: true
// Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
// Example 2:
// Input: A = [0,2,1,-6,6,7,9,-1,2,0,1]
// Output: false
// Example 3:
// Input: A = [3,3,6,5,-2,2,5,1,-9,4]
// Output: true
// Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4

// Constraints:
//     3 <= A.length <= 50000
//     -10^4 <= A[i] <= 10^4


/**
 * @param {number[]} A
 * @return {boolean}
 */
const canThreePartsEqualSum = function(A) {
  let sum = 0
  for (let a of A) sum += a
  if (sum % 3 !== 0) return false

  let part = 0, partSum = sum / 3
  for (let i = 0; i < A.length; i++) {
    partSum -= A[i]
    if (partSum === 0) {
      partSum = sum / 3
      part++
    }
  }
  return part > 2
}

;[
  [0,2,1,-6,6,-7,9,1,2,0,1],     // true
  [0,2,1,-6,6,7,9,-1,2,0,1],     // false
  [3,3,6,5,-2,2,5,1,-9,4],       // true
  [10,-10,10,-10,10,-10,10,-10], // true
].forEach((A) => {
  console.log(canThreePartsEqualSum(A))
})

// Solution:
// 因为要分为相等的3个部分，
// 所以所有数的和 sum 必须为3的倍数。
// 若 sum % 3 不为 0，则返回 false
// 遍历一遍数组
// 若前n个数的和为 sum / 3，这 n 个数就为一个部分
// 然后找下一个部分
// 只要找到两个部分即可，因为剩余的就是最后一个部分

// Submission Result: Accepted