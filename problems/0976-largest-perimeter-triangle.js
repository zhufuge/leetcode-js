// 976. Largest Perimeter Triangle
// Easy   57%


// Given an array A of positive lengths, return the largest perimeter of a
// triangle with non-zero area, formed from 3 of these lengths.
// If it is impossible to form any triangle of non-zero area, return 0.

// Example 1:
// Input: [2,1,2]
// Output: 5
// Example 2:
// Input: [1,2,1]
// Output: 0
// Example 3:
// Input: [3,2,3,4]
// Output: 10
// Example 4:
// Input: [3,6,2,3]
// Output: 8

// Note:
//     3 <= A.length <= 10000
//     1 <= A[i] <= 10^6


/**
 * @param {number[]} A
 * @return {number}
 */
const largestPerimeter = function(A) {
  A.sort((a, b) => a - b)
  for (let i = A.length - 1; i > 1; i--) {
    if (A[i] < A[i - 1] + A[i - 2]) return A[i] + A[i - 1] + A[i - 2]
  }
  return 0
}

;[
  [2,1,2], // 5
  [1,2,1], // 0
  [3,2,3,4],// 10
  [3,6,2,3], // 8
].forEach((A) => {
  console.log(largestPerimeter(A))
})

// Solution:
// 先排序
// 每次取最大的相连的三个数，看是否能组成三角形，若能则返回
// 否则判断下一组最大的相连的
// TO(nlogn)

// 为什么每次只判断最大三个数？
// 因为要用最大值为最大边，若第二大及第三大加起来都没办法组成三角形，那最大边和其他值更不可能了
// 所以这个最大值就可以排除在外了


// Submission Result: Accepted