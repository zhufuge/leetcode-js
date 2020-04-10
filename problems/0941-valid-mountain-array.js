// 941. Valid Mountain Array
// Easy   36%


// Given an array A of integers, return true if and only if it is a valid
// mountain array.
// Recall that A is a mountain array if and only if:
//     A.length >= 3
//     There exists some i with 0 < i < A.length - 1 such that:

//         A[0] < A[1] < ... A[i-1] < A[i]
//         A[i] > A[i+1] > ... > A[A.length - 1]


//           ^
//        /| |\
//      /| | | |\
//    /| | | | | |\
//   0 2 3 4 5 2 1 0

// Example 1:
// Input: [2,1]
// Output: false
// Example 2:
// Input: [3,5,5]
// Output: false
// Example 3:
// Input: [0,3,2,1]
// Output: true

// Note:
//     0 <= A.length <= 10000
//     0 <= A[i] <= 10000




/**
 * @param {number[]} A
 * @return {boolean}
 */
const validMountainArray = function(A) {
  const len = A.length
  if (len < 3) return false
  let p = 0, q = len - 1
  while (p !== q && A[p] < A[p + 1]) p++
  while (p !== q && A[q - 1] > A[q]) q--
  return p !== 0 && q !== len - 1 && p === q
}

;[
  [2,1],      // false
  [3,5,5],    // false
  [0,3,2,1],  // true
  [0,2,3,4,5,2,1,0], // true
  [0,2,3,3,5,2,1,0], // false
  [4,3,2,1,0],       // false
  [0,1,2,3,4],       // false
].forEach((A) => {
  console.log(validMountainArray(A))
})

// Solution:
// 想象两个人从山的两边开始爬山，只能向上爬，不能走平路和下坡。
// 两人各自爬到第一个小山峰时停下来
// 最后，若两人在同一个位置则返回 true
// 且两人中任何一个都必须走出一步。

// Submission Result: Accepted