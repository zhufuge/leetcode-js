// 969. Pancake Sorting
// Medium   67%


// Given an array A, we can perform a pancake flip: We choose some positive
// integer k <= A.length, then reverse the order of the first k elements of A.
// We want to perform zero or more pancake flips (doing them one after another in
// succession) to sort the array A.
// Return the k-values corresponding to a sequence of pancake flips that sort A.
// Any valid answer that sorts the array within 10 * A.length flips will be
// judged as correct.

// Example 1:
// Input: [3,2,4,1]
// Output: [4,2,4,3]
// Explanation:
// We perform 4 pancake flips, with k values 4, 2, 4, and 3.
// Starting state: A = [3, 2, 4, 1]
// After 1st flip (k=4): A = [1, 4, 2, 3]
// After 2nd flip (k=2): A = [4, 1, 2, 3]
// After 3rd flip (k=4): A = [3, 2, 1, 4]
// After 4th flip (k=3): A = [1, 2, 3, 4], which is sorted.
// Example 2:
// Input: [1,2,3]
// Output: []
// Explanation: The input is already sorted, so there is no need to flip
// anything.
// Note that other answers, such as [3, 3], would also be accepted.

// Note:
//     1 <= A.length <= 100
//     A[i] is a permutation of [1, 2, ..., A.length]


/**
 * @param {number[]} A
 * @return {number[]}
 */
const pancakeSort = function(A) {
  const res = []

  function flip(k) {
    for (let i = 0, j = k - 1; i < j; i++, j--) {
      [A[i], A[j]] = [A[j], A[i]]
    }
  }

  for (let x = A.length, i; x > 1; x--) {
    for (i = 0; A[i] !== x; i++) {}
    flip(i + 1)
    res.push(i + 1)
    flip(x)
    res.push(x)
  }
  return res
}

;[
  [3,2,4,1],
  [1,2,3],
].forEach((A) => {
  console.log(pancakeSort(A))
})

// Solution:
// 找到 数组中最大的数的位置 i, 翻转前 i+1 个数，将最大的数转到了第一位，
// 再翻转整个数组，使得最大的数在数组的最后面。
// 完成后，再对未排序的数进行相同的操作。直到整个数组排好序。

// Submission Result: Accepted