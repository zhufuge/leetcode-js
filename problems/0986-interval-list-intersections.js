// 986. Interval List Intersections
// Medium   67%


// Given two lists of closed intervals, each list of intervals is pairwise
// disjoint and in sorted order.
// Return the intersection of these two interval lists.
// (Formally, a closed interval [a, b] (with a <= b) denotes the set of real
// numbers x with a <= x <= b.  The intersection of two closed intervals is a set
// of real numbers that is either empty, or can be represented as a closed
// interval.  For example, the intersection of [1, 3] and [2, 4] is [2, 3].)

// Example 1:
//
//   A - -       - - - - -
//   B   - - - -       - - - -
// ans   -      |      - -
//    0   2   4   6   8   10  12

// Input: A = [[0,2],[5,10],[13,23],[24,25]], B = [[1,5],[8,12],[15,24],[25,26]]
// Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

// Note:
//     0 <= A.length < 1000
//     0 <= B.length < 1000
//     0 <= A[i].start, A[i].end, B[i].start, B[i].end < 10^9


/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
const intervalIntersection = function(A, B) {
  const res = []
  const m = A.length, n = B.length
  let i = j = 0
  while (i < m && j < n) {
    const a = A[i], b = B[j]
    if (a[1] >= b[0] && a[0] <= b[1]) {
      if (a[0] < b[0]){
        if (a[1] < b[1]) res.push([b[0], a[1]])
        else res.push([...b])
      } else {
        if (a[1] < b[1]) res.push([...a])
        else res.push([a[0], b[1]])
      }
    }

    if (a[1] < b[1]) i++
    else j++
  }
  return res
}

const aMoreConciseMethod = function(A, B) {
  const res = []
  for (let i = j = 0; i < A.length && j < B.length;) {
    if (A[i][1] < B[j][0]) i++
    else if (A[i][0] > B[j][1]) j++
    else {
      res.push([Math.max(A[i][0], B[j][0]), Math.min(A[i][1], B[j][1])])
      if (A[i][1] < B[j][1]) i++
      else j++
    }
  }
  return res
}

;[
  [[[0,2],[5,10],[13,23],[24,25]], [[1,5],[8,12],[15,24],[25,26]]],
].forEach(([A, B]) => {
  console.log(intervalIntersection(A, B))
  console.log(aMoreConciseMethod(A, B))
})

// Solution:
// 同时遍历 A 和 B
// 对于 A 和 B 中的任意两段直线，它们的关系有以下几种：
// a = A[i], b = B[j]

// 1）无交集有两种情况
//  1.1） a[1] < b[0]
//      <---a--->
//                   <---b--->
//  此时 i++
//  1.2） a[0] > b[1]
//                     <---a--->
//       <---b--->
//  此时 j++

// 2) 有交集 a[1] >= b[0]  &&  a[0] <= b[1]
//  2.1) a[0] < b[0] && a[1] < b[1]
//       <---a--->
//              <---b--->
//  [b[0], a[1]], i++
//  2.2) a[0] >= b[0] && a[1] >= b[1]
//              <---a--->
//       <---b--->
//  [a[0], b[1]], j++
//  2.3) a[0] >= b[0] && a[1] < b[1]
//          <---a--->
//        <-----b------>
//  [a[0], a[1]], i++
//  2.4) a[0] < b[0] && a[1] >= b[1]
//        <-----a------>
//          <---b--->
//  [b[0], b[1]], j++

// 简化代码
// 将有交集的所有情况归结为
// 左边 max(a[0], b[0])
// 右边 min(a[1], b[1])

// Submission Result: Accepted