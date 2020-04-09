// 944. Delete Columns to Make Sorted
// Easy   70%


// We are given an array A of N lowercase letter strings, all of the same length.
// Now, we may choose any set of deletion indices, and for each string, we delete
// all the characters in those indices.
// For example, if we have an array A = ["abcdef","uvwxyz"] and deletion indices
// {0, 2, 3}, then the final array after deletions is ["bef", "vyz"], and the
// remaining columns of A are ["b","v"], ["e","y"], and ["f","z"].  (Formally,
// the c-th column is [A[0][c], A[1][c], ..., A[A.length-1][c]].)
// Suppose we chose a set of deletion indices D such that after deletions, each
// remaining column in A is in non-decreasing sorted order.
// Return the minimum possible value of D.length.

// Example 1:
// Input: ["cba","daf","ghi"]
// Output: 1
// Explanation:
// After choosing D = {1}, each column ["c","d","g"] and ["a","f","i"] are in
// non-decreasing sorted order.
// If we chose D = {}, then a column ["b","a","h"] would not be in non-decreasing
// sorted order.
// Example 2:
// Input: ["a","b"]
// Output: 0
// Explanation: D = {}
// Example 3:
// Input: ["zyx","wvu","tsr"]
// Output: 3
// Explanation: D = {0, 1, 2}

// Note:
//     1 <= A.length <= 100
//     1 <= A[i].length <= 1000


/**
 * @param {string[]} A
 * @return {number}
 */
const minDeletionSize = function(A) {
  let result = 0, p = A.length, q = A[0].length
  for (let i = 0; i < q; i++) {
    for (let j = 1; j < p; j++) {
      if (A[j - 1][i] > A[j][i]) {
        result++
        break
      }
    }
  }
  return result
}

;[
  ['cba','daf','ghi'], // 1
  ['a','b'],           // 0
  ['zyx','wvu','tsr'], // 3
].forEach((A) => {
  console.log(minDeletionSize(A))
})

// Solution:
// 一列一列遍历，
// 若为上一个大于下一个，则 result + 1, 跳出循环，
// 遍历下一列。

// Submission Result: Accepted