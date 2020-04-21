// 896. Monotonic Array
// Easy   57%


// An array is monotonic if it is either monotone increasing or monotone
// decreasing.
// An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A
// is monotone decreasing if for all i <= j, A[i] >= A[j].
// Return true if and only if the given array A is monotonic.

// Example 1:
// Input: [1,2,2,3]
// Output: true
// Example 2:
// Input: [6,5,4,4]
// Output: true
// Example 3:
// Input: [1,3,2]
// Output: false
// Example 4:
// Input: [1,2,4,5]
// Output: true
// Example 5:
// Input: [1,1,1]
// Output: true

// Note:
//     1 <= A.length <= 50000
//     -100000 <= A[i] <= 100000


/**
 * @param {number[]} A
 * @return {boolean}
 */
const isMonotonic = function(A) {
  const l = A.length
  if (l === 1) return true
  const fn = A[0] > A[l - 1] ? ((a, b) => a - b >= 0) : ((a, b) => b - a >= 0)
  for (let i = 1; i < l; i++) {
    if (!fn(A[i - 1], A[i])) return false
  }
  return true
}

const batter = function(A) {
  let inc = true, dec = true, l = A.length
  for (let i = 1; i < l; i++) {
    if (A[i - 1] > A[i]) inc = false
    if (A[i - 1] < A[i]) dec = false
  }
  return inc || dec
}

;[
  [1,2,2,3], // true
  [6,5,4,4], // true
  [1,3,2],   // false
  [1,2,4,5], // true
  [1,1,1],   // true
].forEach((A) => {
  console.log(isMonotonic(A))
  console.log(batter(A))
})

// Solution:
// 根据首尾数的大小关系来确定比较函数fn
// 若全部通过则返回 true 否则 false

// 更好的方法
// 遍历数组的时候，使用 inc 和 dec 记录数组是否为非递减和非递增的
// 若两个都不是，则返回false

// Submission Result: Accepted