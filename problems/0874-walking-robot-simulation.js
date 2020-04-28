// 874. Walking Robot Simulation
// Easy   34%


// A robot on an infinite grid starts at point (0, 0) and faces north.  The robot
// can receive one of three possible types of commands:
//     -2: turn left 90 degrees
//     -1: turn right 90 degrees
//     1 <= x <= 9: move forward x units
// Some of the grid s quares are obstacles.
// The i-th obstacle is at grid point (obstacles[i][0], obstacles[i][1])
// If the robot would try to move onto them, the robot stays on the previous grid
// square instead (but still continues following the rest of the route.)
// Return the square of the maximum Euclidean distance that the robot will be
// from the origin.

// Example 1:
// Input: commands = [4,-1,3], obstacles = []
// Output: 25
// Explanation: robot will go to (3, 4)
// Example 2:
// Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
// Output: 65
// Explanation: robot will be stuck at (1, 4) before turning left and going to
// (1, 8)

// Note:
//     0 <= commands.length <= 10000
//     0 <= obstacles.length <= 10000
//     -30000 <= obstacle[i][0] <= 30000
//     -30000 <= obstacle[i][1] <= 30000
//     The answer is guaranteed to be less than 2 ^ 31.


/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
const robotSim = function(commands, obstacles) {
  let isX = false, isPositive = true
  let x = 0, y = 0

  const obsHash = {}
  for (let ob of obstacles) {
    if (!obsHash['X' + ob[0]]) obsHash['X' + ob[0]] = []
    obsHash['X' + ob[0]].push(ob[1])
    if (!obsHash['Y' + ob[1]]) obsHash['Y' + ob[1]] = []
    obsHash['Y' + ob[1]].push(ob[0])
  }

  function move(isX, isPositive, step) {
    const start = isX ? x : y
    if (!isPositive) step *= -1
    let next = start + step
    const list = obsHash[isX ? 'Y' + y : 'X' + x]
    if (isPositive) {
      if (Array.isArray(list)) {
        for (let p of list) if (p > start) next = Math.min(next, p - 1)
      }
    } else {
      if (Array.isArray(list)) {
        for (let p of list) if (p < start) next = Math.max(next, p + 1)
      }
    }
    if (isX) x = next
    else y = next
  }
  let result = 0
  for (let command of commands) {
    if (command === -2) {
      if (!isX) isPositive = !isPositive
      isX = !isX
    } else if (command === -1) {
      if (isX) isPositive = !isPositive
      isX = !isX
    } else if (command > 0 && command < 10) {
      move(isX, isPositive, command)
      result = Math.max(result, x * x + y * y)
    }
  }
  return result
}

const better = function(commands, obstacles) {
  const hash = {}
  for (let obs of obstacles) {
    hash[obs[0] + ' ' + obs[1]] = true
  }

  const DIRS = [[0,1],[1,0],[0,-1],[-1,0]]
  let d = 0, x = 0, y = 0, result = 0
  for (let c of commands) {
    if (c === -2) d = (d + 4 - 1) % 4
    else if (c === -1) d = (d + 1) % 4
    else {
      while (c-- > 0 && !hash[(x + DIRS[d][0]) + ' ' + (y + DIRS[d][1])]) {
        x += DIRS[d][0]
        y += DIRS[d][1]
      }
      result = Math.max(result, x * x + y * y)
    }
  }
  return result
}

;[
  [[4,-1,3], []],  // 25
  [[4,-1,4,-2,4], [[2,4]]], // 65
  [[4,-2,4], [[-2,4]]], // 17
  [[4], [[0,3]]], // 4
  [[-1,-1,4],[[0,-2]]], // 1
  [
    [-2,8,3,7,-1],
    [[-4,-1],[1,-1],[1,4],[5,0],[4,5],[-2,-1],[2,-5],[5,1],[-3,-1],[5,-3]]
  ], // 324
  [
    [2,-1,8,-1,6],
    [[1,5],[-5,-5],[0,4],[-1,-1],[4,5],[-5,-3],[-2,1],[-2,-5],[0,5],[0,-1]]
  ], // 80
].forEach(([commands, obstacles]) => {
  // console.log(robotSim(commands, obstacles))
  console.log(better(commands, obstacles))
})

// Solution:
// 使用两个变量记录机器人移动的方向。
// 使用 HashMap 来记录每条轴线的障碍物位置的数组，
// 如 障碍物(2,4)，则记录为 `{ 'X2': [4], 'Y4': [2]}`
// 如果机器人在该条轴线上移动，则遍历该条轴线的数组，找出能够移动的最大位置。

// 更好的方法：
// 同样使用 HashMap，但是不是记录轴线数组，而是记录每个障碍物的位置的坐标（如 `{'2 4': true}`)
// 然后移动的时候一步一步来，当碰到障碍物则停止
// （真的是不能急，不要贪图一步到位，一步一个脚印才是最简单的方法）

// Submission Result: Accepted