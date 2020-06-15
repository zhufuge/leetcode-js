// 1184. Distance Between Bus Stops
// Easy   55%


// A bus has n stops numbered from 0 to n - 1 that form a circle. We know the
// distance between all pairs of neighboring stops where distance[i] is the
// distance between the stops number i and (i + 1) % n.
// The bus goes along both directions i.e. clockwise and counterclockwise.
// Return the shortest distance between the given start and destination stops.

// Example 1:
//
// (0)(start) ------1------> (1)(destination)
//  |                         |
//  4                         2
//  |                         |
// (3)--------------3------> (2)
//
// Input: distance = [1,2,3,4], start = 0, destination = 1
// Output: 1
// Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.

// Example 2:
//
// (0)(start) ------1------> (1)
//  |                         |
//  4                         2
//  |                         |
// (3)--------------3------> (2)(destination)
//
// Input: distance = [1,2,3,4], start = 0, destination = 2
// Output: 3
// Explanation: Distance between 0 and 2 is 3 or 7, minimum is 3.

// Example 3:
//
// (0)(start) ------1------> (1)
//  |                         |
//  4                         2
//  |                         |
// (3)(destination)-3------> (2)
//
// Input: distance = [1,2,3,4], start = 0, destination = 3
// Output: 4
// Explanation: Distance between 0 and 3 is 6 or 4, minimum is 4.

// Constraints:
//     1 <= n <= 10^4
//     distance.length == n
//     0 <= start, destination < n
//     0 <= distance[i] <= 10^4


/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
const distanceBetweenBusStops = function(distance, start, destination) {
  const n = distance.length
  let forward = back = 0
  for (let i = start; i != destination; i = (i + 1) % n) forward += distance[i]
  for (let i = destination; i != start; i = (i + 1) % n) back += distance[i]
  return Math.min(forward, back)
}

;[
  [[1,2,3,4], 0, 1],
  [[1,2,3,4], 0, 2],
  [[1,2,3,4], 0, 3],
].forEach(([distance, start, destination]) => {
  console.log(distanceBetweenBusStops(distance, start, destination))
})

// Solution:
// 分别计算
// 1）从 start 开始按数组顺序到 destination 的距离
// 2）从 destination 开始按数组顺序到 start 的距离
// 最后取二者中小的即可。

// Submission Result: Accepted