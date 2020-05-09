// 836. Rectangle Overlap
// Easy   49%


// A rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) are the
// coordinates of its bottom-left corner, and (x2, y2) are the coordinates of its
// top-right corner.
// Two rectangles overlap if the area of their intersection is positive.  To be
// clear, two rectangles that only touch at the corner or edges do not overlap.
// Given two (axis-aligned) rectangles, return whether they overlap.
// Example 1:
// Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
// Output: true
// Example 2:
// Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
// Output: false
// Notes:
//     Both rectangles rec1 and rec2 are lists of 4 integers.
//     All coordinates in rectangles will be between -10^9 and 10^9.


/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
const isRectangleOverlap = function(rec1, rec2) {
  return rec1[0] < rec2[2] && rec2[0] < rec1[2] && rec1[1] < rec2[3] && rec2[1] < rec1[3]
}

;[
  [[0,0,2,2], [1,1,3,3]], // true
  [[0,0,1,1], [1,0,2,1]], // false
  [[7,8,13,15], [10,8,12,20]], // true
  [[1,1,3,2], [2,0,4,3]], // true
].forEach(([rec1, rec2]) => {
  console.log(isRectangleOverlap(rec1, rec2))
})

// Solution:

// 1. 判断是否存在一个矩形的四个点中的一个在另一个矩阵内
// 【错误】不一定有点在另一个矩阵内才重合，例如一个矩阵的一条边横穿另一个矩阵
const faild = function(rec1, rec2) {
  function isInner(i, j) {
    return rec1[0] < i && i < rec1[2] && rec1[1] < j && j < rec1[3]
  }
  return isInner(rec2[0], rec2[1]) ||
    isInner(rec2[0], rec2[3]) ||
    isInner(rec2[2], rec2[3]) ||
    isInner(rec2[2], rec2[1])
}

// 2. 大神的思路(真的神！)
// 先考虑 1D 情况
// 若两条线 (a1,b1) (a2,b2) 重叠
// a1------b1     | a1----b1          |           a1-----b1 |     a1------b1
//     a2------b2 |         a2-----b2 | a2-----b2           | a2-------------b2
// 则 a1 < b2 && a2 < b1

// 再回到 2D 的情况
// 若两个矩阵在 x 轴和 y 轴上都重叠，则它们在平面上重叠

// x 轴上的点为 （rec1[0],rec1[2]) (rec2[0],rec2[2])
// 即需 rec1[0] < rec2[2] && rec2[0] < rec1[2]

// y 轴上的点为  (rec1[1],rec1[3]) (rec2[1],rec2[3])
// 即需 rec1[1] < rec2[3] && rec2[1] < rec1[3]

// Submission Result: Accepted