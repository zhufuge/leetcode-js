// 1266. Minimum Time Visiting All Points
// Easy   79%


// On a plane there are n points with integer coordinates points[i] = [xi, yi].
// Your task is to find the minimum time in seconds to visit all points.
// You can move according to the next rules:
//     In one second always you can either move vertically, horizontally by one
// unit or diagonally (it means to move one unit vertically and one unit
// horizontally in one second).
//     You have to visit the points in the same order as they appear in the
// array.

// Example 1:
// Input: points = [[1,1],[3,4],[-1,0]]
// Output: 7
// Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] ->
// [1,2] -> [0,1] -> [-1,0]
// Time from [1,1] to [3,4] = 3 seconds
// Time from [3,4] to [-1,0] = 4 seconds
// Total time = 7 seconds
// Example 2:
// Input: points = [[3,2],[-2,2]]
// Output: 5

// Constraints:
//     points.length == n
//     1 <= n <= 100
//     points[i].length == 2
//     -1000 <= points[i][0], points[i][1] <= 1000


/**
 * @param {number[][]} points
 * @return {number}
 */
const minTimeToVisitAllPoints = function(points) {
  let res = 0
  for (let i = 1; i < points.length; i++) {
    const p1 = points[i - 1], p2 = points[i]
    res += Math.max(Math.abs(p1[0] - p2[0]), Math.abs(p1[1] - p2[1]))
  }
  return res
}

;[
  [[1,1],[3,4],[-1,0]], // 7
  [[3,2],[-2,2]], // 5
].forEach((points) => {
  console.log(minTimeToVisitAllPoints(points))
})

// Solution:
// 按顺序计算每两个相邻点间移动所需的时间，最后加起来得到答案
// 计算两点间移动所需时间只需计算 x-轴 和 y-轴 中距离最大的那一个值即可。
// 因为对角线移动可以移动任意一个（x-轴 + y-轴）
// 先按对角线移动（x-距离或y-距离）中较小的一个的时间，再水平或垂直移动到下一个点。

// x-轴距离 > y-轴距离
// .
// \
//  \
//   \
//    \____.

// y-轴距离 > x-轴距离
// .
//  \
//   \
//   |
//   |
//   .

// Submission Result: Accepted