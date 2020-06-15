// 812. Largest Triangle Area
// Easy   58%


// You have a list of points in the plane. Return the area of the largest
// triangle that can be formed by any 3 of the points.
// Example:
// Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
// Output: 2
// Explanation:
// The five points are show in the figure below. The red triangle is the largest.
//
//    ^
//    |
//    x
//    |\
//    x \
//    |  \
//    x-x-x----->
//
// Notes:
//     3 <= points.length <= 50.
//     No points will be duplicated.
//      -50 <= points[i][j] <= 50.
//     Answers within 10^-6 of the true value will be accepted as correct.


/**
 * @param {number[][]} points
 * @return {number}
 */
const largestTriangleArea = function(points) {
  const n = points.length
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {

      }
    }
  }
}

;[
  [[0,0],[0,1],[1,0],[0,2],[2,0]],
].forEach(() => {

})

// Solution:

// TODO #812 计算三个点形成的三角形的面积

// Submission Result: Accept