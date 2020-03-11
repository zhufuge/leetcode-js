// 1037. Valid Boomerang
// Easy   38%


// A boomerang is a set of 3 points that are all distinct and not in a straight
// line.
// Given a list of three points in the plane, return whether these points are a
// boomerang.

// Example 1:
// Input: [[1,1],[2,3],[3,2]]
// Output: true
// Example 2:
// Input: [[1,1],[2,2],[3,3]]
// Output: false

// Note:
//     points.length == 3
//     points[i].length == 2
//     0 <= points[i][j] <= 100

/**
 * @param {number[][]} points
 * @return {boolean}
 */
const isBoomerang = function(points) {
  return (
    (points[0][0] - points[1][0]) * (points[0][1] - points[2][1]) !=
    (points[0][0] - points[2][0]) * (points[0][1] - points[1][1])
  )
}

;[
  [[1, 1],[2, 3],[3, 2],], // true
  [[1,1],[2,2],[3,3]],     // false
  [[0,0],[1,0],[2,2]],     // true
  [[0,1],[0,1],[2,1]],     // false  
].forEach(points => {
  console.log(isBoomerang(points))
})

// Solution:
// 判断是否为直线，使用点差法即可

// Submission Result: Accepted
