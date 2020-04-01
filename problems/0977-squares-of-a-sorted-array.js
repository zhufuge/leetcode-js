// 977. Squares of a Sorted Array
// Easy   72%


// Given an array of integers A sorted in non-decreasing order, return an array
// of the squares of each number, also in sorted non-decreasing order.

// Example 1:
// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Example 2:
// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Note:
//     1 <= A.length <= 10000
//     -10000 <= A[i] <= 10000
//     A is sorted in non-decreasing order.


/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = function(A) {
  const result = Array(A.length)
  let i = 0, j = A.length - 1
  for (let p = j; p >= 0; p--) {
    if (Math.abs(A[i]) > Math.abs(A[j])) {
      result[p] = A[i] * A[i]
      i++
    } else {
      result[p] = A[j] * A[j]
      j--
    }
  }
  return result
}

;[
  [-4,-1,0,3,10], // [0,1,9,16,100]
  [-7,-3,2,3,11], // [4,9,9,49,121]
].forEach((A) => {
  console.log(sortedSquares(A))
})

// Solution:
// 1. 直接算每个数的平方再排序
//  没有充分利用原数组已排序的条件
// TO(nlogn)

// 2. 充分利用原数组已排序的条件，从数组两边开始，
// 大的一边先排入结果数组末尾
// TO(n)

// Submission Result: Accepted