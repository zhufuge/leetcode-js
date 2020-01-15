// 961. N-Repeated Element in Size 2N Array
// Easy   73%


// In a array A of size 2N, there are N+1 unique elements, and exactly one of
// these elements is repeated N times.
// Return the element repeated N times.

// Example 1:
// Input: [1,2,3,3]
// Output: 3
// Example 2:
// Input: [2,1,2,5,3,2]
// Output: 2
// Example 3:
// Input: [5,1,5,2,5,3,5,4]
// Output: 5

// Note:
//     4 <= A.length <= 10000
//     0 <= A[i] < 10000
//     A.length is even


/**
 * @param {number[]} A
 * @return {number}
 */
const repeatedNTimes = function(A) {
  let i = 0, j = 0
  while (i === j || A[i] !== A[j]) {
    i = (Math.random() * A.length) >> 0
    j = (Math.random() * A.length) >> 0
  }
  return A[i]
}

;[
  [1, 2, 3, 3], // 3
  [2, 1, 2, 5, 3, 2], // 2
  [5, 1, 5, 2, 5, 3, 5, 4], // 5
  [2, 1, 2, 5, 3, 2], // 2
].forEach((A) => {
  console.log(repeatedNTimes(A))
})

// Solution:
// 随机取两个数，若相同则为重复n遍的数。

// Submission Result: Accept