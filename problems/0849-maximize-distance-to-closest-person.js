// 849. Maximize Distance to Closest Person
// Easy   42%


// In a row of seats, 1 represents a person sitting in that seat, and 0
// represents that the seat is empty.
// There is at least one empty seat, and at least one person sitting.
// Alex wants to sit in the seat such that the distance between him and the
// closest person to him is maximized.
// Return that maximum distance to closest person.
// Example 1:
// Input: [1,0,0,0,1,0,1]
// Output: 2
// Explanation:
// If Alex sits in the second open seat (seats[2]), then the closest person has
// distance 2.
// If Alex sits in any other open seat, the closest person has distance 1.
// Thus, the maximum distance to the closest person is 2.
// Example 2:
// Input: [1,0,0,0]
// Output: 3
// Explanation:
// If Alex sits in the last seat, the closest person is 3 seats away.
// This is the maximum distance possible, so the answer is 3.
// Note:
//     1 <= seats.length <= 20000
//     seats contains only 0s or 1s, at least one 0, and at least one 1.


/**
 * @param {number[]} seats
 * @return {number}
 */
const maxDistToClosest = function(seats) {
  let res = seats.indexOf(1)
  let count = 0
  for (let i = res + 1; i < seats.length; i++) {
    if (seats[i] === 0) count++
    else {
      res = Math.max(res, Math.ceil(count / 2))
      count = 0
    }
  }
  return Math.max(res, count)
}

;[
  [1,0,0,0,1,0,1], // 2
  [1,0,0,0],       // 3
  [1,0],           // 1
  [1,0,0,0,1,1,1], // 2
].forEach((seats) => {
  console.log(maxDistToClosest(seats))
})

// Solution:
// Alex 有两种类型的位置可以坐：
// 1. 最两侧空的位置。若有空位，其最大距离为空位置的数量
// 2. 空位置位于两人之间。其最大距离为空位置的数量的一半（向上取整）

// Submission Result: Accepted