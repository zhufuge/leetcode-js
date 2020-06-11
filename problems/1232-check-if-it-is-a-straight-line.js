// 1232. Check If It Is a Straight Line
// Easy   47%


// You are given an array coordinates, coordinates[i] = [x, y], where [x, y]
// represents the coordinate of a point. Check if these points make a straight
// line in the XY plane.


// Example 1:
// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true
// Example 2:
// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false

// Constraints:
//     2 <= coordinates.length <= 1000
//     coordinates[i].length == 2
//     -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
//     coordinates contains no duplicate point.


/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function(coordinates) {
  const [[x0, y0], [x1, y1]] = coordinates
  const dx = x0 - x1, dy = y0 - y1
  for (let c of coordinates) {
    if (dx * (y0 - c[1]) !== dy * (x0 - c[0])) return false
  }
  return true
}

;[
  [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]],
  [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]],
  [[1,1],[2,2],[2,0]], // false
].forEach((coordinates) => {
  console.log(checkStraightLine(coordinates))
})

// Solution:
//                         x1 - x2     dx
// 两点连成的直线的斜率为 k = -------- = ------
//                         y1 - y2     dy
// 比较第一个点与其余点形成的直线的斜率，若都相同则都在一条直线上，否则不在.
// 由于 JS 不好记录分数，因此，使用两个变量来记录dx和dy，分别为x轴距离 x1-x2 和 y轴距离
// y1-y2
// 在比较两个斜率时，将除法转换成乘法，如
//  x1 - x2     x1 - xi
// --------- = --------- --> (x1-x2) * (y1-yi) = (x1-xi) * (y1-y2)
//  y1 - y2     y1 - yi
//
//  --> dx * (y1-yi) = dy * (x1-xi)


// Submission Result: Accepted