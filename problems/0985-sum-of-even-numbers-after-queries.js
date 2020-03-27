// 985. Sum of Even Numbers After Queries
// Easy   62%


// We have an array A of integers, and an array queries of queries.
// For the i-th query val = queries[i][0], index = queries[i][1], we add val to
// A[index].  Then, the answer to the i-th query is the sum of the even values of
// A.
// (Here, the given index = queries[i][1] is a 0-based index, and each query
// permanently modifies the array A.)
// Return the answer to all queries.  Your answer array should have answer[i] as
// the answer to the i-th query.

// Example 1:
// Input: A = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]
// Output: [8,6,2,4]
// Explanation:
// At the beginning, the array is [1,2,3,4].
// After adding 1 to A[0], the array is [2,2,3,4], and the sum of even values is
// 2 + 2 + 4 = 8.
// After adding -3 to A[1], the array is [2,-1,3,4], and the sum of even values
// is 2 + 4 = 6.
// After adding -4 to A[0], the array is [-2,-1,3,4], and the sum of even values
// is -2 + 4 = 2.
// After adding 2 to A[3], the array is [-2,-1,3,6], and the sum of even values
// is -2 + 6 = 4.

// Note:
//     1 <= A.length <= 10000
//     -10000 <= A[i] <= 10000
//     1 <= queries.length <= 10000
//     -10000 <= queries[i][0] <= 10000
//     0 <= queries[i][1] < A.length


/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
const sumEvenAfterQueries = function(A, queries) {
  const result = []
  let sum = A.reduce((s, v) => s += v % 2 ? 0 : v, 0)
  for (let q of queries) {
    if (A[q[1]] % 2 === 0) sum -= A[q[1]]
    A[q[1]] += q[0]
    if (A[q[1]] % 2 === 0) sum += A[q[1]]
    result.push(sum)
  }
  return result
}

;[
  [[1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]], // [8, 6, 2, 4]
].forEach(([A, queries]) => {
  console.log(sumEvenAfterQueries(A, queries))
})

// Solution:
// 开始时先算所有偶数的和。
// 在每次改变数时，有以下 4 种情况：
// 1. 偶变偶，sum += q[0]
// 2. 偶变奇，sum -= A[q[1]]
// 3. 奇变偶，sum += A[q[1]] + q[0]
// 4. 奇变奇，sum 不变

// 更好的编程方式
// 在数值变前和变后，判断数的奇偶，并进行操作
// 1. 变前为偶数则 sum 减去该数，奇数不做处理
// 2. 改变数值
// 3. 变后为偶数则 sum 加上该数，奇数不做处理

// Submission Result: Accepted