// 852. Peak Index in a Mountain Array
// Easy   69%


// Let's call an array A a mountain if the following properties hold:
//  - A.length >= 3
//  - There exists some 0 < i < A.length - 1 such that
//    A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]

// Given an array that is definitely a mountain, return any i such that
//    A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

// Example 1:
// Input: [0,1,0]
// Output: 1

// Example 2:
// Input: [0,2,1,0]
// Output: 1

// Note:
//     3 <= A.length <= 10000
//     0 <= A[i] <= 10^6
//     A is a mountain, as defined above.


/**
 * @param {number[]} A
 * @return {number}
 */
const peakIndexInMountainArray = function(A) {
  function recursive(i, j) {
    const mid = (i + j) >> 1
    if (A[mid - 1] < A[mid] && A[mid] > A[mid + 1]) {
      return mid
    } else if (A[mid] < A[mid + 1]) {
      return recursive(mid + 1, j)
    } else {
      return recursive(i, mid - 1)
    }
  }
  return recursive(1, A.length - 1)
}

;[
  [0, 1, 0], // 1
  [0, 2, 1, 0], // 1
  [0,1,2,3,4,5,6,7,4,3,2], // 7
  [0,10,9,8,7,6,5,4,3,2,1,0], // 1
].forEach((A) => {
  console.log(peakIndexInMountainArray(A))
})

// Solution:
// 二分查找法。

// Submission Result: Accepted