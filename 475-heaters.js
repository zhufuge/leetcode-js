// 475. Heaters
// Easy   29%


// Winter is coming! Your first job during the contest is to design a standard
// heater with fixed warm radius to warm all the houses.

// Now, you are given positions of houses and heaters on a horizontal line, find
// out minimum radius of heaters so that all houses could be covered by those
// heaters.

// So, your input will be the positions of houses and heaters seperately, and
// your expected output will be the minimum radius standard of heaters.

// Note:

// Numbers of houses and heaters you are given are non-negative and will not
// exceed 25000.
// Positions of houses and heaters you are given are non-negative and will not
// exceed 10^9.
// As long as a house is in the heaters' warm radius range, it can be warmed.
// All the heaters follow your radius standard and the warm radius will the same.

// Example 1:

// Input: [1,2,3],[2]
// Output: 1
// Explanation: The only heater was placed in the position 2, and if we use the
// radius 1 standard, then all the houses can be warmed.

// Example 2:

// Input: [1,2,3,4],[1,4]
// Output: 1
// Explanation: The two heater was placed in the position 1 and 4. We need to use
// radius 1 standard, then all the houses can be warmed.


/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
const findRadius = function(houses, heaters) {
  houses.sort((a, b) => a - b)
  heaters.sort((a, b) => a - b)
  const n = houses.length
  let i = 0, j = 0, result = 0
  while (i < n) {
    const next = heaters[j + 1] || Infinity
    if (houses[i] < next) {
      result = Math.max(result, Math.min(
        Math.abs(next - houses[i]),
        Math.abs(heaters[j] - houses[i])
      ))
      i++
    } else {
      j++
    }
  }
  return result
}

;[
  [[1,2,3], [2]],               // 1
  [[1,2,3,4], [1,4]],           // 1
  [[1,2,3,4], [5]],             // 4
  [[1,2,3,5,15], [2,30]],       // 13
  [[1,2,3,5,15], [3,12]],       // 3
].forEach(args => {
  console.log(findRadius(...args))
})

// Solution:

// 排序两个数组，这样它们就像是在一条线上了。

// 首先考虑房子全部在加热器内部，即左右两边都有加热器。
// 这种情况下每个房子计算其到左右两边的加热器的距离，
// 选择连接最近的那个加热器。
// 最后计算加热器需要的最短半径。

// 如果房子只有左边或右边有，那就没的选了，只能选有的那边。


// Submission Result: Accepted
