// 1029. Two City Scheduling
// Easy   55%

// There are 2N people a company is planning to interview. The cost of flying the
// i-th person to city A is costs[i][0], and the cost of flying the i-th person
// to city B is costs[i][1].
// Return the minimum cost to fly every person to a city such that exactly N
// people arrive in each city.

// Example 1:
// Input: [[10,20],[30,200],[400,50],[30,20]]
// Output: 110
// Explanation:
// The first person goes to city A for a cost of 10.
// The second person goes to city A for a cost of 30.
// The third person goes to city B for a cost of 50.
// The fourth person goes to city B for a cost of 20.
// The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people
// interviewing in each city.

// Note:
//     1 <= costs.length <= 100
//     It is guaranteed that costs.length is even.
//     1 <= costs[i][0], costs[i][1] <= 1000

/**
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = function(costs) {
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]))
  let min = 0
  for (let i = 0, l = costs.length; i < l; i++) {
    min += costs[i][i < l / 2 ? 0 : 1]
  }
  return min
}

;[
  [
    [10, 20],
    [30, 200],
    [400, 50],
    [30, 20],
  ], // 110
  [
    [1, 10],
    [2, 20],
  ], // 12
  [
    [1, 10],
    [2, 20],
    [3, 30],
    [4, 5],
  ], // 10 + 2 + 3 + 5 = 20
].forEach(costs => {
  console.log(twoCitySchedCost(costs))
})

// Solution:
// 方法1：
// 使用 countA,countB 来记录到两个城市的人数
// 按费用差，从大到小排序，遍历时去费用小的城市，直到某个城市的人到达一半
// TO(nlogn)-SO(n)

// 方法2：（1的改进）
// 按 costs[i][0] - costs[i][1] 从小到大排序
// 前一半人去城市a, 后一半去城市b
// TO(nlogn)-SO(n)

// Submission Result: Accepted
